import InlineCodeSnip from "@/app/ui/inlinecodesnip";
import PageContents, { CSFragment } from "@/app/ui/pagecontents";
import Link from "next/link";
// `}<InlineCodeSnip>{` `}</InlineCodeSnip>{` 
export default function Page () {

   return  (
        <>
            <PageContents id="page-contents">
                <CSFragment content="" link=""/>
                <CSFragment content="" link=""/>
                <CSFragment content="" link=""/>
                <CSFragment content="" link=""/>
                <CSFragment content="" link=""/>
                <CSFragment content="Back to top" link="/"/>

            </PageContents>
            <article className="mt-4 w-full min-w-0 max-w-6x1 px-2 md:px-6 min-height-[calc(-103px + 100vh)]">
                <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                    </div>
                    <div className="prose prose-documentation max-w-none">
                    <div className="h-[15px]">{``}</div>
                        <h1 id="" className="break-words">{`Logging`}</h1>
                        <div className="mb-2"/>
                        <p>{`TODO:
                            - discuss Ilogger 
                            - discuss log path
                            - mention that the logging was generally unified into a few core methods, but logging in general is built on the back of a generic Ilogger Log function which writes to a file.
                            - Mention that there is a step to put general exceptions in the menu last op
                            - explain that most of the XML messages are stored in the log file to help track where errors occur.
                            - Explain that when an application is closed, it submits a summary of all bookings which were submitted during run time.
                        `}</p>

                        <h2 id="" className="">{`OutFile(...)`}</h2>
                        <p>{``}</p>

                        <h2 id="" className="">{`OutError(...)`}</h2>
                        <p>{``}</p>

                        <h2 id="" className="">{`OutInfo(...)`}</h2>
                        <p>{``}</p>
                    </div>
                    <div className="h-96">{``}</div>
                    <div className="h-96">{``}</div>
            </article>

        </>
    )
}