import { AxModule } from 'axolotis-module-definition';
import { ContainerModule } from 'inversify';
export { S as SimpleCollisionDetectionName } from './Identifier-edc1fc97.js';
import { Point2 } from 'basictypes';

interface SSCDBody {
    set_position(vector: any): any;
    get_position(): any;
    get_aabb(): {
        position: Point2;
        size: Point2;
    };
    get_data(): any;
    set_data(data: any): any;
}
declare class SimpleCollisionDetection {
    private world;
    private emitter;
    getType(): string;
    constructor();
    onAdd(callback: (param: SSCDBody) => void): () => void;
    onRemove(callback: (param: SSCDBody) => void): () => void;
    register(param: SSCDBody): void;
    unregister(param: SSCDBody): void;
    getObjectAt({ x, y }: Point2): any;
    getObjectIn({ x, y }: Point2, radius: any): any[];
    getWorld(): any;
}

declare let SSCD: any;

declare class AxSSCDModule implements AxModule {
    getModule(): ContainerModule;
}

export { AxSSCDModule, SSCD, SimpleCollisionDetection };
