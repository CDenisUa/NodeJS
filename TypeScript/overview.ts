// Start learning TypeScript

// Primitives

let a:number = 5;
let b:string = 'string';

let c = 'type string';
let d = true;

let arr: string[] = ['first', 'second'];
let e: any = 3; // Not recommended to use

function fn(a: string): void {
    let b = a + a;
}

const arrowFunc = (a: number): number => a * 2;
let mapArr = arr.map((x: string) => x.toUpperCase());

function countCoordination(coordinates: {lat: number, long?: number | undefined}) {

}

function printed(id:number | string) {
    if(typeof id === 'number') {
        console.log(id.toString())
    } else{
        console.log(id.toUpperCase())
    }
}

function getSum(a:number | number[]){
    if(Array.isArray(a)) {
        console.log(a)
    }
}

const undefinedValue: undefined = undefined;
const nullValue:null = null;

//Interfaces and Types

type Point = {
    x:number,
    y:number,
}

type stringForNumber = string | number;

type D3Point = Point & {
    z:number,
}

function printOut(coordinates: Point){

}

interface IPoint {  // recommended
    x:number,
    y:number,
}

interface I3DPoint extends IPoint{
    z:number,
}

//Difference

interface overview {
    a:number,
}

interface test {
    b:number,
}

// type Test {    don't work
//     a:number
// }
// type Test {
//     b:number,
// }

const fnType = (point:IPoint) => {
    const d:I3DPoint = point as I3DPoint;
}

const myCanvas = document.getElementById('canvas') as HTMLCanvasElement;