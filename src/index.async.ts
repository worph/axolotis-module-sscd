import {AxModuleAsync} from "axolotis-module-definition";
import {AsyncContainerModule, interfaces} from "inversify";
import {
    SimpleCollisionDetection
} from "./services/simple-collision/SimpleCollisionDetection";
import {SimpleCollisionDetectionName} from "./Identifier";

export * from "./Identifier";

export class AxBasicModule implements AxModuleAsync{
    getModule(): AsyncContainerModule {
        return new AsyncContainerModule(async (bind: interfaces.Bind) => {
            bind(SimpleCollisionDetectionName).toDynamicValue(() => {
                return new SimpleCollisionDetection()
            }).inSingletonScope();
        });
    }

}
