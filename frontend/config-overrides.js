const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
// all possible overrides:
// https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
    config,
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      '@primary-color': '#31bd79', // primary color for all components
      '@link-color': '#309d68', // link color
      '@success-color': '#88d762', // success state color
      '@warning-color': '#f7c45e', // warning state color
      '@error-color': '#e63f3f', // error state color
      '@font-size-base': '14px', // major text font size
      '@heading-color': 'rgba(0, 0, 0, .85)', // heading text color
      '@text-color': 'rgba(0, 0, 0, .65)', // major text color
      '@text-color-secondary': 'rgba(0, 0, 0, .45)', // secondary text color
      '@disabled-color': 'rgba(0, 0, 0, .25)', // disable state color
      '@border-radius-base': '4px', // major border radius
      '@border-color-base': '#d9d9d9', // major border color
      '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, .15)', // major shadow for layers"
      '@layout-body-background': '#f0f2f5', // color of body layout
      '@layout-sider-background': '#eaebec', // color of sider
      '@layout-header-background': 'white', // color of header
      '@layout-header-padding': '0 50px 0 0', // layout header padding
      '@item-active-bg': '#f3f3f3',
      '@table-row-hover-bg': '#f3f3f3',
    },
    javascriptEnabled: true,
  })(config, env);
  return config;
};
