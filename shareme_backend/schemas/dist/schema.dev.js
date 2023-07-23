"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _schemaCreator = _interopRequireDefault(require("part:@sanity/base/schema-creator"));

var _schemaType = _interopRequireDefault(require("all:part:@sanity/base/schema-type"));

var _pin = _interopRequireDefault(require("./pin"));

var _user = _interopRequireDefault(require("./user"));

var _comment = _interopRequireDefault(require("./comment"));

var _postedBy = _interopRequireDefault(require("./postedBy"));

var _save = _interopRequireDefault(require("./save"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
// Then we give our schema to the builder and provide the result to Sanity
var _default = (0, _schemaCreator["default"])({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: _schemaType["default"].concat([_pin["default"], _user["default"], _postedBy["default"], _comment["default"], _save["default"]])
});

exports["default"] = _default;