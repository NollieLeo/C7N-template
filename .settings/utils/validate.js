function checkComponentName(value){
  const pattern = /^(([a-z]+)-([a-z]+))|^([a-z]+)$/g;
  if(!pattern.test(value)){
    return '组件或者页面文件夹名称只能由英文构成，或以“-”符号连接！'
  }
  return true;
}

function checkPath(value){
  if(!value){
    return '路径不能为空'
  }
  return true
}

module.exports ={ 
  checkComponentName,
  checkPath
}