import App from './App.vue'
import Message from 'ant-design-vue/es/message'
import Notification from 'ant-design-vue/es/notification'
import AntdComponentPlugin from '@antd-templater/library-3.x'
import DirectivePlugin from '@/configure/presetDirective'
import PiniaterPlugin from '@/plugin/pinia'
import RouterPlugin from '@/router'

import '@/mock'
import '@/main.less'
import '@/permission'

Notification.config({ duration: 1 })
Message.config({ duration: 1 })

createApp(App)
  .use(AntdComponentPlugin)
  .use(DirectivePlugin)
  .use(PiniaterPlugin)
  .use(RouterPlugin)
  .mount('#app')
