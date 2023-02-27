import {AxModule} from "axolotis-module-definition";
import {ContainerModule, interfaces} from "inversify";
import {
    SimpleCollisionDetection
} from "./services/simple-collision/SimpleCollisionDetection";
import {SSCDServiceID} from "./Identifier";

export * from "./Identifier";

export class AxBasicModule implements AxModule{
    getModule(): ContainerModule {
        return new ContainerModule((bind: interfaces.Bind) => {
            bind(SimpleCollisionDetection.name).toDynamicValue(() => {
                return new SimpleCollisionDetection()
            }).inSingletonScope();
            bind(SSCDServiceID).toDynamicValue(() => {
                return new SimpleCollisionDetection()
            }).inSingletonScope();

        });
    }

}
