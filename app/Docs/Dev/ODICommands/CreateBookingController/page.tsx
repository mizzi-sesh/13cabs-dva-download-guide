import InlineCodeSnip from "@/app/ui/inlinecodesnip";
import PageContents, { CSFragment } from "@/app/ui/pagecontents";
import Link from "next/link";
// `}<InlineCodeSnip>{` `}</InlineCodeSnip>{` 
export default function Page () {

   return  (
        <>
            <PageContents id="page-contents">
                <CSFragment content="CrBook_Rq_Env_Cl" link="crbook-req-env"/>
                <CSFragment content="CrBook_Rp_Env_Cl" link="crbook-res-env"/>
                <CSFragment content="CrBook_Controller" link="crbook-controller"/>
                <CSFragment content="Back to top" link="/"/>

                

            </PageContents>
            <article className="mt-4 w-full min-w-0 max-w-6x1 px-2 md:px-6 min-height-[calc(-103px + 100vh)]">
                <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                    </div>
                    <div className="prose prose-documentation max-w-none">
                        <div className="h-[15px]">{``}</div>
                        <h1 id="" className="break-words">{`CreateBookingController`}</h1>

                        <div className="mb-2"/>
                        <p>{`Testing`}</p>

                        <h2 id="crbook-req-env" className="">{`CrBook_Rq_Env_Cl`}</h2>
                        <p>{``}</p>

                        <h2 id="crbook-res-env" className="">{`CrBook_Rp_Env_Cl`}</h2>
                        <p>{``}</p>

                        <h2 id="crbook-controller" className="">{`CrBook_Controller`}</h2>
                        <p>{``}</p>

                    </div>
                    <div className="h-96">{``}</div>
                    <div className="h-96">{``}</div>
            </article>

        </>
    )
}