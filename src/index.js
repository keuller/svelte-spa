import './index.css'
import 'sass/build.sass'
import App from './views/App'

const app = new App({
    target: document.getElementById('app'),
    props: {}
})

window.app = app
