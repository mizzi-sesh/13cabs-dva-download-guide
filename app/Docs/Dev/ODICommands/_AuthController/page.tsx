import InlineCodeSnip from "@/app/ui/inlinecodesnip";
import PageContents, { CSFragment } from "@/app/ui/pagecontents";
import Link from "next/link";
// `}<InlineCodeSnip>{` `}</InlineCodeSnip>{` 
export default function Page () {

   return  (
        <>
            <PageContents id="page-contents">
                <CSFragment link="auth-req-env" content="Auth_Rq_Env_Cl"/>
                <CSFragment link="auth-res-env" content="Auth_Rp_Env_Cl"/>
                <CSFragment link="auth-controller" content="Auth_Controller"/>
                <CSFragment content="Back to top" link="/"/>

            </PageContents>
            <article className="mt-4 w-full min-w-0 max-w-6x1 px-2 md:px-6 min-height-[calc(-103px + 100vh)]">
                <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                    </div>
                    <div className="prose prose-documentation max-w-none">
                        <div className="h-[15px]">{``}</div>
                        <h1 id="" className="break-words">{`AuthController`}</h1>
                        <div className="mb-2"/>
                        <p>{`Testing`}</p>

                        <h2 id="auth-req-env" className="">{`Auth_Rq_Env_Cl`}</h2>
                        <p>{``}</p>

                        <h2 id="auth-res-env" className="">{`Auth_Rp_Env_Cl`}</h2>
                        <p>{``}</p>

                        <h2 id="auth-controller" className="">{`Auth_Controller`}</h2>
                        <p>{``}</p>

                    </div>
                    <div className="h-96">{``}</div>
            </article>

        </>
    )
}