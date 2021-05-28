import { endpointUrl, Element } from './dist/app.js';

let records = [];
const endpoint = endpointUrl();
// the root element of the document. For SVG, it's  the 'svg' element. All other elements are children of the root element.
const root = 'svg';

new Vue({
    el: '#app',
    data() {
        return {
            name: '',
            response: '',
            success: '',
            svg: '',
            el: '',
            rows: records
        };
    },
    computed: {
        "columns": function columns() {
            if (this.rows.length == 0) {
                return [];
            }
            return Object.keys(this.rows[0])
        }
    },
    methods: {
        submitForm() {
            this.el = this.name;
            axios.all([getElement(root), getElement(this.el)]).
                then(response => {
                    this.success = 'JSON Data returned';

                    this.el === root ? this.svg = new Element(this.el, response[1].data, "",true).el : 
                       this.svg = new Element(root, response[0].data, new Element(this.el, response[1].data).el).el;

                    this.response = JSON.stringify(response[1].data, null, 2);
                    for (const [key, value] of Object.entries(response[1].data)) {
                        records.push({ Attribute: `${key}`, Value: `${value}` });
                    }
                }).catch(error => {
                    this.response = 'Error: ' + error.response.status;
                });
            this.name = '';
        }
    }
});

// Support functions

// Reset page
function ResetForm() {
    document.getElementById("PrimaryForm").reset();
}

// API Get 
function getElement(el) {
    const url = endpoint + el;
    return axios.get(url);
}
