const { writeFile } = require('fs')


writeFile('writeFile.txt', 'Testo del file', (err, data)=>{
    err ? emit(err) : console.log('The file has been saved!')  
    //in node 'emit' e' simile al throw 
    }
)

