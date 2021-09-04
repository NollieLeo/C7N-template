const {
  getName,
} = require('../utils/getName');

const {
  TEMP_BASE_PATH,
  TEMP_STORE_PATH,
} = require('../utils/CONST');

const {
  checkComponentName,
  checkPath,
} = require('../utils/validate');

const {
  getFilePath,
} = require('../utils/getPath');

function createStoreTemp({
  toUpperFirstName,
  filePath,
  componentName,
  prefixCls,
  intlPrefix,
}){
  const tempate = [
    {
      type: 'add',
      path: `${filePath}/stores/index.tsx`,
      templateFile: `${TEMP_STORE_PATH}/stores/index.tsx.hbs`,
      data: {
        prefixCls,
        intlPrefix,
        toUpperFirstName,
      }
    },
    {
      type: 'add',
      path: `${filePath}/stores/useStore.tsx`,
      templateFile: `${TEMP_STORE_PATH}/stores/useStore.tsx.hbs`,
    },
    {
      type: 'add',
      path: `${filePath}/Content.tsx`,
      templateFile: `${TEMP_STORE_PATH}/Content.tsx.hbs`,
      data: {
        toUpperFirstName,
      }
    },
    {
      type: 'add',
      path: `${filePath}/index.less`,
      templateFile: `${TEMP_STORE_PATH}/index.less.hbs`,
      data: {
        prefixCls,
      }
    },
    {
      type: 'add',
      path: `${filePath}/index.tsx`,
      templateFile: `${TEMP_STORE_PATH}/index.tsx.hbs`,
      data: {
        toUpperFirstName,
      }
    }
  ];
  return tempate;
}

function createBaseTemp({
  toUpperFirstName,
  componentName,
  filePath,
  prefixCls,
  intlPrefix,
}){
  const tempate = [
    {
      type: 'add',
      path: `${filePath}/index.less`,
      templateFile: `${TEMP_BASE_PATH}/index.less.hbs`,
      data: {
        prefixCls,
      }
    },
    {
      type: 'add',
      path: `${filePath}/index.tsx`,
      templateFile: `${TEMP_BASE_PATH}/index.tsx.hbs`,
      data: {
        toUpperFirstName,
        prefixCls,
        intlPrefix,
      }
    }
  ];
  return tempate;
}

module.exports = {
  description: '创建一个组件',
  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: '请输入组件或者页面文件夹名称：',
      validate: checkComponentName
    },
    {
      type: 'input',
      name: 'dirPath',
      message: '请输入需要创建组件或者页面的相对路径：',
      validate: checkPath
    },
    {
      type: 'confirm',
      name: 'isStoreTemplate',
      message: '是否需要按context-store模板创建？',
      default: false,
    },
  ],
  actions: (data) => {
    let files = [];
    const {
      dirPath,
      componentName,
      isStoreTemplate,
    } = data;

    const {
      prefixCls,
      toUpperFirstName,
      intlPrefix,
    } = getName(componentName)

    const filePath = getFilePath(dirPath, componentName);

    if(componentName){
      if(isStoreTemplate){
        files = createStoreTemp({
          toUpperFirstName,
          filePath,
          componentName,
          prefixCls,
          intlPrefix,
        })
      }else{
        files = createBaseTemp({
          toUpperFirstName,
          filePath,
          componentName,
          prefixCls,
          intlPrefix,
        })
      }
    }
    return files;
  }
};