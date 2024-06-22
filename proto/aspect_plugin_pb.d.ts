// @generated by protoc-gen-es v1.8.0 with parameter "keep_empty_files=true,target=js+dts"
// @generated from file proto/aspect_plugin.proto (package proto, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BuildEvent } from "./bazel/buildeventstream/build_event_stream_pb.js";

/**
 * @generated from message proto.BEPEventCallbackReq
 */
export declare class BEPEventCallbackReq extends Message<BEPEventCallbackReq> {
  /**
   * @generated from field: build_event_stream.BuildEvent event = 1;
   */
  event?: BuildEvent;

  constructor(data?: PartialMessage<BEPEventCallbackReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.BEPEventCallbackReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BEPEventCallbackReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BEPEventCallbackReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BEPEventCallbackReq;

  static equals(a: BEPEventCallbackReq | PlainMessage<BEPEventCallbackReq> | undefined, b: BEPEventCallbackReq | PlainMessage<BEPEventCallbackReq> | undefined): boolean;
}

/**
 * @generated from message proto.BEPEventCallbackRes
 */
export declare class BEPEventCallbackRes extends Message<BEPEventCallbackRes> {
  constructor(data?: PartialMessage<BEPEventCallbackRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.BEPEventCallbackRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BEPEventCallbackRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BEPEventCallbackRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BEPEventCallbackRes;

  static equals(a: BEPEventCallbackRes | PlainMessage<BEPEventCallbackRes> | undefined, b: BEPEventCallbackRes | PlainMessage<BEPEventCallbackRes> | undefined): boolean;
}

/**
 * @generated from message proto.SetupReq
 */
export declare class SetupReq extends Message<SetupReq> {
  /**
   * @generated from field: bytes properties = 1;
   */
  properties: Uint8Array;

  /**
   * @generated from field: proto.File file = 2 [deprecated = true];
   * @deprecated
   */
  file?: File;

  constructor(data?: PartialMessage<SetupReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.SetupReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetupReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetupReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetupReq;

  static equals(a: SetupReq | PlainMessage<SetupReq> | undefined, b: SetupReq | PlainMessage<SetupReq> | undefined): boolean;
}

/**
 * @generated from message proto.File
 */
export declare class File extends Message<File> {
  /**
   * @generated from field: string path = 1;
   */
  path: string;

  constructor(data?: PartialMessage<File>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.File";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): File;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): File;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): File;

  static equals(a: File | PlainMessage<File> | undefined, b: File | PlainMessage<File> | undefined): boolean;
}

/**
 * @generated from message proto.SetupRes
 */
export declare class SetupRes extends Message<SetupRes> {
  constructor(data?: PartialMessage<SetupRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.SetupRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetupRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetupRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetupRes;

  static equals(a: SetupRes | PlainMessage<SetupRes> | undefined, b: SetupRes | PlainMessage<SetupRes> | undefined): boolean;
}

/**
 * @generated from message proto.PostBuildHookReq
 */
export declare class PostBuildHookReq extends Message<PostBuildHookReq> {
  /**
   * @generated from field: uint32 broker_id = 1;
   */
  brokerId: number;

  /**
   * @generated from field: bool is_interactive_mode = 2;
   */
  isInteractiveMode: boolean;

  constructor(data?: PartialMessage<PostBuildHookReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.PostBuildHookReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostBuildHookReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostBuildHookReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostBuildHookReq;

  static equals(a: PostBuildHookReq | PlainMessage<PostBuildHookReq> | undefined, b: PostBuildHookReq | PlainMessage<PostBuildHookReq> | undefined): boolean;
}

/**
 * @generated from message proto.PostBuildHookRes
 */
export declare class PostBuildHookRes extends Message<PostBuildHookRes> {
  constructor(data?: PartialMessage<PostBuildHookRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.PostBuildHookRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostBuildHookRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostBuildHookRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostBuildHookRes;

  static equals(a: PostBuildHookRes | PlainMessage<PostBuildHookRes> | undefined, b: PostBuildHookRes | PlainMessage<PostBuildHookRes> | undefined): boolean;
}

/**
 * @generated from message proto.Command
 */
export declare class Command extends Message<Command> {
  /**
   * @generated from field: string use = 1;
   */
  use: string;

