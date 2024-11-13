import { fira_code } from "@/app/layout";
import InlineCodeSnip from "@/app/ui/inlinecodesnip";
import PageContents, { CSFragment } from "@/app/ui/pagecontents";
import Link from "next/link";
// `}<InlineCodeSnip>{` `}</InlineCodeSnip>{` 
export default function Page () {

   return  (
        <>
            <PageContents id="page-contents">
                    <CSFragment content="FindStreetAsync<T>(...)" link="find-street-async"/>
                    <CSFragment content="RetrieveStreetFromMTIAsync(...)" link="retrieve-street-mti"/>
                    <CSFragment content="FindSuburbAsync(...)" link="find-suburb-async"/>
                <CSFragment content="Back to top" link="/"/>

            </PageContents>
            <article className="mt-4 w-full min-w-0 max-w-6x1 px-2 md:px-6 min-height-[calc(-103px + 100vh)]">
                <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                    </div>
                    <div className="prose prose-documentation max-w-none">
                        <div className="h-[15px]">{``}</div>
                        <h1 id="" className="break-words">{`BookingLocations`}</h1>
                        <div className="mb-2"/>

                        <p>{`TODO: Explain that most of these methods are only used as a back up in the case that an address cannot be found via Google Maps.`}</p>
                        <h2 id="find-suburb-async" className={`${fira_code.className}`}>{`FindSuburbAsync(...)`}</h2>
                        <p>{`Explain that this method is routinely used and include a basic snippet breakdown, we collect the suburb with the GetSuburbByName request.`}</p>

                        <h2 id="find-street-async" className={`${fira_code.className}`}>{`FindStreetAsync<T>(...)`}</h2>
                        <p>{`Explain that this is a wrapper of the retrieve street method which repeats the protocol by allowing the user to enter a different street name if searching for the street doesn't return any results`}</p>

                        <h2 id="retrieve-street-mti" className={`${fira_code.className}`}>{`RetrieveStreetFromMTIAsync(...)`}</h2>
                        <p>{`Explain the general process, and explain the strategies it tries.`}</p>

                        
                    </div>
                    <div className="h-96">{``}</div>
            </article>

        </>
    )
}