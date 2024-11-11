import InlineCodeSnip from "@/app/ui/inlinecodesnip";
import PageContents, { CSFragment } from "@/app/ui/pagecontents";
import Link from "next/link";
// `}<InlineCodeSnip>{` `}</InlineCodeSnip>{` 
export default function Page () {

   return  (
        <>
            <PageContents id="page-contents">
                <CSFragment content="Proda" link="proda"/>
                <CSFragment content="DVA" link="dva"/>
                <CSFragment content="Faxes" link="faxes"/>
                <CSFragment content="Back to top" link="/"/>

            </PageContents>
            <article className="mt-4 w-full min-w-0 max-w-6x1 px-1 md:px-6 min-height-[calc(-103px + 100vh)]">
                <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                    </div>
                    <div className="prose prose-documentation max-w-none">
                        <h1 id="" className="break-words">{`About DVA and PRODA`}</h1>
                        <br/>
                        <p>{``}</p>
                        <h2 id="proda" className="">{`Proda`}</h2>
                        <p>{``}<Link href="https://www.servicesaustralia.gov.au/proda-provider-digital-access" target="_blank">{`PRODA (Provider Digital Access)`}</Link>{` is the online identity verification and authentication system which allows government service providers (in this case 13cabs) to access resources which specify information regarding the services they provide. In the case of the DVA bookings for the ADI project, PRODA is traversed to access booking information. After the authentication has been complete, PRODA redirects the browser to the service portal was requested.`}</p>
                        <p>{`It should be noted that access to PRODA authentication requires an agent or developer submit an application with identity documents. More information about this can be found `}<Link href="https://www.servicesaustralia.gov.au/proda-provider-digital-access" target="_blank">{`here`}</Link>{`. Not only must the user have access to a PRODA account, but that account must also have been allocated access to a government provided service.`}</p>
                        <h2 id="dva" className="">{`DVA`}</h2>
                        <p>{`The `}<Link href="https://connect.dva.gov.au/index.htm" target="_blank">{`DVA veteran transport`}</Link>{` service portal is used to lookup DVA bookings submitted by the agent in the ADI project. Each DVA booking has the following fields:`}</p>
                        <ul className="list-disc ml-4">
                            <li>{`Client Name`}</li>
                            <li>{`Booking Number — an 8-digit unique booking identifier`}</li>
                            <br/>
                            <li>{`Client Name`}</li>
                            <li>{`Direction — defines whether the booking describes inbound or outbound travel with respect to the original pickup location. Bookings by default have an inbound and outbound journey, but some bookings are inbound or outbound only. `}</li>
                            <li>{`Booking Status — Whether the booking is Dispatched, Completed or Cancelled.`}</li>
                            <li>{`Car Type — Whether the vehicle must be wheelchair accessible or not`}</li>
                            <li>{`Date `}</li>
                            <li>{`Time — The time of the booking appointment. The veteran needs to arrive before this time. By default, the ADI application will calculate the estimated travel time, and then add 30 minutes when determining the actual pick up time. `}</li>
                            <li>{`Attendants — How many attendants, beyond the veteran will be traveling with them. This is almost always inconsequential.`}</li>
                            <br/>
                            
                            {`There are two sets of the below fields, one of the pick up and one for the destination.`}
                            <li>{`Practitioner Name (optional) — This is used for veterans traveling to-or-from medical appointments and practices.`}</li>
                            <li>{`Contact Number (optional) — This can be the contact number for the travel point business, or the home phone of the veteran, and is generally considered the desired contact number. Multiple numbers may be provided by DVA, but ADI has the agent choose a single number for booking submissions.`}</li>
                            <li>{`Building / Business Name (optional) — The building is typically referred to in ADI as the location or place name. This is optionally included to help a driver locate a travel point when it belongs to a business or building.`}</li>
                            <li>{`Unit / Street number`}</li>
                            <li>{`Street name`}</li>
                            <li>{`Suburb`}</li>
                            <li>{`Postcode`}</li>
                            <li>{`State`}</li>
                            <br/>
                            <li>{`Special Instructions — Bookings often will include special instructions for the driver and the agent dispatching the booking to be performed over the course of the request. Typically this will feature a request for a specific pick up time, or that a booking features an outbound booking with a specified pickup time (typically the outbound booking is not dispatched with a pickup time but is instead dispatched when the veteran calls the team, or DVA replaces the original outbound with an outbound that says to pickup the veteran now.) Other information may also be provided, such as where specifically to find the veteran on premises, or a procedure to collect the veteran from a facility (such as calling on approach).`}</li>
                        </ul>
                        <p>{``}</p>
                        <h2 id="faxes" className="">{`Faxes`}</h2>
                    
                        <p>{`It must be noted that at the time of writing for this documentation, DVA only provide bookings to 13cabs via an fax-to-email service. The DVA booking outlook inbox is monitored by members of the Transport Solutions team to dispatch or modify any booking requested in the submitted fax. The DVA inbox folder receives roughly 800 emails daily, which are serviced by only 2-3 agents during any given period.`}</p>
                         <p>{`The ADI application significantly reduces the time taken and errors produced during the booking process, since without it, all fields must be individually submitted in a fresh booking. While booking templates were able to help with this, a lot of information had to be changed on the spot without automation. With automation, the agent only needs to enter the booking number (order number) and the DVA file number. The DVA file number does not appear on the DVA transport booking portal, but is used as a unique identifier for each veteran who receives DVA services.`}
                        </p>
                    </div>
                    <div className="h-96">{``}</div>
            </article>

        </>
    )
}