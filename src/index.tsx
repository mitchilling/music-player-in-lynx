import '@lynx-js/react/debug'
import { root } from '@lynx-js/react'
import { Provider } from 'jotai'

import { App } from './App.jsx'

root.render(
  <Provider>
    <App />
  </Provider>
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
