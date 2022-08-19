/* eslint-disable */

const fs = require('fs');

fs.readFile('./src/assets/books.json', 'utf-8', (error, data) => {
    const jsonArray = JSON.parse(data);
    const newArray = []
    jsonArray.forEach((item, index) => {
        newArray.push({
            ...item,
            ...{id: index + 1}
        })
    })

    console.log(newArray);
    fs.writeFile('./books.json', JSON.stringify(newArray), () => {
        console.log('done');
    })
})
