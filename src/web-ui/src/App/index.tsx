import './style.scss'
import '../components/style.scss'
import ErrorBoundary from './ErrorBoundary'
import RateLimitWarner from './sections/RateLimitWarner'
import MeScreen from './sections/MeScreen'
import Websites from './sections/Websites'
import Skills from './sections/Skills'
import GithubProjects from './sections/GithubProjects'


export default function App() {
    return <div className='app'>
        <ErrorBoundary>
            <RateLimitWarner/>
        </ErrorBoundary>
        <ErrorBoundary>
            <MeScreen/>
        </ErrorBoundary>
        <ErrorBoundary>
            <Websites/>
        </ErrorBoundary>
        <ErrorBoundary>
            <Skills/>
        </ErrorBoundary>
        <ErrorBoundary>
            <GithubProjects/>
        </ErrorBoundary>
    </div>
}
