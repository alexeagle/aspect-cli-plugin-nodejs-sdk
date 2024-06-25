// @generated by protoc-gen-connect-es v1.0.0 with parameter "keep_empty_files=true,target=js+dts"
// @generated from file proto/plugin/grpc_stdio.proto (package plugin, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, MethodKind } from "@bufbuild/protobuf";
import { StdioData } from "./grpc_stdio_pb.js";

/**
 * @generated from service plugin.GRPCStdio
 */
export declare const GRPCStdio: {
  readonly typeName: "plugin.GRPCStdio",
  readonly methods: {
    /**
     * @generated from rpc plugin.GRPCStdio.StreamStdio
     */
    readonly streamStdio: {
      readonly name: "StreamStdio",
      readonly I: typeof Empty,
      readonly O: typeof StdioData,
      readonly kind: MethodKind.ServerStreaming,
    },
  }
};

