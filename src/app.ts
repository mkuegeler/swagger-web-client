// swagger client backend application

const endpoint = 'https://virtserver.swaggerhub.com/5deen/SVG-API/1.0.0/';
export function endpointUrl() {
    return endpoint;
}

export function htmlElement(content: string = 'Test it!') {
    return content;
}

export function svgElement() {
    let svg: string = `<svg viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="50" />
  </svg>`;
    return svg;
}

// Abstract interfaces
export interface element {
    name: string,
    attributes: object
}

export class Element implements element {
    public name: string;
    public attributes: object;
    public el: string;
    public children?: string;
    public closed?: boolean
    constructor(name: string = '', attributes: object = {}, children: string = "", closed: boolean = false) {
        this.name = name;
        this.attributes = attributes;
        this.children = children;
        this.closed = closed;

        let attrString: string = '';
        // Check if attributes exist
        if (Object.entries(attributes).length === 0 && attributes.constructor === Object) {
            // Check if children exist
            if (this.children === "") {
                this.closed === true ? this.el = `<${name}></${name}>` : this.el = `<${name}/>`;
            }
            else {
                this.el = `<${name}>${this.children}</${name}>`;
            }
        }
        else {
            for (const key in attributes) {
                let value = attributes[key as keyof typeof attributes];
                attrString += ` ${key}="${value}"`;
            }
            // Check if children exist 
            if (this.children === "") {
                this.closed === true ? this.el = `<${name}${attrString}></${name}>` : this.el = `<${name}${attrString}/>`;
            } else {
                this.el = `<${name}${attrString}>${this.children}</${name}>`;
            }
        }
    }
}

export const elementDefault: element = {
    name: "svg",
    attributes: {}
}

// Tests
let TestEl1 = new Element("svg", {});
let TestEl2 = new Element("svg", {}, "children");
let TestEl3 = new Element("svg", { "id": "my svg", "style": "#ffff00" });
let TestEl4 = new Element("svg", { "id": "my svg", "style": "#ffff00" }, "children");
let TestEl5 = new Element("svg", {}, "", true);
let TestEl6 = new Element("svg", { "id": "my svg", "style": "#ffff00" }, "", true);

console.log(TestEl1.el);
console.log(TestEl2.el);
console.log(TestEl3.el);
console.log(TestEl4.el);
console.log(TestEl5.el);
console.log(TestEl6.el);


