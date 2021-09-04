const {
  getName,
} = require('../utils/getName');

const {
  TEMP_PAGE_PATH,
  C7N_ROUTES_PATH,
} = require('../utils/CONST');

const {
  checkComponentName,
  checkPath,
} = require('../utils/validate');

const {
  getFilePath,
} = require('../utils/getPath');

//  plop.setPartial('myTitlePartial', '<h1>{{titleCase name}}</h1>');

function createRoute({
  toUpperFirstName,
  filePath,
  componentName,
  prefixCls,
  intlPrefix,
}){
  const template = [
    {
      type: 'add',
      path: `${filePath}/stores/index.tsx`,
      templateFile: `${TEMP_PAGE_PATH}/stores/index.tsx.hbs`,
      data: {
        toUpperFirstName,
        prefixCls,
        intlPrefix,
      }
    },
    {
      type: 'add',
      path: `${filePath}/stores/useStore.tsx`,
      templateFile: `${TEMP_PAGE_PATH}/stores/useStore.tsx.hbs`,
    },
    {
      type: 'add',
      path: `${filePath}/Content.tsx`,
      templateFile: `${TEMP_PAGE_PATH}/Content.tsx.hbs`,
      data: {
        toUpperFirstName,
      }
    },
    {
      type: 'add',
      path: `${filePath}/index.less`,
      templateFile: `${TEMP_PAGE_PATH}/index.less.hbs`,
      data: {
        prefixCls,
      }
    },
    {
      type: 'add',
      path: `${filePath}/index.tsx`,
      templateFile: `${TEMP_PAGE_PATH}/index.tsx.hbs`,
      data: {
        toUpperFirstName,
      }
    },
    {
      type: 'add',
      path: `${filePath}/interface.ts`,
      templateFile: `${TEMP_PAGE_PATH}/interface.ts.hbs`,
      data: {
        toUpperFirstName,
      }
    },
    {
      type: 'add',
      path: `${filePath}/services/index.ts`,
      templateFile: `${TEMP_PAGE_PATH}/services/index.ts.hbs`,
      data: {
        toUpperFirstName,
      }
    }
  ]
  return template;
}

module.exports = {
  description: '创建一个新路由页面',
  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: '请输入页面文件夹名称：',
      validate: checkComponentName
    },
    {
      type: 'input',
      name: 'dirPath',
      message: '请输入新页面的文件路径（默认routes文件下创建）：',
      default: getFilePath(C7N_ROUTES_PATH),
    }
  ],
  actions: (data) => {
    let files = [];
    const {
      dirPath,
      componentName,
    } = data;

    const {
      prefixCls,
      toUpperFirstName,
      intlPrefix,
    } = getName(componentName)

    const filePath = getFilePath(dirPath, componentName);

    if(componentName){
      files = createRoute({
        toUpperFirstName,
        filePath,
        componentName,
        prefixCls,
        intlPrefix,
      })
    }
    return files;
  }
};