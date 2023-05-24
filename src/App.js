import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { QueryClientProvider , QueryClient } from 'react-query'
import './App.css'
import { HomePage } from './components/Home.page'
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'
import { SuperHeroesPage } from './components/SuperHeroes.page'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RQSuperFakeHeroDetails } from './components/RQSuperFakeHeroDetails'
import { RQParalal } from './components/RQParalal'
import { DynamicParalle } from './components/DynamicParalle'
import { DependentQueries } from './components/DependentQueries'
import RQPaginated from './components/RQPaginated'
import { RQInfinite } from './components/RQInfinite'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/rq-infinite'>
        <RQInfinite />
              </Route>
          <Route path='/rq-paginated'>
            <RQPaginated />
          </Route>
          <Route path='/rq-dependent'>
            <DependentQueries email='123@gmail.com' />
          </Route>
          <Route path='/rq-dynamic'>
            <DynamicParalle id={[3100, 3102,3101]} />
          </Route>
          <Route path='/rq-paralal'>
          <RQParalal />
          </Route>
          <Route path='/rq-super-heros/:id'>
           <RQSuperFakeHeroDetails />
          </Route>
          <Route path='/super-heroes'>
            <SuperHeroesPage />
          </Route>
          <Route path='/rq-super-heroes'>
            <RQSuperHeroesPage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
    <ReactQueryDevtools initialIsOpen={true} position='bottom-right' />
    </QueryClientProvider>
  )
}

export default App
