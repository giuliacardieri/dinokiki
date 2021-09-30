import Home from './components/Home'
import About from './components/About'
import Game from './components/Game'
import Send from './components/Send'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/games',
        name: 'game',
        component: Game
    },
    {
        path: '/send',
        name: 'send',
        component: Send
    }
]

export default routes
