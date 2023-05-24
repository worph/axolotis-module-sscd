'use strict';

var chunkS7CYAWJ7_cjs = require('./chunk-S7CYAWJ7.cjs');
require('./chunk-NQC62GKA.cjs');
var inversify = require('inversify');

var n=class{getModule(){return new inversify.AsyncContainerModule(async o=>{o(chunkS7CYAWJ7_cjs.a).toDynamicValue(async()=>{let i=await import('./SimpleCollisionDetection-6ECZPPP5.cjs');return new i.SimpleCollisionDetection}).inSingletonScope();})}};

Object.defineProperty(exports, 'SimpleCollisionDetectionName', {
	enumerable: true,
	get: function () { return chunkS7CYAWJ7_cjs.a; }
});
exports.AxSSCDModule = n;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.async.cjs.map