  /**
   * @generated from field: string short_desc = 2;
   */
  shortDesc: string;

  /**
   * @generated from field: string long_desc = 3;
   */
  longDesc: string;

  constructor(data?: PartialMessage<Command>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.Command";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Command;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Command;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Command;

  static equals(a: Command | PlainMessage<Command> | undefined, b: Command | PlainMessage<Command> | undefined): boolean;
}

/**
 * @generated from message proto.CustomCommandsReq
 */
export declare class CustomCommandsReq extends Message<CustomCommandsReq> {
  constructor(data?: PartialMessage<CustomCommandsReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.CustomCommandsReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CustomCommandsReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CustomCommandsReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CustomCommandsReq;

  static equals(a: CustomCommandsReq | PlainMessage<CustomCommandsReq> | undefined, b: CustomCommandsReq | PlainMessage<CustomCommandsReq> | undefined): boolean;
}

/**
 * @generated from message proto.CustomCommandsRes
 */
export declare class CustomCommandsRes extends Message<CustomCommandsRes> {
  /**
   * @generated from field: repeated proto.Command commands = 1;
   */
  commands: Command[];

  constructor(data?: PartialMessage<CustomCommandsRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.CustomCommandsRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CustomCommandsRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CustomCommandsRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CustomCommandsRes;

  static equals(a: CustomCommandsRes | PlainMessage<CustomCommandsRes> | undefined, b: CustomCommandsRes | PlainMessage<CustomCommandsRes> | undefined): boolean;
}

/**
 * @generated from message proto.Context
 */
export declare class Context extends Message<Context> {
  /**
   * @generated from field: string workspaceRoot = 1;
   */
  workspaceRoot: string;

  constructor(data?: PartialMessage<Context>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.Context";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Context;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Context;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Context;

  static equals(a: Context | PlainMessage<Context> | undefined, b: Context | PlainMessage<Context> | undefined): boolean;
}

/**
 * @generated from message proto.ExecuteCustomCommandReq
 */
export declare class ExecuteCustomCommandReq extends Message<ExecuteCustomCommandReq> {
  /**
   * @generated from field: string customCommand = 1;
   */
  customCommand: string;

  /**
   * @generated from field: proto.Context ctx = 2;
   */
  ctx?: Context;

  /**
   * @generated from field: repeated string args = 3;
   */
  args: string[];

  /**
   * @generated from field: repeated string bazelStartupArgs = 4;
   */
  bazelStartupArgs: string[];

  constructor(data?: PartialMessage<ExecuteCustomCommandReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.ExecuteCustomCommandReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExecuteCustomCommandReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExecuteCustomCommandReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExecuteCustomCommandReq;

  static equals(a: ExecuteCustomCommandReq | PlainMessage<ExecuteCustomCommandReq> | undefined, b: ExecuteCustomCommandReq | PlainMessage<ExecuteCustomCommandReq> | undefined): boolean;
}

/**
 * @generated from message proto.ExecuteCustomCommandRes
 */
export declare class ExecuteCustomCommandRes extends Message<ExecuteCustomCommandRes> {
  constructor(data?: PartialMessage<ExecuteCustomCommandRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.ExecuteCustomCommandRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExecuteCustomCommandRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExecuteCustomCommandRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExecuteCustomCommandRes;

  static equals(a: ExecuteCustomCommandRes | PlainMessage<ExecuteCustomCommandRes> | undefined, b: ExecuteCustomCommandRes | PlainMessage<ExecuteCustomCommandRes> | undefined): boolean;
}

/**
 * @generated from message proto.PostTestHookReq
 */
export declare class PostTestHookReq extends Message<PostTestHookReq> {
  /**
   * @generated from field: uint32 broker_id = 1;
   */
  brokerId: number;

  /**
   * @generated from field: bool is_interactive_mode = 2;
   */
  isInteractiveMode: boolean;

