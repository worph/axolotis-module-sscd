import { ModuleGenerator, AxModule } from 'axolotis-module-definition';
import { ContainerModule } from 'inversify';
export { S as SimpleCollisionDetectionName } from './Identifier-edc1fc97.js';
import { Point2 } from 'basictypes';

interface SSCDBody<T> {
    set_position(vector: any): any;
    get_position(): any;
    get_aabb(): {
        position: Point2;
        size: Point2;
    };
    get_data(): T;
    set_data(data: T): any;
}
declare class SimpleCollisionDetection<T> {
    private world;
    private emitter;
    getType(): string;
    constructor();
    onAdd(callback: (param: SSCDBody<T>) => void): () => void;
    onRemove(callback: (param: SSCDBody<T>) => void): () => void;
    register(param: SSCDBody<T>): void;
    unregister(param: SSCDBody<T>): void;
    getObjectAt({ x, y }: Point2): T;
    getObjectsAt({ x, y }: Point2): T[];
    getObjectIn({ x, y }: Point2, radius: any): T[];
    getWorld(): any;
}

declare let SSCD: any;

declare const AxSSCDModuleGenerator: ModuleGenerator;
declare class AxSSCDModule implements AxModule {
    getModule(): ContainerModule;
}

export { AxSSCDModule, AxSSCDModuleGenerator, SSCD, SimpleCollisionDetection };
