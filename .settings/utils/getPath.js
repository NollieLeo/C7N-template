const path = require('path');

function getFilePath(...rest){
  const filePath = path.join(...rest);
  return filePath
}

module.exports ={
  getFilePath
}