import InlineCodeSnip from "@/app/ui/inlinecodesnip";
import PageContents, { CSFragment } from "@/app/ui/pagecontents";
import Link from "next/link";
// `}<InlineCodeSnip>{` `}</InlineCodeSnip>{` 
export default function Page () {

   return  (
        <>
            <PageContents id="page-contents">
                <CSFragment content="H1" link=""/>
                <CSFragment content="H2" link=""/>
                <CSFragment content="H3" link=""/>
                <CSFragment content="H4" link=""/>
                <CSFragment content="H5" link=""/>
                <CSFragment content="Back to top" link="/"/>

            </PageContents>
            <article className="mt-4 w-full min-w-0 max-w-6x1 px-1 md:px-6 min-height-[calc(-103px + 100vh)]">
                <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                    </div>
                    <div className="prose prose-documentation max-w-none">
                    <h1 id="" className="break-words">{`ChromeDriverGenerator`}</h1>
                    {/* Enter content here */}
                    </div>
                    <div className="h-96">{``}</div>
                    <div className="h-96">{``}</div>
            </article>

        </>
    )
}