import { AxModule } from "axolotis-module-definition";
import { ContainerModule } from "inversify";
export * from "./Identifier";
export * from "./services/simple-collision/SimpleCollisionDetection";
export * from "./services/src/sscdNameSpace";
export declare class AxSSCDModule implements AxModule {
    getModule(): ContainerModule;
}
//# sourceMappingURL=index.d.ts.map