import {Component} from "@aptero/axolotis-player";
import {Point2} from "basictypes";
import {SimpleCollisionDetection} from "./SimpleCollisionDetection";

//const SSCD = require('sscd').sscd;
declare const SSCD:any;

export class SCDComponent implements Component {
    private body: any;

    getType(): string {
        return SCDComponent.name;
    }

    constructor({x, y}: Point2, boxSize: Point2, private userData: any = null, private scdServiceSync: SimpleCollisionDetection) {
        this.body = new SSCD.Rectangle(new SSCD.Vector(x - (boxSize.x / 2), y - (boxSize.y / 2)), new SSCD.Vector(boxSize.x, boxSize.y));
        console.log(this.body)
        this.body.set_data(this);
        this.scdServiceSync.register(this.getBody());
    }

    getBody() {
        return this.body;
    }

    getUserData(): any {
        return this.userData;
    }

    destroy() {
        this.scdServiceSync.unregister(this.getBody());
    }

    getPositionX(): number {
        return this.body.get_position().x;
    }

    getPositionY(): number {
        return this.body.get_position().y;
    }

    getRotation(): number {
        return 0;
    }


    setPosition(x: number, y: number) {
        this.body.set_position(new SSCD.Vector(x, y));
    }

    setRotation(rotation: number) {
        //nothing to do since SSCD does not manage rotation
    }
}
