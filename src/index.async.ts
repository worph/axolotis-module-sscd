import {AxModuleAsync, ModuleGeneratorAsync} from "axolotis-module-definition";
import {AsyncContainerModule, interfaces} from "inversify";
import {SimpleCollisionDetectionName} from "./Identifier";

export * from "./Identifier";

export const AxSSCDModuleGenerator:ModuleGeneratorAsync = () => {
    return new AsyncContainerModule(async (bind: interfaces.Bind) => {
        bind(SimpleCollisionDetectionName).toDynamicValue(async () => {
            let module = await import("./services/simple-collision/SimpleCollisionDetection");
            return new module.SimpleCollisionDetection();
        }).inSingletonScope();
    });
}

export class AxSSCDModule implements AxModuleAsync{
    getModule(): AsyncContainerModule {
        return new AsyncContainerModule(async (bind: interfaces.Bind) => {
            bind(SimpleCollisionDetectionName).toDynamicValue(async () => {
                let module = await import("./services/simple-collision/SimpleCollisionDetection");
                return new module.SimpleCollisionDetection();
            }).inSingletonScope();
        });
    }

}
