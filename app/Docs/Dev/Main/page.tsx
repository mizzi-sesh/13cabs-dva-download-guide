import InlineCodeSnip from "@/app/ui/inlinecodesnip";
import PageContents, { CSFragment } from "@/app/ui/pagecontents";
import Link from "next/link";
// `}<InlineCodeSnip>{` `}</InlineCodeSnip>{` 
export default function Page () {

   return  (
        <>
            <PageContents id="page-contents">
                <CSFragment content="Back to top" link="/"/>

            </PageContents>
            <article className="mt-4 w-full min-w-0 max-w-6x1 px-2 md:px-6 min-height-[calc(-103px + 100vh)]">
                <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                    </div>
                    <div className="prose prose-documentation max-w-none">
                    <div className="h-[15px]">{``}</div>
                    <h1 id="" className="break-words">{`Main`}</h1>
                    <p>{`The `}<InlineCodeSnip>{`Program.cs`}</InlineCodeSnip>{` file hosts the C# entry point for the application. It also defines some of the error handling used for catching exceptions, and also defines the encryption methods used in the application. There's also a definition for `}<InlineCodeSnip>{`IUserInput`}</InlineCodeSnip>{` which allows the simulation of input by being passed as an extra, optional parameter for interactive methods.`}</p>
                    <p>{`Since this file is central to execution, it was designed to not host much of the app functionality. Instead, it merely initiates the terminal loop required by menu management, and then handles any errors which require termination of the application.`}</p>
                    </div>
                    <div className="h-96">{``}</div>
            </article>

        </>
    )
}