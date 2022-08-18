import './style.scss'
import { useQuery } from 'react-query'
import { fetchRepoList } from '../../../apiCommunication'
import { RepoData } from '../../../apiCommunication/interfaces'
import IsLoading from '../../../components/IsLoading'
import FallbackImage from '../../../components/FallbackImage'
import ExternalLink from '../../../components/ExternalLink'
import Icon from '../../../components/Icon'
import ProblemOccured from '../../../components/ProblemOccured'
import { getRepoIcon } from '../../utility'
import LanguageBar from './Languagebar'


export default function GithubProjects(){
    const request = useQuery(['github-repos'], () => fetchRepoList())

    return <div className='github-projects parallax'>
        <h1>Github Projects</h1>
        {request.isLoading && <IsLoading/>}
        {request.isError && <ProblemOccured/>}
        {request.isSuccess &&
            <RepoList repos={request.data}/>
        }
    </div>
}


export function RepoList(props: {repos: RepoData[]}){
    return <div className='repo-list'>
        {props.repos.map((repo, key) => 
            <GithubRepo key={key} {...repo}/>
        )}
    </div>
}


export function GithubRepo(props: RepoData){
    const repoIconSrc = getRepoIcon(props.full_name, props.default_branch)

    return <div className='repo-card'>
        <div className='cover'>
            <h3 className='title'>
                {props.full_name}
            </h3>
            <FallbackImage className='repo-icon' srcs={[repoIconSrc]} />
            <LanguageBar repo={props.full_name}/>
        </div>
        <div className='hidden'>
            <p className='title'>
                {props.full_name}
            </p>
            <p className='description'>
                {props.description}
            </p>
            <FallbackImage className='repo-icon' srcs={[repoIconSrc]} />
            <div className='links'>
                {props.homepage && <ExternalLink url={props.homepage}>
                    <Icon name="website"/>
                    Website
                </ExternalLink>}
                <ExternalLink url={props.html_url}>
                    <Icon name="github"/>
                    Repository
                </ExternalLink>
            </div>
        </div>
    </div>
}
