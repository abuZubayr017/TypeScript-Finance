import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'sarvar', age: 21 });
console.log(docOne.age);
///with Interfaces
/// ENUM
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["book"] = 0] = "book";
    ResourceType[ResourceType["author"] = 1] = "author";
    ResourceType[ResourceType["film"] = 2] = "film";
    ResourceType[ResourceType["director"] = 3] = "director";
    ResourceType[ResourceType["person"] = 4] = "person";
})(ResourceType || (ResourceType = {}));
const doc3 = {
    uid: 1,
    resourceName: ResourceType.author,
    data: { name: 'sarvar', age: 20 }
};
const doc4 = {
    uid: 2,
    resourceName: ResourceType.book,
    data: ['bread', 'milk']
};
console.log(doc3, doc4);
//// TUPLES
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'hello';
let tup = ['abu', 25, true];
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