  constructor(data?: PartialMessage<PostTestHookReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.PostTestHookReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostTestHookReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostTestHookReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostTestHookReq;

  static equals(a: PostTestHookReq | PlainMessage<PostTestHookReq> | undefined, b: PostTestHookReq | PlainMessage<PostTestHookReq> | undefined): boolean;
}

/**
 * @generated from message proto.PostTestHookRes
 */
export declare class PostTestHookRes extends Message<PostTestHookRes> {
  constructor(data?: PartialMessage<PostTestHookRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.PostTestHookRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostTestHookRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostTestHookRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostTestHookRes;

  static equals(a: PostTestHookRes | PlainMessage<PostTestHookRes> | undefined, b: PostTestHookRes | PlainMessage<PostTestHookRes> | undefined): boolean;
}

/**
 * @generated from message proto.PostRunHookReq
 */
export declare class PostRunHookReq extends Message<PostRunHookReq> {
  /**
   * @generated from field: uint32 broker_id = 1;
   */
  brokerId: number;

  /**
   * @generated from field: bool is_interactive_mode = 2;
   */
  isInteractiveMode: boolean;

  constructor(data?: PartialMessage<PostRunHookReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.PostRunHookReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostRunHookReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostRunHookReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostRunHookReq;

  static equals(a: PostRunHookReq | PlainMessage<PostRunHookReq> | undefined, b: PostRunHookReq | PlainMessage<PostRunHookReq> | undefined): boolean;
}

/**
 * @generated from message proto.PostRunHookRes
 */
export declare class PostRunHookRes extends Message<PostRunHookRes> {
  constructor(data?: PartialMessage<PostRunHookRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.PostRunHookRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostRunHookRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostRunHookRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostRunHookRes;

  static equals(a: PostRunHookRes | PlainMessage<PostRunHookRes> | undefined, b: PostRunHookRes | PlainMessage<PostRunHookRes> | undefined): boolean;
}

/**
 * @generated from message proto.PromptRunReq
 */
export declare class PromptRunReq extends Message<PromptRunReq> {
  /**
   * @generated from field: string label = 1;
   */
  label: string;

  /**
   * @generated from field: string default = 2;
   */
  default: string;

  /**
   * @generated from field: bool allow_edit = 3;
   */
  allowEdit: boolean;

  /**
   * @generated from field: string mask = 5;
   */
  mask: string;

  /**
   * @generated from field: bool hide_entered = 6;
   */
  hideEntered: boolean;

  /**
   * @generated from field: bool is_confirm = 8;
   */
  isConfirm: boolean;

  /**
   * @generated from field: bool is_vim_mode = 9;
   */
  isVimMode: boolean;

  constructor(data?: PartialMessage<PromptRunReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.PromptRunReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PromptRunReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PromptRunReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PromptRunReq;

  static equals(a: PromptRunReq | PlainMessage<PromptRunReq> | undefined, b: PromptRunReq | PlainMessage<PromptRunReq> | undefined): boolean;
}

/**
 * @generated from message proto.PromptRunRes
 */
export declare class PromptRunRes extends Message<PromptRunRes> {
  /**
   * @generated from field: string result = 1;
   */
  result: string;

  /**
   * @generated from field: proto.PromptRunRes.Error error = 2;
   */
  error?: PromptRunRes_Error;

  constructor(data?: PartialMessage<PromptRunRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.PromptRunRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PromptRunRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PromptRunRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PromptRunRes;

  static equals(a: PromptRunRes | PlainMessage<PromptRunRes> | undefined, b: PromptRunRes | PlainMessage<PromptRunRes> | undefined): boolean;
}

/**
 * @generated from message proto.PromptRunRes.Error
 */
export declare class PromptRunRes_Error extends Message<PromptRunRes_Error> {
  /**
   * @generated from field: bool happened = 1;
   */
  happened: boolean;

  /**
   * @generated from field: string message = 2;
   */
  message: string;

  constructor(data?: PartialMessage<PromptRunRes_Error>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.PromptRunRes.Error";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PromptRunRes_Error;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PromptRunRes_Error;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PromptRunRes_Error;

  static equals(a: PromptRunRes_Error | PlainMessage<PromptRunRes_Error> | undefined, b: PromptRunRes_Error | PlainMessage<PromptRunRes_Error> | undefined): boolean;
}
