import { createI18n } from 'vue-i18n';
// import VueClipboard from 'vue-clipboard2';
import store from '@/store';

import en from './lang/en.js';
import zhCN from './lang/zh-CN.js';
import zhTW from './lang/zh-TW.js';
import tr from './lang/tr.js';



const i18n = createI18n({
  locale: store.state.settings.lang,
  messages: {
    en,
    'zh-CN': zhCN,
    'zh-TW': zhTW,
    tr,
  },
  silentTranslationWarn: true,
  legacy: false,
  globalInjection: true,
});

export default i18n;
