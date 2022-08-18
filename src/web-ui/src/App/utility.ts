export function getRepoIcon(full_name: string, branch?: string){
    return `https://raw.githubusercontent.com/${full_name}/${branch ?? "main"}/README.assets/repo-icon.png`
}
