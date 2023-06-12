'use strict';

var chunkS7CYAWJ7_cjs = require('./chunk-S7CYAWJ7.cjs');
require('./chunk-NQC62GKA.cjs');
var inversify = require('inversify');

var s=()=>new inversify.AsyncContainerModule(async o=>{o(chunkS7CYAWJ7_cjs.a).toDynamicValue(async()=>{let e=await import('./SimpleCollisionDetection-OACXX5IV.cjs');return new e.SimpleCollisionDetection}).inSingletonScope();}),t=class{getModule(){return new inversify.AsyncContainerModule(async e=>{e(chunkS7CYAWJ7_cjs.a).toDynamicValue(async()=>{let r=await import('./SimpleCollisionDetection-OACXX5IV.cjs');return new r.SimpleCollisionDetection}).inSingletonScope();})}};

Object.defineProperty(exports, 'SimpleCollisionDetectionName', {
	enumerable: true,
	get: function () { return chunkS7CYAWJ7_cjs.a; }
});
exports.AxSSCDModule = t;
exports.AxSSCDModuleGenerator = s;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.async.cjs.map