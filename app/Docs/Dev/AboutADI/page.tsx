'use client'
import { CustomSynxtaxHighligher } from "@/app/ui/customsyntaxhighlighter";
import LinkCard from "@/app/ui/linkcard";
import Link from "next/link";



export function Page() {

    let codeString = 
    `const userNavigation: UserNavigation[] = [
      {name: 'Your Profile', href: '#'}, 
      {name: 'Your Profile', href: '#'}, 
      {name: 'Your Profile', href: '#'}, 
      {name: 'Your Profile', href: '#'},
      {name: 'Settings', href: '#' },
      {name: 'Sign out', href: '#'},
    ]`;  

    return( 
        <>
            <h1 id="downloads" className="break-words">Downloads</h1>
            <CustomSynxtaxHighligher language="javascript" code={codeString} /> 
            <p>Welcome to the Dva documentation!</p>
            <h2 id="what-is-the-download">What is the DVA Download?</h2>
            <p>Some of the main next.js features include:</p>
            <div className="overflow-x-auto">
                <table className="w-full table-auto">
                <thead>
                    <tr>
                    <th>Feature</th>
                    <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>
                        <Link href="/Docs">
                        Documentation
                        </Link>
                    </td>
                    <td>A file-system based router built on top of Server Components that supports layouts, nested routing, loading states, error handling, and more.</td>
                    </tr>
                    <tr>
                    <td>
                        <Link href="/About">
                        About
                        </Link>
                    </td>
                    <td>
                        This is another cell that I'm using for testing regarding my tables
                    </td>
                    </tr>
                </tbody>
                </table>
                <h2 id="Hi">Hi</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h2 id="extra-heading">EXTRA HEADING!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                {/* <CodeBlock aria-label="Hello World" filename="Wow.jsx" language="jsx">

                </CodeBlock> */}
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2"> 
                <LinkCard name="Getting Started" link="/Downloads">
                    Wow
                </LinkCard>
                <LinkCard name="Getting Started" link="/Downloads">
                    Wow
                </LinkCard>
                <LinkCard name="Getting Started" link="/Downloads">
                    Wow
                </LinkCard>
                <LinkCard name="Getting Started" link="/Downloads">
                    Wow
                </LinkCard>
                <LinkCard name="Getting Started" link="/Downloads">
                    Wow
                </LinkCard>
                <LinkCard name="Getting Started" link="/Downloads">
                    Wow
                </LinkCard>
                </div>
            </div>
            
        </>
    )
}