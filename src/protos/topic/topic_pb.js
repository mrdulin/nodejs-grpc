/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var share_user_pb = require('../share/user_pb.js');
goog.exportSymbol('proto.topic.Mdrender', null, global);
goog.exportSymbol('proto.topic.Tab', null, global);
goog.exportSymbol('proto.topic.Topic', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.topic.Topic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.topic.Topic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.topic.Topic.displayName = 'proto.topic.Topic';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.topic.Topic.prototype.toObject = function(opt_includeInstance) {
  return proto.topic.Topic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.topic.Topic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.topic.Topic.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    authorId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tab: jspb.Message.getFieldWithDefault(msg, 3, 0),
    title: jspb.Message.getFieldWithDefault(msg, 4, ""),
    content: jspb.Message.getFieldWithDefault(msg, 5, ""),
    author: (f = msg.getAuthor()) && share_user_pb.UserBase.toObject(includeInstance, f),
    good: jspb.Message.getFieldWithDefault(msg, 7, false),
    top: jspb.Message.getFieldWithDefault(msg, 8, false),
    replyCount: jspb.Message.getFieldWithDefault(msg, 9, 0),
    visitCount: jspb.Message.getFieldWithDefault(msg, 10, 0),
    createAt: jspb.Message.getFieldWithDefault(msg, 11, ""),
    lastReplyAt: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.topic.Topic}
 */
proto.topic.Topic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.topic.Topic;
  return proto.topic.Topic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.topic.Topic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.topic.Topic}
 */
proto.topic.Topic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorId(value);
      break;
    case 3:
      var value = /** @type {!proto.topic.Tab} */ (reader.readEnum());
      msg.setTab(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 6:
      var value = new share_user_pb.UserBase;
      reader.readMessage(value,share_user_pb.UserBase.deserializeBinaryFromReader);
      msg.setAuthor(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGood(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTop(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReplyCount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVisitCount(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreateAt(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastReplyAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.topic.Topic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.topic.Topic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.topic.Topic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.topic.Topic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuthorId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTab();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAuthor();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      share_user_pb.UserBase.serializeBinaryToWriter
    );
  }
  f = message.getGood();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getTop();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getReplyCount();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getVisitCount();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getCreateAt();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getLastReplyAt();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.topic.Topic.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.topic.Topic.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string author_id = 2;
 * @return {string}
 */
proto.topic.Topic.prototype.getAuthorId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.topic.Topic.prototype.setAuthorId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional Tab tab = 3;
 * @return {!proto.topic.Tab}
 */
proto.topic.Topic.prototype.getTab = function() {
  return /** @type {!proto.topic.Tab} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.topic.Tab} value */
proto.topic.Topic.prototype.setTab = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.topic.Topic.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.topic.Topic.prototype.setTitle = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string content = 5;
 * @return {string}
 */
proto.topic.Topic.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.topic.Topic.prototype.setContent = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional share.UserBase author = 6;
 * @return {?proto.share.UserBase}
 */
proto.topic.Topic.prototype.getAuthor = function() {
  return /** @type{?proto.share.UserBase} */ (
    jspb.Message.getWrapperField(this, share_user_pb.UserBase, 6));
};


/** @param {?proto.share.UserBase|undefined} value */
proto.topic.Topic.prototype.setAuthor = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.topic.Topic.prototype.clearAuthor = function() {
  this.setAuthor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.topic.Topic.prototype.hasAuthor = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool good = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.topic.Topic.prototype.getGood = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.topic.Topic.prototype.setGood = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional bool top = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.topic.Topic.prototype.getTop = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.topic.Topic.prototype.setTop = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional int32 reply_count = 9;
 * @return {number}
 */
proto.topic.Topic.prototype.getReplyCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.topic.Topic.prototype.setReplyCount = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional int32 visit_count = 10;
 * @return {number}
 */
proto.topic.Topic.prototype.getVisitCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.topic.Topic.prototype.setVisitCount = function(value) {
  jspb.Message.setField(this, 10, value);
};


/**
 * optional string create_at = 11;
 * @return {string}
 */
proto.topic.Topic.prototype.getCreateAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.topic.Topic.prototype.setCreateAt = function(value) {
  jspb.Message.setField(this, 11, value);
};


/**
 * optional string last_reply_at = 12;
 * @return {string}
 */
proto.topic.Topic.prototype.getLastReplyAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.topic.Topic.prototype.setLastReplyAt = function(value) {
  jspb.Message.setField(this, 12, value);
};


/**
 * @enum {number}
 */
proto.topic.Tab = {
  SHARE: 0,
  ASK: 1,
  GOOD: 2,
  JOB: 3
};

/**
 * @enum {number}
 */
proto.topic.Mdrender = {
  TRUE: 0,
  FALSE: 1
};

goog.object.extend(exports, proto.topic);