// swagger client backend application

const endpoint = 'https://virtserver.swaggerhub.com/5deen/SVG-API/1.0.0/';
export function endpointUrl() {
    return endpoint;
}

// Generic markup language generator

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
    constructor(name: string = 'xml', attributes: object = {}, children?: string, closed?: boolean) {
        this.name = name;
        this.attributes = attributes;
        this.children = children;
        this.closed = closed;

        let attrString: string = '';
        // Check if attributes exist
        if (Object.entries(attributes).length === 0 && attributes.constructor === Object) {
            // Check if children exist

            if (["", undefined].includes(this.children)) {
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

            if (["", undefined].includes(this.children)) {
                this.closed === true ? this.el = `<${name}${attrString}></${name}>` : this.el = `<${name}${attrString}/>`;
            }
            else {
                this.el = `<${name}${attrString}>${this.children}</${name}>`;
            }
        }
    }
}