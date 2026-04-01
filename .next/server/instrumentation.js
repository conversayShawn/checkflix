"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "instrumentation";
exports.ids = ["instrumentation"];
exports.modules = {

/***/ "(instrument)/./src/instrumentation.ts":
/*!********************************!*\
  !*** ./src/instrumentation.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   register: () => (/* binding */ register)\n/* harmony export */ });\nasync function register() {\n    if (true) {\n        const { NodeSDK } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/@opentelemetry\"), __webpack_require__.e(\"vendor-chunks/protobufjs\"), __webpack_require__.e(\"vendor-chunks/@protobufjs\"), __webpack_require__.e(\"vendor-chunks/@grpc\"), __webpack_require__.e(\"vendor-chunks/yaml\"), __webpack_require__.e(\"vendor-chunks/long\"), __webpack_require__.e(\"vendor-chunks/lodash.camelcase\"), __webpack_require__.e(\"vendor-chunks/@js-sdsl\"), __webpack_require__.e(\"_instrument_node_modules_opentelemetry_instrumentation_build_esm_platform_node_sync_recursive-_c12c0\")]).then(__webpack_require__.bind(__webpack_require__, /*! @opentelemetry/sdk-node */ \"(instrument)/./node_modules/@opentelemetry/sdk-node/build/src/index.js\"));\n        const { OTLPTraceExporter } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/@opentelemetry\"), __webpack_require__.e(\"vendor-chunks/protobufjs\"), __webpack_require__.e(\"vendor-chunks/@protobufjs\")]).then(__webpack_require__.bind(__webpack_require__, /*! @opentelemetry/exporter-trace-otlp-proto */ \"(instrument)/./node_modules/@opentelemetry/exporter-trace-otlp-proto/build/esm/index.js\"));\n        const { BatchSpanProcessor } = await __webpack_require__.e(/*! import() */ \"vendor-chunks/@opentelemetry\").then(__webpack_require__.bind(__webpack_require__, /*! @opentelemetry/sdk-trace-node */ \"(instrument)/./node_modules/@opentelemetry/sdk-trace-node/build/src/index.js\"));\n        const { getNodeAutoInstrumentations } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/@opentelemetry\"), __webpack_require__.e(\"vendor-chunks/gaxios\"), __webpack_require__.e(\"vendor-chunks/json-bigint\"), __webpack_require__.e(\"vendor-chunks/google-logging-utils\"), __webpack_require__.e(\"vendor-chunks/forwarded-parse\"), __webpack_require__.e(\"vendor-chunks/gcp-metadata\"), __webpack_require__.e(\"vendor-chunks/extend\"), __webpack_require__.e(\"vendor-chunks/bignumber.js\"), __webpack_require__.e(\"_instrument_node_modules_opentelemetry_instrumentation_build_esm_platform_node_sync_recursive-_c12c1\")]).then(__webpack_require__.bind(__webpack_require__, /*! @opentelemetry/auto-instrumentations-node */ \"(instrument)/./node_modules/@opentelemetry/auto-instrumentations-node/build/src/index.js\"));\n        const spanProcessors = [];\n        if (process.env.CHECKLY_OTEL_API_KEY) {\n            const checklyExporter = new OTLPTraceExporter({\n                url: process.env.CHECKLY_OTEL_ENDPOINT || 'https://otel.eu-west-1.checklyhq.com/v1/traces',\n                headers: {\n                    Authorization: `Bearer ${process.env.CHECKLY_OTEL_API_KEY}`\n                }\n            });\n            spanProcessors.push(new BatchSpanProcessor(checklyExporter));\n        }\n        if (process.env.CX_API_KEY && process.env.CX_DOMAIN) {\n            const coralogixExporter = new OTLPTraceExporter({\n                url: `https://ingress.${process.env.CX_DOMAIN}/v1/traces`,\n                headers: {\n                    Authorization: `Bearer ${process.env.CX_API_KEY}`\n                }\n            });\n            spanProcessors.push(new BatchSpanProcessor(coralogixExporter));\n        }\n        if (spanProcessors.length > 0) {\n            const sdk = new NodeSDK({\n                spanProcessors,\n                instrumentations: [\n                    getNodeAutoInstrumentations()\n                ]\n            });\n            sdk.start();\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vc3JjL2luc3RydW1lbnRhdGlvbi50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sZUFBZUE7SUFDcEIsSUFBSUMsSUFBcUMsRUFBRTtRQUN6QyxNQUFNLEVBQUVHLE9BQU8sRUFBRSxHQUFHLE1BQU0sd3NCQUFpQztRQUMzRCxNQUFNLEVBQUVDLGlCQUFpQixFQUFFLEdBQUcsTUFBTSx5WEFBa0Q7UUFDdEYsTUFBTSxFQUFFQyxrQkFBa0IsRUFBRSxHQUFHLE1BQU0sOE9BQXVDO1FBQzVFLE1BQU0sRUFBRUMsMkJBQTJCLEVBQUUsR0FBRyxNQUFNLG93QkFBbUQ7UUFFakcsTUFBTUMsaUJBQTRELEVBQUU7UUFFcEUsSUFBSVAsUUFBUUMsR0FBRyxDQUFDTyxvQkFBb0IsRUFBRTtZQUNwQyxNQUFNQyxrQkFBa0IsSUFBSUwsa0JBQWtCO2dCQUM1Q00sS0FBS1YsUUFBUUMsR0FBRyxDQUFDVSxxQkFBcUIsSUFBSTtnQkFDMUNDLFNBQVM7b0JBQUVDLGVBQWUsQ0FBQyxPQUFPLEVBQUViLFFBQVFDLEdBQUcsQ0FBQ08sb0JBQW9CLEVBQUU7Z0JBQUM7WUFDekU7WUFDQUQsZUFBZU8sSUFBSSxDQUFDLElBQUlULG1CQUFtQkk7UUFDN0M7UUFFQSxJQUFJVCxRQUFRQyxHQUFHLENBQUNjLFVBQVUsSUFBSWYsUUFBUUMsR0FBRyxDQUFDZSxTQUFTLEVBQUU7WUFDbkQsTUFBTUMsb0JBQW9CLElBQUliLGtCQUFrQjtnQkFDOUNNLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRVYsUUFBUUMsR0FBRyxDQUFDZSxTQUFTLENBQUMsVUFBVSxDQUFDO2dCQUN6REosU0FBUztvQkFBRUMsZUFBZSxDQUFDLE9BQU8sRUFBRWIsUUFBUUMsR0FBRyxDQUFDYyxVQUFVLEVBQUU7Z0JBQUM7WUFDL0Q7WUFDQVIsZUFBZU8sSUFBSSxDQUFDLElBQUlULG1CQUFtQlk7UUFDN0M7UUFFQSxJQUFJVixlQUFlVyxNQUFNLEdBQUcsR0FBRztZQUM3QixNQUFNQyxNQUFNLElBQUloQixRQUFRO2dCQUN0Qkk7Z0JBQ0FhLGtCQUFrQjtvQkFBQ2Q7aUJBQThCO1lBQ25EO1lBQ0FhLElBQUlFLEtBQUs7UUFDWDtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bi1jaGVja2x5L0Rlc2t0b3AvZGVtb3MvY2hlY2tseS1kZW1vLWFwcC9zcmMvaW5zdHJ1bWVudGF0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlcigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSA9PT0gJ25vZGVqcycpIHtcbiAgICBjb25zdCB7IE5vZGVTREsgfSA9IGF3YWl0IGltcG9ydCgnQG9wZW50ZWxlbWV0cnkvc2RrLW5vZGUnKVxuICAgIGNvbnN0IHsgT1RMUFRyYWNlRXhwb3J0ZXIgfSA9IGF3YWl0IGltcG9ydCgnQG9wZW50ZWxlbWV0cnkvZXhwb3J0ZXItdHJhY2Utb3RscC1wcm90bycpXG4gICAgY29uc3QgeyBCYXRjaFNwYW5Qcm9jZXNzb3IgfSA9IGF3YWl0IGltcG9ydCgnQG9wZW50ZWxlbWV0cnkvc2RrLXRyYWNlLW5vZGUnKVxuICAgIGNvbnN0IHsgZ2V0Tm9kZUF1dG9JbnN0cnVtZW50YXRpb25zIH0gPSBhd2FpdCBpbXBvcnQoJ0BvcGVudGVsZW1ldHJ5L2F1dG8taW5zdHJ1bWVudGF0aW9ucy1ub2RlJylcblxuICAgIGNvbnN0IHNwYW5Qcm9jZXNzb3JzOiBJbnN0YW5jZVR5cGU8dHlwZW9mIEJhdGNoU3BhblByb2Nlc3Nvcj5bXSA9IFtdXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuQ0hFQ0tMWV9PVEVMX0FQSV9LRVkpIHtcbiAgICAgIGNvbnN0IGNoZWNrbHlFeHBvcnRlciA9IG5ldyBPVExQVHJhY2VFeHBvcnRlcih7XG4gICAgICAgIHVybDogcHJvY2Vzcy5lbnYuQ0hFQ0tMWV9PVEVMX0VORFBPSU5UIHx8ICdodHRwczovL290ZWwuZXUtd2VzdC0xLmNoZWNrbHlocS5jb20vdjEvdHJhY2VzJyxcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuQ0hFQ0tMWV9PVEVMX0FQSV9LRVl9YCB9LFxuICAgICAgfSlcbiAgICAgIHNwYW5Qcm9jZXNzb3JzLnB1c2gobmV3IEJhdGNoU3BhblByb2Nlc3NvcihjaGVja2x5RXhwb3J0ZXIpKVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5DWF9BUElfS0VZICYmIHByb2Nlc3MuZW52LkNYX0RPTUFJTikge1xuICAgICAgY29uc3QgY29yYWxvZ2l4RXhwb3J0ZXIgPSBuZXcgT1RMUFRyYWNlRXhwb3J0ZXIoe1xuICAgICAgICB1cmw6IGBodHRwczovL2luZ3Jlc3MuJHtwcm9jZXNzLmVudi5DWF9ET01BSU59L3YxL3RyYWNlc2AsXG4gICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52LkNYX0FQSV9LRVl9YCB9LFxuICAgICAgfSlcbiAgICAgIHNwYW5Qcm9jZXNzb3JzLnB1c2gobmV3IEJhdGNoU3BhblByb2Nlc3Nvcihjb3JhbG9naXhFeHBvcnRlcikpXG4gICAgfVxuXG4gICAgaWYgKHNwYW5Qcm9jZXNzb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNkayA9IG5ldyBOb2RlU0RLKHtcbiAgICAgICAgc3BhblByb2Nlc3NvcnMsXG4gICAgICAgIGluc3RydW1lbnRhdGlvbnM6IFtnZXROb2RlQXV0b0luc3RydW1lbnRhdGlvbnMoKV0sXG4gICAgICB9KVxuICAgICAgc2RrLnN0YXJ0KClcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJyZWdpc3RlciIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1JVTlRJTUUiLCJOb2RlU0RLIiwiT1RMUFRyYWNlRXhwb3J0ZXIiLCJCYXRjaFNwYW5Qcm9jZXNzb3IiLCJnZXROb2RlQXV0b0luc3RydW1lbnRhdGlvbnMiLCJzcGFuUHJvY2Vzc29ycyIsIkNIRUNLTFlfT1RFTF9BUElfS0VZIiwiY2hlY2tseUV4cG9ydGVyIiwidXJsIiwiQ0hFQ0tMWV9PVEVMX0VORFBPSU5UIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwdXNoIiwiQ1hfQVBJX0tFWSIsIkNYX0RPTUFJTiIsImNvcmFsb2dpeEV4cG9ydGVyIiwibGVuZ3RoIiwic2RrIiwiaW5zdHJ1bWVudGF0aW9ucyIsInN0YXJ0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(instrument)/./src/instrumentation.ts\n");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "diagnostics_channel":
/*!**************************************!*\
  !*** external "diagnostics_channel" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("diagnostics_channel");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "http2":
/*!************************!*\
  !*** external "http2" ***!
  \************************/
/***/ ((module) => {

module.exports = require("http2");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "import-in-the-middle":
/*!***************************************!*\
  !*** external "import-in-the-middle" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("import-in-the-middle");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:events":
/*!******************************!*\
  !*** external "node:events" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:events");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ "node:https":
/*!*****************************!*\
  !*** external "node:https" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ "node:net":
/*!***************************!*\
  !*** external "node:net" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("node:net");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),

/***/ "node:perf_hooks":
/*!**********************************!*\
  !*** external "node:perf_hooks" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("node:perf_hooks");

/***/ }),

/***/ "node:process":
/*!*******************************!*\
  !*** external "node:process" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("node:process");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "node:stream/web":
/*!**********************************!*\
  !*** external "node:stream/web" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("node:stream/web");

/***/ }),

/***/ "node:url":
/*!***************************!*\
  !*** external "node:url" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("node:url");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "node:v8":
/*!**************************!*\
  !*** external "node:v8" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:v8");

/***/ }),

/***/ "node:zlib":
/*!****************************!*\
  !*** external "node:zlib" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:zlib");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "perf_hooks":
/*!*****************************!*\
  !*** external "perf_hooks" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("perf_hooks");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ "require-in-the-middle":
/*!****************************************!*\
  !*** external "require-in-the-middle" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("require-in-the-middle");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(instrument)/./src/instrumentation.ts"));
module.exports = __webpack_exports__;

})();