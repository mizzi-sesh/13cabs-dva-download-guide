import InlineCodeSnip from "@/app/ui/inlinecodesnip";
import PageContents, { CSFragment } from "@/app/ui/pagecontents";
import Link from "next/link";
// `}<InlineCodeSnip>{` `}</InlineCodeSnip>{` 
export default function Page () {

   return  (
        <>
            <PageContents id="page-contents">
                <CSFragment content="SubByName_Rq_Env" link="sbn-req-env"/>
                <CSFragment content="SuburbByNameRpEnv" link="sbn-res-env"/>
                <CSFragment content="SubByName_Controller" link="sbn-controller"/>
                <CSFragment content="Back to top" link="/"/>
            </PageContents>
            <article className="mt-4 w-full min-w-0 max-w-6x1 px-1 md:px-6 min-height-[calc(-103px + 100vh)]">
                <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                    </div>
                    <div className="prose prose-documentation max-w-none">
                    <h1 id="" className="break-words">{`SuburbsByName`}</h1>
                        <div className="mb-2"/>
                        <p>{`Testing`}</p>

                        <h2 id="sbn-req-env" className="">{`SubByName_Rq_Env`}</h2>
                        <p>{``}</p>

                        <h2 id="sbn-res-env" className="">{`SuburbByNameRpEnv`}</h2>
                        <p>{``}</p>

                        <h2 id="sbn-controller" className="">{`SubByName_Controller`}</h2>
                        <p>{``}</p>
                        
                    </div>
                    <div className="h-96">{``}</div>
                    <div className="h-96">{``}</div>

            </article>

        </>
    )
}