#!/usr/bin/env node
const csv = require("csvtojson");
const fs = require('fs');

csv()
.fromFile(`${__dirname}/data.csv`)
.then((json)=>{
    console.log(json);
    const html = json.map(row => `
<tr>
    <td>${row.name}</td>
    <td>${row.version}</td>
    <td>${row.repository ? 
        `<a href="${row.repository}">${row.repository}</a>` :
        `none`
    }</td>
</tr>
    `)

    fs.writeFileSync('./index.html', html);
})