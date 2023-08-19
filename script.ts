

// a simple ts program 
// const click= document.querySelector('h1') as HTMLHeadElement;
// const body = document.querySelector('body') as HTMLBodyElement;
// click.addEventListener('click',():void=>{
//     let a:number= Math.floor(Math.random()*255);
//     let b:number= Math.floor(Math.random()*255);
//     let c:number= Math.floor(Math.random()*255);
//     body.style.backgroundColor=`rgb(${a},${b},${c})`
// })



// currying
const h1=document.querySelector('h1') as HTMLHeadElement;
const progress =(x:number)=>(y:number)=>x/y;
const progress01= progress(42);
const progress03= progress01(100);
console.log(progress03);
h1.innerHTML=progress03.toString();

//Tuples
type Cat=[12, number, string, boolean];
const tuple:Cat=[12,24,'dog',false];

// Generics(keyof)
type Person={
    name:string;
    age:number;
}
type Personakeys = keyof Person
let key:Personakeys="name";
console.log(key);

type abc={
    name:string;
    age:number;
}
function getProperty<T,K extends keyof T>(obj:T, key:K):T[K]{
    return obj[key];
}
const abc={
    name:"nandini",
    age:18
}
const xyz= getProperty(abc,"age");
console.log(xyz);


// Readonly
interface Student{
    readonly name:string;
    age:number;
    readonly admno: number;
}
const student:Student= {name:"nandini", age:18, admno:1234};
student.age=18;
student.name="arora"; // error bcoz of readonly

