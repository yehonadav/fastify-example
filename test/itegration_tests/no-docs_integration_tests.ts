import axios from 'axios'

axios.get('http://localhost:3000/no-docs').then(r=>console.log({getResponse: r.data}));
axios.post('http://localhost:3000/no-docs', {}).then(r=>console.log({postResponse: r.data}));
axios.put('http://localhost:3000/no-docs/123', {}).then(r=>console.log({putResponse: r.data}));
axios.delete('http://localhost:3000/no-docs/123').then(r=>console.log({deleteResponse: r.data}));
