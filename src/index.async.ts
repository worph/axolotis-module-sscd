import {AxModuleAsync} from "axolotis-module-definition";
import {AsyncContainerModule, interfaces} from "inversify";
import {
    SimpleCollisionDetection
} from "./services/simple-collision/SimpleCollisionDetection";
import {SSCDServiceID} from "./Identifier";

export * from "./Identifier";

export class AxBasicModule implements AxModuleAsync{
    getModule(): AsyncContainerModule {
        return new AsyncContainerModule(async (bind: interfaces.Bind) => {
            bind(SSCDServiceID).toDynamicValue(() => {
                return new SimpleCollisionDetection()
            }).inSingletonScope();
        });
    }

}
