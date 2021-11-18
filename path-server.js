const path = require('path');
console.log(__filename);//виводить путь до поточної папки 
console.log(path.basename(__filename));//назву поточного файлу
console.log(path.extname(__filename));//розширення поточного файлу 