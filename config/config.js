import { defineConfig } from 'umi';
import routes from './routes'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  antd:{
    dark:false,
  },
  layout: {
    title: 'Ant Design',
    locale: false, 
  },
  fastRefresh: {},
});

