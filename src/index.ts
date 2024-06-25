/// <reference types="node"/>
import { fastify } from "fastify";
import { fastifyConnectPlugin } from "@connectrpc/connect-fastify";
import routes from "./connect.js";
import { Interceptor } from "@connectrpc/connect";

const host = 'localhost';

const logger: Interceptor = (next) => async (req) => {
  console.log(`recevied message on ${req.url}`);
  return await next(req);
};

async function main() {
  const server = fastify({http2: true, logger: {
    level: 'info',
    // We must not log to stdout since that's the protocol channel
    // We also can't use stderr until we wire up the GRPCIO service
    // to send those back to the client to print.
    file: '/tmp/fastify.log',
  }});
  await server.register(fastifyConnectPlugin, {
    routes,
  });
  const address = new URL(await server.listen({ host, port: /* auto-select */ 0 }));
  
  // Protocol handshake, see
  // https://github.com/hashicorp/go-plugin/blob/main/docs/guide-plugin-write-non-go.md#4-output-handshake-information
  process.stdout.write(`1|3|tcp|127.0.0.1:${address.port}|grpc\n`);

  // FIXME: this isn't working. When running `bazel help` I still get 
  // 2024-06-25T06:47:10.759-0700 [WARN]  hello-world: plugin failed to exit gracefully
  // and the client CLI never exits.
  process.on('SIGQUIT', () => {
    console.error("Recieved SIGQUIT, terminating http server");
    server.close();
  });
}

void main();
