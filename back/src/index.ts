// eslint-disable-next-line
let num4:number = 1;
// eslint-disable-next-line
let num5:number = 7;

console.log(num4 === num5);

function hello(num: number, authToken:string):number {
    console.log(num, authToken);
    //implicitamente siempre es return void
    return num;
}