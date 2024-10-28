import SyntaxHighlighter from "react-syntax-highlighter"
import { atelierCaveLight, atelierHeathDark } from "react-syntax-highlighter/dist/esm/styles/hljs"



export function CustomSynxtaxHighligher({code, language}: {code:string, language: string}){

    const codeThemeDark = atelierHeathDark
    const codeThemeLight = atelierCaveLight

    const defaultClassInfo = "rounded-md border border-gray-600"
    let defaultLineStyle = {['opacity']: 0.5, ['minWidth']: 0}
    let str = 'hidden dark:block'   

    return(
        <>
            <div className="hidden dark:block">
                <SyntaxHighlighter 
                className={defaultClassInfo}
                language={language}
                style={codeThemeDark}
                lineNumberStyle={defaultLineStyle}
                showLineNumbers
                >{code}</SyntaxHighlighter>
                </div>
                <div className="block dark:hidden">
                <SyntaxHighlighter 
                className={defaultClassInfo}
                language={language}
                style={codeThemeLight}
                lineNumberStyle={defaultLineStyle}
                showLineNumbers
                >{code}</SyntaxHighlighter>
            </div>
        </>
    )
}