let fetch = require('node-fetch');
fetch('nodeJs.md').then((res) => res.text()).then( (data) => {
    console.log(data)
})
