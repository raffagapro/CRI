let num4:number = 1;
let num5:number = 7;

function hello(num: number, authToken:string):number {
    console.log(num, authToken);
    //implicitamente siempre es return void
    // return `${num} ${authToken}`;
    return num;
}

hello(18, 'dbwejkdhbjwhe');

interface IAnimal{
    nombre: string;
    numPatas: number;
    location: string[];
    dieta: IDieta
}

interface IAnimal{
    id: number;
}

interface IHervivoros extends IAnimal{
    plantas:(string|number)[]|(boolean)[]
}

interface ICarnivoros extends IAnimal{
    NumDientes:number
}

const vaca1: ICarnivoros = {
    id:34,
    nombre:"Cabra",
    numPatas:4,
    location:['españa', 'mex'],
    dieta:{
        carnes:'15g',
        verduras: 'pepinos'
    },
    NumDientes:50
}

interface IDieta{
    carnes: string;
    verduras: string;
}

type THumanos = {
    nombre: string;
    edad: number;
    role: Roles;
}

enum Roles{
    ADMIN="admin",
    GUEST="guest",
    USER="user",
    OWNER="owner"
}

let myPerson1: THumanos ={
    nombre:'batman',
    edad:18,
    role:Roles.ADMIN
}

let animal1: IAnimal = {
    id:34,
    nombre:"Cabra",
    numPatas:4,
    location:['españa', 'mex'],
    dieta:{
        carnes:'15g',
        verduras: 'pepinos'
    }
}
//UNION
let quimera1: ICarnivoros | IHervivoros = {
    id:34,
    nombre:"Cabra",
    numPatas:4,
    location:['españa', 'mex'],
    dieta:{
        carnes:'15g',
        verduras: 'pepinos'
    },
    // NumDientes:15,
    plantas:[false, true]  //=D!!!
}

let quimera2: ICarnivoros | IHervivoros = {
    id:34,
    nombre:"Cabra",
    numPatas:4,
    location:['españa', 'mex'],
    dieta:{
        carnes:'15g',
        verduras: 'pepinos'
    },
    // NumDientes:15,
    plantas:['false', 3]  //=D!!!
}


