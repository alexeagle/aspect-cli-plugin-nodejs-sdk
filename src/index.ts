/// <reference types="node"/>
import { fastify } from "fastify";
import { fastifyConnectPlugin } from "@connectrpc/connect-fastify";
import routes from "./connect.js";

const host = 'localhost';
const port = 4339;

async function main() {
  const server = fastify({"http2": true});
  await server.register(fastifyConnectPlugin, {
    routes,
  });
  await server.listen({ host, port });
  // Protocol handshake, see
  // https://github.com/hashicorp/go-plugin/blob/main/docs/guide-plugin-write-non-go.md#4-output-handshake-information
  process.stdout.write(`1|3|tcp|127.0.0.1:${port}|grpc\n`);
}

void main();
