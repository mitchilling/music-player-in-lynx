import '@lynx-js/react/debug'
import { root } from '@lynx-js/react'

// import { App } from './App.jsx'
import { SongList } from './components/SongList.jsx'

root.render(<SongList />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
