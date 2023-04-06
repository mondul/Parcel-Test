import { lazy, Suspense } from 'preact/compat'
import { useStore } from '@nanostores/preact'
import { Link, Switch, Route } from 'wouter-preact'

import { count } from '../../store/count'
import DarkModeToggle from '../DarkModeToggle'
import Loading from '../Loading'

import './app.scss'

const Home = lazy(() => import('../Home'))
const Info = lazy(() => import('../Info'))
const NotFound = lazy(() => import('../NotFound'))

export default function App() {
  const current_count = useStore(count)

  return <>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/info">Info</Link>
      <Link href="/something">Something</Link>
      <span>Count: {current_count}</span>
      <DarkModeToggle />
    </nav>

    <main>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/info" component={Info} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </main>
  </>
}
