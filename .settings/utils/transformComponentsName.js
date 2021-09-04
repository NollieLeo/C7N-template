function transformName(componentName) {
  return componentName.split('-').map((word) => [...word].map((letter, index) => {
    return !index ? letter.toUpperCase() : letter.toLowerCase();
  }).join('')).join('');
}

module.exports = transformName