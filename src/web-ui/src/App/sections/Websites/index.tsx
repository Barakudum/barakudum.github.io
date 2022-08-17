import './style.scss'
import { useQuery } from 'react-query'
import { fetchRepoList } from '../../../apiCommunication'
import { RepoData } from '../../../apiCommunication/interfaces'
import FallbackImage from '../../../components/FallbackImage'


export default function Websites(){
    const request = useQuery(['github-repos'], () => fetchRepoList())

    const websites = request.data
        ?.filter((repo) => repo.homepage !== null)
        .map((repo, key) => 
            <WebsiteItem key={key} {...repo}/>
        )

    return <div className='websites'>
        {websites}
    </div>
}


export function WebsiteItem(props: RepoData){
    return <a className='website' href={props.homepage ?? ""} target="_blank" rel="noreferrer" >
        <FallbackImage imageSrc={getHomepageIcon(props.homepage)} fallbackSrc="/favicon.ico"/>
        <p>{props.name}</p>
    </a>
}

function getHomepageIcon(homepage: string | null){
    homepage = homepage ?? ""
    if(!homepage.endsWith("/"))
        return `${homepage}/favicon.ico`
    return `${homepage}favicon.ico`
}
