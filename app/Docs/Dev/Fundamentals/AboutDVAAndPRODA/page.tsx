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
            <article className="mt-4 w-full min-w-0 max-w-6x1 px-2 md:px-6 min-height-[calc(-103px + 100vh)]">
                <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                    </div>
                    <div className="prose prose-documentation max-w-none">
                        <div className="h-[15px]">{``}</div>
                        <h1 id="" className="break-words">{`About DVA and PRODA`}</h1>
                        <br/>
                        <p>{``}</p>
                        <h2 id="proda" className="">{`Proda`}</h2>
                        <p>{``}<Link href="https://www.servicesaustralia.gov.au/proda-provider-digital-access" target="_blank">{`PRODA (Provider Digital Access)`}</Link>{` is the online identity verification and authentication system which allows government service providers (in this case 13cabs) to access resources which specify information regarding the services they provide. In the case of the DVA bookings for the ADI project, PRODA is traversed to access booking information. After the authentication has been complete, PRODA redirects the browser to the service portal was requested.`}</p>
                        <p>{`It should be noted that access to PRODA authentication requires an agent or developer submit an application with identity documents. More information about this can be found `}<Link href="https://www.servicesaustralia.gov.au/proda-provider-digital-access" target="_blank">{`here`}</Link>{`. Not only must the user have access to a PRODA account, but that account must also have been allocated access to a government provided service.`}</p>
                        <h2 id="dva" className="">{`DVA`}</h2>
                        <p>{`The `}<Link href="https://connect.dva.gov.au/index.htm" target="_blank">{`DVA veteran transport`}</Link>{` service portal is used to lookup DVA bookings submitted by the agent in the ADI project. The Department of Veteran Affairs provides government subsidised services to Australian veterans. 13cabs has been a long-time provider of DVA transport services, driving thousands of veterans nation wide, every month. Many veteran bookings are requested to attend medical appointments and as such, booking accuracy and prompt dispatch are important for the health and safety of Australia's veterans. Each DVA booking has the following fields:`}</p>

                        <table className="w-full table-auto">
                            <thead>
                                <tr>
                                    <th>{`Field Name`}</th>
                                    <th>{`Explanation`}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="font-bold">
                                        {`Client Name`}
                                    </td>
                                    <td>
                                        {`The Veteran's full name.`}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold">
                                        {`Booking Number`}
                                    </td>
                                    <td>
                                        {`An 8-digit unique booking identifier`}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold">
                                        {`Direction`}
                                    </td>
                                    <td>
                                        {`Defines whether the booking describes inbound or outbound travel with respect to the original pickup location. Bookings by default have an inbound and outbound journey, but some bookings are inbound or outbound only.`}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold">
                                        {`Booking Status`}
                                    </td>
                                    <td>
                                        {`Whether the booking is Dispatched, Completed or Cancelled.`}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold">
                                        {`Car Type`}
                                    </td>
                                    <td>
                                        {`Whether the vehicle must be wheelchair accessible or not.`}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold">
                                        {`Date`}
                                    </td>
                                    <td>
                                        {`The booking date.`}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold">
                                        {`Time`}
                                    </td>
                                    <td>
                                        {`The time of the booking appointment. The veteran needs to arrive before this time. By default, the ADI application will calculate the estimated travel time, and then add 30 minutes when determining the actual pick up time.`}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold">
                                        {`Attendants`}
                                    </td>
                                    <td>
                                        {`How many attendants, beyond the veteran will be traveling with them. This is almost always inconsequential since most veterans travel alone or with one carer.`}
                                    </td>
                                </tr>
                                <br/>
                                <br/>
                                <tr>
                                    <td className="font-bold">
                                        {`Pickup Practictioner Name`}
                                    </td>
                                    <td>
                                        {`This is used for veterans traveling from medical appointments and practices to specify the name of the professional.`}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold">
                                        {`Pickup Contact Number`}
                                    </td>
                                    <td>
                                        {`This can be the contact number of the pickup location if it is a business, or the home phone of the veteran, and is generally considered the desired contact number. Multiple numbers may be provided by DVA, but ADI has the agent choose a single number for booking submissions.`}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold">
                                        {`Pickup Building / Business Name`}
                                    </td>
                                    <td>
                                        {`The building is typically referred to in ADI as the location or place name. This is optionally included to help a driver locate a pickup address if it belongs to a business or building.`}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold">
                                        {`Pickup Unit / Street Number`}
                                    </td>
                                    <td>
                                        {`The unit and/or street number of the pickup address.`}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold">
                                        {`Pickup Street Name`}
                                    </td>
                                    <td>
                                        {`The street name of the pickup address.`}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold">
                                        {`Pickup Suburb`}
                                    </td>
                                    <td>
                                        {`The suburb of the pickup address.`}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold">
                                        {`Pickup Postcode`}
                                    </td>
                                    <td>
                                        {`The postcode of the pickup address.`}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold">
                                        {`Pickup State`}
                                    </td>
                                    <td>
                                        {`The state of the pickup address.`}
                                    </td>
                                </tr>
                                <br/>
                                <br/>
                                <tr>
                                    <td className="font-bold">
                                        {`Destination Practictioner Name`}
                                    </td>
                                    <td>
                                        {`This is used for veterans traveling to medical appointments and practices to specify the name of the professional.`}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold">
                                        {`Destination Contact Number`}
                                    </td>
                                    <td>
                                        {`This can be the contact number of the destination location if it is a business, or the home phone of the veteran, and is generally considered the desired contact number. Multiple numbers may be provided by DVA, but ADI has the agent choose a single number for booking submissions.`}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold">
                                        {`Destination Building / Business Name`}
                                    </td>
                                    <td>
                                        {`The building is typically referred to in ADI as the location or place name. This is optionally included to help a driver locate a destination address if it belongs to a business or building`}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold">
                                        {`Destination Unit / Street Number`}
                                    </td>
                                    <td>
                                        {`The unit and/or street number of the destination address.`}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold">
                                        {`Destination Street Name`}
                                    </td>
                                    <td>
                                        {`The street name of the destination address.`}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold">
                                        {`Destination Suburb`}
                                    </td>
                                    <td>
                                        {`The suburb name of the destination address.`}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold">
                                        {`Destination Postcode`}
                                    </td>
                                    <td>
                                        {`The postcode of the destination address.`}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold">
                                        {`Destination State`}
                                    </td>
                                    <td>
                                        {`The state of the destination address.`}
                                    </td>
                                </tr>
                                <br/>
                                <br/>
                                <tr>
                                    <td className="font-bold">
                                        {`Special Instructions`}
                                    </td>
                                    <td>
                                        {`Instructions for the driver and the agent dispatching the booking to be performed over the course of the request. Typically this will feature a request for a specific pick up time, or that a booking features an outbound booking with a specified pickup time (typically the outbound booking is not dispatched with a pickup time but is instead dispatched when the veteran calls the team, or DVA replaces the original outbound with an outbound that says to pickup the veteran now.) Other information may also be provided, such as where specifically to find the veteran on premises, or a procedure to collect the veteran from a facility (such as calling on approach).`}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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