//import {sscd as SSCD} from 'sscd';
declare const SSCD:any;
import {Point2} from "basictypes";
import {EventEmitter} from "eventemitter3";

interface SSCDBody{
    set_position(vector);
    get_position();
    get_aabb():{position:Point2,size:Point2};
    get_data():any
    set_data(data:any)
}

const ADD = "ADD";
const REMOVE = "REMOVE";

export class SimpleCollisionDetection {
    private world: any;
    private emitter = new EventEmitter();

    getType(): string {
        //https://github.com/RonenNess/SSCD.js/
        return SimpleCollisionDetection.name;
    }

    constructor() {
        this.world = new SSCD.World();
    }

    onAdd(callback:(param: SSCDBody)=>void):()=>void{
        this.emitter.on(ADD,callback);
        return ()=>{
            this.emitter.off(ADD,callback);
        }
    }

    onRemove(callback:(param: SSCDBody)=>void):()=>void{
        this.emitter.on(REMOVE,callback);
        return ()=>{
            this.emitter.off(REMOVE,callback);
        }
    }

    register(param: SSCDBody) {
        this.world.add(param);
        this.emitter.emit(ADD,param);
    }

    unregister(param: SSCDBody) {
        this.world.remove(param);
        this.emitter.emit(REMOVE,param);
    }

    getObjectAt({x,y}: Point2):any {
        let obj = this.world.pick_object(new SSCD.Vector(x, y));
        return obj?obj.get_data():null;
    }

    getObjectIn({x,y}: Point2, radius):any[] {
        let collision_list = [];
        let shape = new SSCD.Circle(new SSCD.Vector(x, y), radius);
        this.world.test_collision(shape, undefined, collision_list)
        return collision_list.map(obj => {
            return obj ? obj.get_data() : null;
        });
    }

    getWorld() {
        return this.world;
    }
}
