import * as T from './interfaces'



export function buildUrl(server: string, endpoint: string, searchParams: object): string{
    const url = new URL(endpoint, server)
    for(let [key, value] of Object.entries(searchParams)){
        url.searchParams.append(key, value.toString())
    }
    return url.toString()
}

export const buildGitUrl = (endpoint: string, searchParams: object): string =>
    buildUrl('https://api.github.com', endpoint, searchParams)



export async function fetchRepoList(): Promise<T.RepoData[]> {
    const url = buildGitUrl('/users/PlayerG9/repos', {
        type: "all",  // include guest repos
        per_page: 100,  // needs to get updated after 100+ repos
        sort: "pushed"
    })
    const response = await fetch(url)
    if(!response.ok){
        throw new Error()
    }
    const data = await response.json()
    return data
}
