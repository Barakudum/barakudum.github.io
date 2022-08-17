import './style.scss'
import { useQuery } from 'react-query'
import { fetchRepoList } from '../../../apiCommunication'
import { RepoData } from '../../../apiCommunication/interfaces'
import FallbackImage from '../../../components/FallbackImage'
import IsLoading from '../../../components/IsLoading'


export default function Websites(){
    const request = useQuery(['github-repos'], () => fetchRepoList())


    return <div className='websites'>
        {request.isLoading && <IsLoading/>}
        {request.isSuccess && <WebsiteList repos={request.data}/>}
    </div>
}


export function WebsiteList(props: {repos: RepoData[]}){

    const websites = props.repos
        .filter((repo) => repo.homepage !== null)
        .map((repo, key) => 
            <WebsiteItem key={key} {...repo}/>
        )
    
    return <div className='website-list'>
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
