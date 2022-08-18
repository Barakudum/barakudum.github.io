

export interface RepoData {
    name: string,
    full_name: string,
    owner: {
        login: "PlayerG9" | string,
        avatar_url: string,
        html_url: string
    },
    description: string | null,
    homepage: string | null,
    html_url: string,
    language: string | null,
    default_branch: string | "main"
}


export interface Languages {
    [language: string]: number
}
