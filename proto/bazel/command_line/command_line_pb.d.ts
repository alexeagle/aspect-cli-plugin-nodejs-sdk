// @generated by protoc-gen-es v1.8.0 with parameter "keep_empty_files=true,target=js+dts"
// @generated from file proto/bazel/command_line/command_line.proto (package command_line, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { OptionEffectTag, OptionMetadataTag } from "../options/option_filters_pb.js";

/**
 * @generated from message command_line.CommandLine
 */
export declare class CommandLine extends Message<CommandLine> {
  /**
   * @generated from field: string command_line_label = 1;
   */
  commandLineLabel: string;

  /**
   * @generated from field: repeated command_line.CommandLineSection sections = 2;
   */
  sections: CommandLineSection[];

  constructor(data?: PartialMessage<CommandLine>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "command_line.CommandLine";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommandLine;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommandLine;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommandLine;

  static equals(a: CommandLine | PlainMessage<CommandLine> | undefined, b: CommandLine | PlainMessage<CommandLine> | undefined): boolean;
}

/**
 * @generated from message command_line.CommandLineSection
 */
export declare class CommandLineSection extends Message<CommandLineSection> {
  /**
   * @generated from field: string section_label = 1;
   */
  sectionLabel: string;

  /**
   * @generated from oneof command_line.CommandLineSection.section_type
   */
  sectionType: {
    /**
     * @generated from field: command_line.ChunkList chunk_list = 2;
     */
    value: ChunkList;
    case: "chunkList";
  } | {
    /**
     * @generated from field: command_line.OptionList option_list = 3;
     */
    value: OptionList;
    case: "optionList";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<CommandLineSection>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "command_line.CommandLineSection";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommandLineSection;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommandLineSection;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommandLineSection;

  static equals(a: CommandLineSection | PlainMessage<CommandLineSection> | undefined, b: CommandLineSection | PlainMessage<CommandLineSection> | undefined): boolean;
}

/**
 * @generated from message command_line.ChunkList
 */
export declare class ChunkList extends Message<ChunkList> {
  /**
   * @generated from field: repeated string chunk = 1;
   */
  chunk: string[];

  constructor(data?: PartialMessage<ChunkList>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "command_line.ChunkList";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChunkList;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChunkList;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChunkList;

  static equals(a: ChunkList | PlainMessage<ChunkList> | undefined, b: ChunkList | PlainMessage<ChunkList> | undefined): boolean;
}

/**
 * @generated from message command_line.OptionList
 */
export declare class OptionList extends Message<OptionList> {
  /**
   * @generated from field: repeated command_line.Option option = 1;
   */
  option: Option[];

  constructor(data?: PartialMessage<OptionList>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "command_line.OptionList";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OptionList;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OptionList;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OptionList;

  static equals(a: OptionList | PlainMessage<OptionList> | undefined, b: OptionList | PlainMessage<OptionList> | undefined): boolean;
}

/**
 * @generated from message command_line.Option
 */
export declare class Option extends Message<Option> {
  /**
   * @generated from field: string combined_form = 1;
   */
  combinedForm: string;

  /**
   * @generated from field: string option_name = 2;
   */
  optionName: string;

  /**
   * @generated from field: string option_value = 3;
   */
  optionValue: string;

  /**
   * @generated from field: repeated options.OptionEffectTag effect_tags = 4;
   */
  effectTags: OptionEffectTag[];

  /**
   * @generated from field: repeated options.OptionMetadataTag metadata_tags = 5;
   */
  metadataTags: OptionMetadataTag[];

  constructor(data?: PartialMessage<Option>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "command_line.Option";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Option;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Option;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Option;

  static equals(a: Option | PlainMessage<Option> | undefined, b: Option | PlainMessage<Option> | undefined): boolean;
}

