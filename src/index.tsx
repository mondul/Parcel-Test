import { render } from 'preact'

import { darkmode } from './store/darkmode'
import App from './components/App'

if (darkmode.get()) document.body.className = 'darkmode'

render(<App />, document.body)
