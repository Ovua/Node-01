const crypto = require('crypto');

let UUID = crypto.randomUUID()
console.log(UUID)


let Bytes = crypto.randomBytes(100)
console.log(Bytes)