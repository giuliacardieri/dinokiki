import Home from './components/Home'
import About from './components/About'
import Game from './components/Game'

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
    }
]

export default routes
