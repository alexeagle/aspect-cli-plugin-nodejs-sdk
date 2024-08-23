import type { ConnectRouter } from "@connectrpc/connect";
import * as proto from "@buf/aspect-build_aspect-cli.bufbuild_es/aspect/cli/plugin/v1alpha4/plugin_pb.js";
import { Plugin } from "@buf/aspect-build_aspect-cli.connectrpc_es/aspect/cli/plugin/v1alpha4/plugin_connect.js"
import { Health } from '@buf/grpc_grpc.connectrpc_es/grpc/health/v1/health_connect.js'
import { HealthCheckResponse, HealthCheckResponse_ServingStatus } from "@buf/grpc_grpc.bufbuild_es/grpc/health/v1/health_pb.js";
import { StdioData, StdioData_Channel } from '../proto/plugin/grpc_stdio_pb.js';
import { GRPCStdio } from "../proto/plugin/grpc_stdio_connect.js";

type FIXME = any;

export default (router: ConnectRouter) => {
  router.service(Health as FIXME, {
    async check(_) {
        return new HealthCheckResponse({status: HealthCheckResponse_ServingStatus.SERVING})
    }
  });
  router.service(GRPCStdio as FIXME, {
    async *streamStdio(_) {
        yield new StdioData({
            channel: StdioData_Channel.STDOUT,
            
        })
      }
  });
  router.service(Plugin as FIXME, {
    async bEPEventCallback(_) {
        return new proto.BEPEventCallbackRes();
    },
    async setup(_) {
      return new proto.SetupRes();
    },
    async postBuildHook(_) {
        return new proto.PostBuildHookRes();
    },
    async postTestHook(_) {
        return new proto.PostTestHookRes();
    },
    async postRunHook(_) {
        return new proto.PostRunHookRes();
    },
    async customCommands(_) {
        return new proto.CustomCommandsRes({
            commands: [
                {
                    use: 'test-command',
                    shortDesc: 'test short description',
                    longDesc: 'testing a longer description',
                },
            ],
        });
    },
    async executeCustomCommand(_) {
        return new proto.ExecuteCustomCommandRes();
    },
  });
}
