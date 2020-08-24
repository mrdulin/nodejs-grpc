// package: user
// file: src/protos/user/user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as src_protos_share_topic_pb from "../../../src/protos/share/topic_pb";
import * as src_protos_reply_reply_pb from "../../../src/protos/reply/reply_pb";

export class UserEntity extends jspb.Message { 
    getId(): string;
    setId(value: string): UserEntity;

    getLoginname(): string;
    setLoginname(value: string): UserEntity;

    getAvatarUrl(): string;
    setAvatarUrl(value: string): UserEntity;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserEntity.AsObject;
    static toObject(includeInstance: boolean, msg: UserEntity): UserEntity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserEntity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserEntity;
    static deserializeBinaryFromReader(message: UserEntity, reader: jspb.BinaryReader): UserEntity;
}

export namespace UserEntity {
    export type AsObject = {
        id: string,
        loginname: string,
        avatarUrl: string,
    }
}

export class UserDetail extends jspb.Message { 
    getLoginname(): string;
    setLoginname(value: string): UserDetail;

    getAvatarUrl(): string;
    setAvatarUrl(value: string): UserDetail;

    getGithubusername(): string;
    setGithubusername(value: string): UserDetail;

    getCreateAt(): string;
    setCreateAt(value: string): UserDetail;

    getScore(): number;
    setScore(value: number): UserDetail;

    clearRecentTopicsList(): void;
    getRecentTopicsList(): Array<src_protos_share_topic_pb.TopicBase>;
    setRecentTopicsList(value: Array<src_protos_share_topic_pb.TopicBase>): UserDetail;
    addRecentTopics(value?: src_protos_share_topic_pb.TopicBase, index?: number): src_protos_share_topic_pb.TopicBase;

    clearRecentRepliesList(): void;
    getRecentRepliesList(): Array<src_protos_reply_reply_pb.RecentReply>;
    setRecentRepliesList(value: Array<src_protos_reply_reply_pb.RecentReply>): UserDetail;
    addRecentReplies(value?: src_protos_reply_reply_pb.RecentReply, index?: number): src_protos_reply_reply_pb.RecentReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserDetail.AsObject;
    static toObject(includeInstance: boolean, msg: UserDetail): UserDetail.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserDetail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserDetail;
    static deserializeBinaryFromReader(message: UserDetail, reader: jspb.BinaryReader): UserDetail;
}

export namespace UserDetail {
    export type AsObject = {
        loginname: string,
        avatarUrl: string,
        githubusername: string,
        createAt: string,
        score: number,
        recentTopicsList: Array<src_protos_share_topic_pb.TopicBase.AsObject>,
        recentRepliesList: Array<src_protos_reply_reply_pb.RecentReply.AsObject>,
    }
}
