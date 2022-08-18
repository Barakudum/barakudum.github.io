import { useQuery } from "react-query"
import { fetchRepoLanguages } from "../../../../apiCommunication"
import GitColors from './language_colors'

interface languageBarProps {
    repo: string
}


export default function LanguageBar(props: languageBarProps){
    const request = useQuery(["repo-languages", props.repo], () => fetchRepoLanguages(props.repo))

    // failed or empty data
    if(!request.isSuccess || !request.data){
        return null
    }
    
    const languages = request.data

    let total = 0
    for(let size of Object.values(languages)){
        total += size
    }

    return <div className="language-bar">
        {Object.keys(languages).map(language => 
            <div key={language} className="color" style={{width: `${Math.round(languages[language] / total * 100)}%`, backgroundColor: GitColors[language]}} />
        )}
    </div>
}
