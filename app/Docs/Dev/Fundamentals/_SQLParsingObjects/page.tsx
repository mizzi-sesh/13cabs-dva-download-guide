import InlineCodeSnip from "@/app/ui/inlinecodesnip";
import PageContents, { CSFragment } from "@/app/ui/pagecontents";
import Link from "next/link";
// `}<InlineCodeSnip>{` `}</InlineCodeSnip>{` 
export default function Page () {

   return  (
        <>
            <PageContents id="page-contents">
                <CSFragment link="query-builder" content="A2bSQLServerQueryBuilder"/>
                <CSFragment link="get-fleet-and-sub-ids" content="GetFleetAndSuburbIds(...)"/>
                <CSFragment link="find-db-by-state" content="FindDatabasesByState(...)"/>
                <CSFragment link="find-fleet-by-state" content="FindFleetIDsByState(...)"/>
                <CSFragment link="sql-searching-strategies" content="SQLSearchingStrategies"/>
                <CSFragment content="Back to top" link="/"/>

            </PageContents>
            <article className="mt-4 w-full min-w-0 max-w-6x1 px-2 md:px-6 min-height-[calc(-103px + 100vh)]">
                <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                    </div>
                    <div className="prose prose-documentation max-w-none">
                    <div className="h-[15px]">{``}</div>
                        <h1 id="" className="break-words">{`SQL Parsing Objects`}</h1>
                        <div className="mb-2"/>
                        <p>{``}</p>

                        <h2 id="query-builder" className="">{`A2bSQLServerQueryBuilder`}</h2>
                        <p>{``}</p>

                        <h2 id="get-fleet-and-sub-ids" className="">{`GetFleetAndSuburbIds(...)`}</h2>
                        <p>{``}</p>

                        <h2 id="find-db-by-state" className="">{`FindDatabasesByState(...)`}</h2>
                        <p>{``}</p>

                        <h2 id="find-fleet-by-state" className="">{`FindFleetIDsByState(...)`}</h2>
                        <p>{``}</p>

                        <h2 id="sql-searching-strategies" className="">{`SQLSearchingStrategies`}</h2>
                        <p>{``}</p>

                    </div>
                    <div className="h-96">{``}</div>
                    <div className="h-96">{``}</div>
            </article>

        </>
    )
}