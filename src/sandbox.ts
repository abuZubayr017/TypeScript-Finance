import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";


const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(...values)
    }else{
        doc = new Payment(...values)
    }

    list.render(doc, type.value, 'end');
    
})

// Generics

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'sarvar', age:21});

console.log(docOne.age);

///with Interfaces
/// ENUM
enum ResourceType {book, author, film, director, person}

interface Resource <T>{
    uid: number;
    resourceName: ResourceType;
    data: T;
}

const doc3: Resource<object> = {
    uid:1,
    resourceName: ResourceType.author,
    data: {name:'sarvar',age: 20}
}

const doc4: Resource<string[]> = {
    uid:2,
    resourceName:ResourceType.book,
    data:['bread', 'milk']
}

console.log(doc3, doc4);

//// TUPLES

let arr =  ['ryu', 25, true];
arr[0] = false;
arr[1] = 'hello'

let tup: [string, number, boolean] = ['abu', 25, true];





// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('ali', 'web work', 500)
// docTwo = new Payment('zubayr', 'frontend side', 1000)

// let docs: HasFormatter[] = [];
// docs.push(docOne)
// docs.push(docTwo)
// console.log(docs);


// const ivone = new Invoice('Ali', 'work on the new Startup', 30000)
// const iv2 = new Invoice('Sarvar', 'work on the new Company', 25000)


// let invoices : Invoice[] = [];
// invoices.push(ivone)
// invoices.push(iv2)

// invoices.forEach( inv => {
//     console.log(inv.client, inv.amount, inv.format());
    
// })