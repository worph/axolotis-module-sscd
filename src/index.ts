import {AxModule, ModuleGenerator} from "axolotis-module-definition";
import {ContainerModule, interfaces} from "inversify";
import {SimpleCollisionDetectionName} from "./Identifier";
import {SimpleCollisionDetection} from "./services/simple-collision/SimpleCollisionDetection";

export * from "./Identifier";
export * from "./services/simple-collision/SimpleCollisionDetection";
export * from "./services/src/sscdNameSpace";

export const AxSSCDModuleGenerator:ModuleGenerator = () => {
    return new ContainerModule((bind: interfaces.Bind) => {
        bind(SimpleCollisionDetectionName).toDynamicValue(() => {
            return new SimpleCollisionDetection()
        }).inSingletonScope();
    });
}

export class AxSSCDModule implements AxModule{
    getModule(): ContainerModule {
        return new ContainerModule((bind: interfaces.Bind) => {
            bind(SimpleCollisionDetectionName).toDynamicValue(() => {
                return new SimpleCollisionDetection()
            }).inSingletonScope();

        });
    }

}
