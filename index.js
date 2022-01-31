const fs = require('fs')
const Handlebars = require('handlebars');


const tplPath = './template.hbs';
const source = fs.readFileSync(tplPath, 'utf8')
const template = Handlebars.compile(source)
data = {
    members: [{
            firstName: 'theerasak',
            lastName: 'tubrit',
            show: true
        },
        {
            firstName: 'kantima',
            lastName: 'tubrit',
            show: false
        },
    ]
}

Handlebars.registerHelper('toUpperCase', function (str) {
    return str.toUpperCase();
});

Handlebars.registerHelper('toShot', function (str) {
    return str.substring(0,1);
});

let result = template(data);

console.log(result);