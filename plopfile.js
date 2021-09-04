// const promptDirectory = require('inquirer-directory')
const component = require('./.settings/prompts/component');
const page = require('./.settings/prompts/page');

module.exports = function(plop){
  plop.setGenerator('create a component', component);
  plop.setGenerator('create a new page', page);
}