import './style.scss'
import '../components/style.scss'
import RateLimitWarner from './sections/RateLimitWarner'
import MeScreen from './sections/MeScreen'
import Websites from './sections/Websites'
import Skills from './sections/Skills'
import GithubProjects from './sections/GithubProjects'


export default function App() {
    return <div className='app'>
        <RateLimitWarner/>
        <MeScreen/>
        <Websites/>
        <Skills/>
        <GithubProjects/>
    </div>
}
