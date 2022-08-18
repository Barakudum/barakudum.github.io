import './style.scss'
import { useQuery } from 'react-query'
import { fetchRepoList } from '../../../apiCommunication'
import { RepoData } from '../../../apiCommunication/interfaces'
import FallbackImage from '../../../components/FallbackImage'
import IsLoading from '../../../components/IsLoading'
import { getRepoIcon } from '../../utility'


export default function Websites(){
    const request = useQuery(['github-repos'], () => fetchRepoList())

    return <div className='websites'>
        <h1>Project Websites</h1>
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
        <Favicon {...props}/>
        <p>{props.name}</p>
    </a>
}

function Favicon(props: RepoData){
    const homepageFavicon = getHomepageFavicon(props.homepage)
    // because loading the favicon from heroku would start the whole service
    const isHerokuServed = new URL(homepageFavicon).host.endsWith("herokuapp.com")
    const repoFallback = getRepoIcon(props.full_name, props.default_branch)

    return <FallbackImage srcs={[
        isHerokuServed ? null : homepageFavicon,
        repoFallback,
        "/favicon.ico"
    ]}/>
}

function getHomepageFavicon(homepage: string | null){
    homepage = homepage ?? ""
    if(!homepage.endsWith("/"))
        return `${homepage}/favicon.ico`
    return `${homepage}favicon.ico`
}
