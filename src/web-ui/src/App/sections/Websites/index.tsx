import './style.scss'
import { useQuery } from 'react-query'
import { fetchRepoList } from '../../../apiCommunication'
import { RepoData } from '../../../apiCommunication/interfaces'
import FallbackImage from '../../../components/FallbackImage'
import IsLoading from '../../../components/IsLoading'
import ProblemOccurred from '../../../components/ProblemOccured'
import { getRepoIcon } from '../../utility'
import ExternalLink from '../../../components/ExternalLink'


export default function Websites(){
    const request = useQuery(['github-repos'], () => fetchRepoList())

    return <div className='websites parallax'>
        <h1>Project Websites</h1>
        {request.isLoading && <IsLoading/>}
        {request.isError && <ProblemOccurred/>}
        {request.isSuccess && <WebsiteList repos={request.data}/>}
    </div>
}


export function WebsiteList(props: {repos: RepoData[]}){

    return <div className='website-list'>
        {props.repos
        .filter((repo) => repo.homepage)
        .map((repo, key) => 
            <WebsiteItem key={key} {...repo}/>
        )}
    </div>
}


export function WebsiteItem(props: RepoData){
    return <ExternalLink className='website' url={props.homepage!}>
        <Favicon {...props}/>
        <p>{props.name}</p>
    </ExternalLink>
}

function Favicon(props: RepoData){
    const homepageFavicon = getHomepageFavicon(props.homepage!)
    var isHerokuServed = false;
    try {
        // because loading the favicon from heroku would start the whole service
        isHerokuServed = new URL(homepageFavicon, window.location.origin).host.endsWith("herokuapp.com")
    } catch {}
    const repoFallback = getRepoIcon(props.full_name, props.default_branch)

    return <FallbackImage srcs={[
        isHerokuServed ? null : homepageFavicon,
        repoFallback,
        "/favicon.ico"
    ]}/>
}

function getHomepageFavicon(homepage: string){
    if(!homepage.endsWith("/"))
        return `${homepage}/favicon.ico`
    return `${homepage}favicon.ico`
}
