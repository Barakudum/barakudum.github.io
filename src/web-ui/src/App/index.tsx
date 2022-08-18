import './style.scss'
import '../components/style.scss'
import RateLimitWarner from './sections/RateLimitWarner'
import Websites from './sections/Websites'
import Skills from './sections/Skills'
import GithubProjects from './sections/GithubProjects'


export default function App() {
    return <div className='app'>
        <RateLimitWarner/>
        <Websites/>
        <Skills/>
        <GithubProjects/>
    </div>
}
