'use strict';

var chunkS7CYAWJ7_cjs = require('./chunk-S7CYAWJ7.cjs');
var chunk52LGWQVV_cjs = require('./chunk-52LGWQVV.cjs');
require('./chunk-NQC62GKA.cjs');
var inversify = require('inversify');

var c=()=>new inversify.ContainerModule(r=>{r(chunkS7CYAWJ7_cjs.a).toDynamicValue(()=>new chunk52LGWQVV_cjs.b).inSingletonScope();}),n=class{getModule(){return new inversify.ContainerModule(i=>{i(chunkS7CYAWJ7_cjs.a).toDynamicValue(()=>new chunk52LGWQVV_cjs.b).inSingletonScope();})}};

Object.defineProperty(exports, 'SimpleCollisionDetectionName', {
	enumerable: true,
	get: function () { return chunkS7CYAWJ7_cjs.a; }
});
Object.defineProperty(exports, 'SSCD', {
	enumerable: true,
	get: function () { return chunk52LGWQVV_cjs.a; }
});
Object.defineProperty(exports, 'SimpleCollisionDetection', {
	enumerable: true,
	get: function () { return chunk52LGWQVV_cjs.b; }
});
exports.AxSSCDModule = n;
exports.AxSSCDModuleGenerator = c;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map