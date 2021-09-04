function transformName(componentName) {
  return componentName.split('-').map((word) => [...word].map((letter, index) => {
    return !index ? letter.toUpperCase() : letter.toLowerCase();
  }).join('')).join('');
}

function getName(componentName){
  const intlPrefix = `c7ncd.${componentName.split('-').map((word)=>word.toLowerCase()).join('.')}`
  return {
    toUpperFirstName: transformName(componentName),
    prefixCls: `c7ncd-${componentName}`,
    intlPrefix
  }
}

module.exports = {
  getName,
  transformName,
}