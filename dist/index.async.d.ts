import { ModuleGeneratorAsync, AxModuleAsync } from 'axolotis-module-definition';
import { AsyncContainerModule } from 'inversify';
export { S as SimpleCollisionDetectionName } from './Identifier-edc1fc97.js';

declare const AxSSCDModuleGenerator: ModuleGeneratorAsync;
declare class AxSSCDModule implements AxModuleAsync {
    getModule(): AsyncContainerModule;
}

export { AxSSCDModule, AxSSCDModuleGenerator };
