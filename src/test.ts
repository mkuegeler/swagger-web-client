import { Element } from "./app";

// Tests
let TestEl0 = new Element();
let TestEl1 = new Element("svg", {});
let TestEl2 = new Element("svg", {}, "children");

let TestEl3 = new Element("svg", { "id": "my svg", "style": "#ffff00" });
let TestEl4 = new Element("svg", { "id": "my svg", "style": "#ffff00" }, "children");

let TestEl5 = new Element("svg", {}, "", true);
let TestEl6 = new Element("svg", { "id": "new svg", "style": "#ffff00" }, "", true);

console.log(TestEl0.el);
console.log(TestEl1.el);
console.log(TestEl2.el);
console.log(TestEl3.el);
console.log(TestEl4.el);
console.log(TestEl5.el);
console.log(TestEl6.el);