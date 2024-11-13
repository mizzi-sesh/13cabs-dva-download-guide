import InlineCodeSnip from "@/app/ui/inlinecodesnip";
import PageContents, { CSFragment } from "@/app/ui/pagecontents";
import Link from "next/link";
// `}<InlineCodeSnip>{` `}</InlineCodeSnip>{` 
export default function Page () {



   return  (
        <>
            <PageContents id="page-contents">
                <CSFragment content="DVAInfo" link="dva-info"/>
                <CSFragment content="DVAInfoCache" link="dva-info-cache"/>
                <CSFragment content="ScrapeDVABooking( )" link="scrape-dva"/>
                <CSFragment content="DeriveBookingFromTable( )" link="derive-booking"/>
                <CSFragment content="GenerateBookingFromCache( )" link="generate-booking"/>
                <CSFragment content="DeterminePreBookedPickUpTime( )" link="determine-prebook"/>
                <CSFragment content="GetBookingTable( )" link="get-booking-table"/>
                <CSFragment content="SearchBrowserForBooking( )" link="search-browser"/>
                <CSFragment content="ScrapeDVATable( )" link="scrape-dva-table"/>
                <CSFragment content="DesiredPickUpTime( )" link="desired-pickup"/>
                <CSFragment content="YieldDVABookingInformation( )" link="yield-booking-info"/>
                <CSFragment content="DVABooking" link="dvabooking"/>
                <CSFragment content="Back to top" link="/"/>
            </PageContents>
            <article className="mt-4 w-full min-w-0 max-w-6x1 px-1 md:px-6 min-height-[calc(-103px + 100vh)]">
                <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                    </div>
                    <div className="prose prose-documentation max-w-none">
                    <h1 id="" className="break-words">{`DVABooking`}</h1>
                    
                    <p>{`The `}<InlineCodeSnip>{`DVABooking`}</InlineCodeSnip>{` class is defines the procedure for submitting a DVA booking. `}<InlineCodeSnip>{`DVABooking`}</InlineCodeSnip>{` inherits from the `}<InlineCodeSnip><Link href="/Docs/Dev/Fundamentals/Booking">{`BookingRedux`}</Link></InlineCodeSnip>{` class, and builds on top of the existing booking class structure to include fields specific to the DVA service. In addition to implementing `}<InlineCodeSnip>{`BooingRedux`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`DVABooking`}</InlineCodeSnip>{` features functionality which interprets the XML read into the application via the `}<InlineCodeSnip><Link href="/Docs/Dev/Selenium">{`Selenium ChromeDriver`}</Link></InlineCodeSnip>{` into a dispatchable `}<InlineCodeSnip>{`DVABooking`}</InlineCodeSnip>{` object.`}</p>
                    <p className="mb-2">{`Functionally speaking, the actual implementation of these features is primarily facilitated through the `}<InlineCodeSnip>{`DVAInfo`}</InlineCodeSnip>{` class, with the `}<InlineCodeSnip>{`DVABooking`}</InlineCodeSnip>{` class serving as an interchangeable wrapper so that it may be parsed alongside bookings of different accounts.`}</p>
                
                    <h2 id="dva-info" className="">{`DVAInfo`}</h2>
                    <p>{``}<InlineCodeSnip>{`DVAInfo`}</InlineCodeSnip>{` inherits from the `}<InlineCodeSnip>{`BookingInfo`}</InlineCodeSnip>{` class, and contains all DVA-booking specific fields for order interpretation. Here are the defined enums and fields  used in this class:`}</p>
                    <ul className="ml-6 mb-4 list-disc space-y-2">
                        <li ><InlineCodeSnip>{`DirectionDVA`}</InlineCodeSnip>{` — An enumerator object which notes whether the retrieved DVA booking is traveling inbound or outbound.`}</li>
                        <li><InlineCodeSnip>{`OrderStatusDVA`}</InlineCodeSnip>{` — An enumerator object which notes the retrieved status of the order. May be set to either `}<InlineCodeSnip>{`Dispatched`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`Cancelled`}</InlineCodeSnip>{` or `}<InlineCodeSnip>{`Completed`}</InlineCodeSnip>{`.`}</li>
                        <li><InlineCodeSnip>{`FileNumber`}</InlineCodeSnip>{` — A string which notes the retrieved `}<Link href="/Docs/Dev/Fundamentals/AboutDVAAndPRODA#dva">{`DVA File Number`}</Link>{`to identify the veteran for DVA services.`}</li>
                        <li><InlineCodeSnip>{`OrderNumber`}</InlineCodeSnip>{` — An 8-digit integer that defines the unique identifier of the booking.`}</li>
                        <li><InlineCodeSnip>{`SpecialInstructions`}</InlineCodeSnip>{` — A string to define instructions for the booking agent and driver such as: pickup time, phone numbers, call on approach or pre-booked returns.`}</li>
                    </ul>
                    <p>{`The `}<InlineCodeSnip>{`DVAInfo`}</InlineCodeSnip>{` constructor takes the above fields, as well as the fields it inherits from `}<InlineCodeSnip>{`BookingInfo`}</InlineCodeSnip>{`.`}</p>
                    <h2 id="dva-info-cache" className="">{`DVAInfoCache`}</h2>
                    <p>{``}</p>

                    <h2 id="scrape-dva" className="">{`ScrapeDVABooking()`}</h2>
                    <p>{``}</p>

                    <h2 id="derive-booking" className="">{`DeriveBookingFromTable()`}</h2>
                    <p>{``}</p>

                    <h2 id="generate-booking" className="">{`GenerateBookingFromCache()`}</h2>
                    <p>{``}</p>

                    <h2 id="determine-prebook" className="">{`DeterminePreBookedPickUpTime()`}</h2>
                    <p>{``}</p>

                    <h2 id="get-booking-table" className="">{`GetBookingTable()`}</h2>
                    <p>{``}</p>

                    <h2 id="search-browser" className="">{`SearchBrowserForBooking()`}</h2>
                    <p>{``}</p>

                    <h2 id="scrape-dva-table" className="">{`ScrapeDVATable()`}</h2>
                    <p>{``}</p>
                    
                    <h2 id="desired-pickup" className="">{`DesiredPickUpTime()`}</h2>
                    <p>{``}</p>

                    <h2 id="yield-booking-info" className="">{`YieldDVABookingInformation()`}</h2>
                    <p>{``}</p>

                    <h2 id="dvabooking" className="">{`DVABooking`}</h2>
                    <p>{``}</p>
                    </div>
                    <div className="h-96">{``}</div>
            </article>

        </>
    )
}