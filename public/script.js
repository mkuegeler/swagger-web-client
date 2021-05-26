const endpoint = 'https://virtserver.swaggerhub.com/5deen/SVG-API/1.0.0/';

let records = [];

new Vue({
    el: '#app',
    data() {
        return {
            name: '',
            response: '',
            success: '',
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
            axios.get(endpoint + this.name, {
            }).
                then(response => {
                    this.success = 'JSON Data returned';
                    this.response = JSON.stringify(response.data, null, 2);
                    for (const [key, value] of Object.entries(response.data)) {
                        records.push({ Attribute: `${key}`, Value: `${value}` });
                    }
                }).catch(error => {
                    this.response = 'Error: ' + error.response.status;
                });
            this.name = '';
        }
    }
});
