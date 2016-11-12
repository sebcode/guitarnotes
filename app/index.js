/* @flow */

import { render } from 'react-dom'
import App from './components/App'

const rootEl = document.getElementById('root')

const doRender = () => {
  render((
    <App />
  ), rootEl)
}

if (rootEl) {
  doRender()
}

