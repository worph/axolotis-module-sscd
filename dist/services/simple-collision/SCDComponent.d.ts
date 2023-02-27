import { Component } from "@aptero/axolotis-player";
import { Point2 } from "basictypes";
import { SimpleCollisionDetection } from "./SimpleCollisionDetection";
export declare class SCDComponent implements Component {
    private userData;
    private scdServiceSync;
    private body;
    getType(): string;
    constructor({ x, y }: Point2, boxSize: Point2, userData: any, scdServiceSync: SimpleCollisionDetection);
    getBody(): any;
    getUserData(): any;
    destroy(): void;
    getPositionX(): number;
    getPositionY(): number;
    getRotation(): number;
    setPosition(x: number, y: number): void;
    setRotation(rotation: number): void;
}
//# sourceMappingURL=SCDComponent.d.ts.map