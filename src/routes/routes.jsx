import { Home, Quiz, Score } from '../pages'
import MainLayout from '../layouts/MainLayout'


export const routes = [
    {
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/quiz', element: <Quiz /> },
            { path: '/score', element: <Score /> }
        ]
    }
]