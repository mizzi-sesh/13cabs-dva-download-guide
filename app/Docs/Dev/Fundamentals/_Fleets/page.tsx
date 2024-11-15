import InlineCodeSnip from "@/app/ui/inlinecodesnip";
import PageContents, { CSFragment } from "@/app/ui/pagecontents";
import Link from "next/link";
// `}<InlineCodeSnip>{` `}</InlineCodeSnip>{` 
export default function Page () {

   return  (
        <>
            <PageContents id="page-contents">
                <CSFragment content="Fleets" link="fleets"/>
                <CSFragment content="FleetBank" link="fleet-bank"/>
                <CSFragment content="GetStateIDFromPostCode(...)" link="get-state-id"/>
                <CSFragment content="FindFleetIDsByState(..)" link="find-fleet-id"/>
                
                <CSFragment content="Back to top" link="/"/>

            </PageContents>
            <article className="mt-4 w-full min-w-0 max-w-6x1 px-2 md:px-6 min-height-[calc(-103px + 100vh)]">
                <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                    </div>
                    <div className="prose prose-documentation max-w-none">
                    <div className="h-[15px]">{``}</div>
                        <h1 id="" className="break-words">{`Fleets`}</h1>

                            <div className="mb-2"/>
                            <p>{`TODO:
                                - Explain what fleets for 13cabs are and the necessity of determining them
                                - Explain that previously, agents would have to determine the fleet manually, and manually load the system tied to it each time
                                - Discuss Fleet object structure
                                - Explain how some of the functionality is expressed in BookingRedux
                            `}</p>

                            <h2 id="fleets" className="">{`Fleets`}</h2>
                            <p>{``}</p>

                            <h2 id="fleet-bank" className="">{`FleetBank`}</h2>
                            <p>{``}</p>

                            <h2 id="get-state-id" className="">{`GetStateIDFromPostCode(...)`}</h2>
                            <p>{``}</p>

                            <h2 id="find-fleet-id" className="">{`FindFleetIDsByState(...)`}</h2>
                            <p>{``}</p>
                    </div>
                <div className="h-96">{``}</div>
                <div className="h-96">{``}</div>
            </article>

        </>
    )
}