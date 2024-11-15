import InlineCodeSnip, { fira_code } from "@/app/ui/inlinecodesnip";
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
                    <h1 id="" className="break-words">{`BookingAccounts`}</h1>

                        <div className="mb-2"/>
                        <p>{`TODO: A code snip that shows the constructor and initialization of fields, and basic explanation of why these fields are important for DVA bookings. Explain that other fields are optionally included in case they can be used later on, since these fields are sourced by the entire create booking SOAP request, not me. `}</p>

                    </div>
                    <div className="h-96">{``}</div>
                    <div className="h-96">{``}</div>
            </article>

        </>
    )
}