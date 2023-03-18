import {AxModule} from "axolotis-module-definition";
import {ContainerModule, interfaces} from "inversify";
import {
    SimpleCollisionDetection
} from "./services/simple-collision/SimpleCollisionDetection";
import {SimpleCollisionDetectionName} from "./Identifier";

export * from "./Identifier";
export * from "./services/simple-collision/SimpleCollisionDetection";
export * from "./services/src/sscdNameSpace";

export class AxSSCDModule implements AxModule{
    getModule(): ContainerModule {
        return new ContainerModule((bind: interfaces.Bind) => {
            bind(SimpleCollisionDetectionName).toDynamicValue(() => {
                return new SimpleCollisionDetection()
            }).inSingletonScope();

        });
    }

}
