import './style.scss'
import '../components/style.scss'
import Websites from './sections/Websites'
import Skills from './sections/Skills'
import GithubProjects from './sections/GithubProjects'


export default function App() {
    return <div className='app'>
        <Websites/>
        <Skills/>
        <GithubProjects/>
    </div>
}
