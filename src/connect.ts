import type { ConnectRouter } from "@connectrpc/connect";
import * as proto from "../proto/aspect_plugin_pb.js";
import { Plugin } from "../proto/aspect_plugin_connect.js";

export default (router: ConnectRouter) =>
  router.service(Plugin as /*FIXME: */any, {
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
        return new proto.CustomCommandsRes();
    },
    async executeCustomCommand(_) {
        return new proto.ExecuteCustomCommandRes();
    },
  }, {});
