Not quite working yet:

```
aspect_cli_plugin_nodejs_sdk % bazel build src
2024-06-22T15:36:07.731-0700 [INFO]  hello-world: running hello-world plugin from bazel-bin/src/src_/src
2024-06-22T15:36:08.125-0700 [ERROR] hello-world.stdio:
error receiving data: err="rpc error:
code = Unknown desc = unexpected HTTP status code received from server:
415 (Unsupported Media Type); transport:
received unexpected content-type \"application/json; charset=utf-8\""
INFO: Analyzed target //src:src (0 packages loaded, 0 targets configured).
INFO: Found 1 target...
Target //src:src up-to-date:
  bazel-bin/src/src_/src
INFO: Elapsed time: 1.032s, Critical Path: 0.91s
INFO: 3 processes: 1 internal, 1 darwin-sandbox, 1 local.
INFO: Build completed successfully, 3 total actions
2024/06/22 15:36:09 [ERR] plugin: plugin acceptAndServe error: broker close
```
