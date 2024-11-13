import InlineCodeSnip from "@/app/ui/inlinecodesnip";
import PageContents, { CSFragment } from "@/app/ui/pagecontents";
import Link from "next/link";
// `}<InlineCodeSnip>{` `}</InlineCodeSnip>{` 
export default function Page () {

   return  (
        <>
            <PageContents id="page-contents">
                <CSFragment content="Selenium Documentation" link="documentation"/>
                <CSFragment content="WebDriver" link="nuget"/>
                <CSFragment content="What Selenium functions does ADI use?" link="selenium-use"/>
                <CSFragment content="Back to top" link="/"/>

            </PageContents>
            <article className="mt-4 w-full min-w-0 max-w-6x1 px-2 md:px-6 min-height-[calc(-103px + 100vh)]">
                <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                    </div>
                    <div className="prose prose-documentation max-w-none">
                    <div className="h-[15px]">{``}</div>
                    <h1 id="" className="break-words ">{`Selenium Functionality`}</h1>
                    <p>{`Selenium WebDriver is the backbone library for the ADI's DVA booking submissions. Selenium is an open source library designed and developed for testing web services on browsers, by simulating user interaction with generated browser instances.`}</p>
                    <p>{`WebDriver was chosen for development, even though it is a testing framework, specifically due to the improbability of the PRODA website layout changing, and if so, it would only be very infrequently. The Digital Provider Portal is a service relied upon by thousands of government service providers across Australia, so it is important that the layout and behaviour are predictable and consistent. While a potential PRODA change may require an ADI update in future, the requirements for ADI are not technically intensive, as the service is simply used to load the web page, log-in and submit order numbers to scrape results for booking submissions.`}</p>
                    <h2 id="documentation">{`Selenium Documentation`}</h2>
                    <p>{`Selenium documentation can be found `} <Link target="_blank" href="https://www.selenium.dev/documentation/webdriver/drivers/">{`on their website`}</Link>{` for perusal. Most functionality is simply accessed from a WebDriver object itself, which provides the options to navigate URLs, select HTML data on the currently opened page, as well as quitting the browser.`}</p>
                    <p>{`Before ChromeDriver is used, options are submitted in the `}<InlineCodeSnip>{`CustomChromeDriver.cs`}{``}</InlineCodeSnip>{` file that define important browser settings for general use. This includes the headless option to automatically hide the browser from view, the silent options to suppress diagnostic messages which are normally submitted to the console and the default timeout limit for ChromeDriver actions.`}</p>
                    <h2 id="nuget">{`WebDriver NuGet`}</h2>
                    <p>{`When developing the application, the GitHub repository should automatically download the required ChromeDriver dependencies, though if this does not work, the NuGet for the C# distribution of Selenium WebDriver can be found `} <Link href="https://www.nuget.org/packages/Selenium.WebDriver" target="_blank">{`here`}</Link>{`.`}</p>
                    <p>{`More information on setting up project dependencies can be found on the `}<Link href="/Docs/Dev/GettingStarted#clone-github">{`Getting Started`}</Link>{` page.`}</p>
                    <h2 id="selenium-use">{`What Selenium functions does ADI use?`}</h2>
                    <ul className="list-disc pb-2 ml-6 mt-4">
                        <li className="pb-1 pl-2">
                            {``}<InlineCodeSnip>{`IWebDriver.Navigate().GoToUrl(string url)`}</InlineCodeSnip>{` is used to prompt the Chrome instance to navigate to a given URL. `}
                        </li>
                        <li className="pb-1 pl-2">
                            {``}<InlineCodeSnip>{`IWebDriver.FindElement(By.XPath(string XPath))`}</InlineCodeSnip>{` searches the current page for an element that conforms to a given `}<Link href="https://www.w3schools.com/xml/xpath_syntax.asp" target="_blank">{`Xpath`}</Link>{`. This is important to locate any field on a page, including the booking order table, booking date constraint fields, login detail forms and any other page element which is interacted with or observed during the ADI runtime.`}
                            <p>{`An Xpath for a given element on a page can be found in the developer tools element inspector by right clicking the element, and then clicking on "Copy as XPath". `}</p>
                            <p>{`It's important to note that, while the ADI project primarily finds elements by XPath, that it also in some cases searches for an element by Name or element Id. XPath is `}</p>
                            <p>{`While `}<InlineCodeSnip>{`FindElement()`}</InlineCodeSnip>{` was satisfactory in this project, it is recommended to use `}<InlineCodeSnip>{`FindElements()`}</InlineCodeSnip>{`  since this will not throw an error in the case that an element was not found, although the returned collection must be analysed to confirm that the desired result was present on the page to prevent Null Reference or Invalid Argument exceptions.`}</p>
                        </li>
                        <li className="pb-1 pl-2">
                            {``}<InlineCodeSnip>{`IWebDriver.Click()`}</InlineCodeSnip>{` is used to simulate a user click, and is used to click the Login button.`}
                        </li>
                        <li className="pb-1 pl-2">
                            {``}<InlineCodeSnip>{`IWebElement.SendKeys(string keys)`}</InlineCodeSnip>{` is used to submit the username, password, 2fac code and order numbers during the booking process.`}
                        </li>
                        <li className="pb-1 pl-2">
                            {``}<InlineCodeSnip>{`IWebDriver.Quit()`}</InlineCodeSnip>{` to close Chrome instances when operation is no longer required or an error has been encountered.`}
                        </li>
                    </ul>
                    
                    </div>
                    <div className="h-96">{``}</div>
            </article>

        </>
    )
}