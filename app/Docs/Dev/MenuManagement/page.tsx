import { radio_canada } from "@/app/layout";
import InlineCodeSnip, { fira_code } from "@/app/ui/inlinecodesnip";
import PageContents, { CSFragment } from "@/app/ui/pagecontents";
import Link from "next/link";
import Image from "next/image"
import adiScreenCap from '../../../../public/AutomaticDispatchInterfaceProject_DLpzHPhEOD.png'
import { CustomSynxtaxHighligher } from "@/app/ui/customsyntaxhighlighter";
// `}<InlineCodeSnip>{` `}</InlineCodeSnip>{` 

// const UnoptimisedLogo = (props: any) => {
//     return <Image {...props} unoptimized className="" alt="PFP"/>
// }

export function GradientBorder({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return(
        <div className="rounded-3xl transition transition-all duration-300 scale-75 h-full w-full p-1 bg-gradient-to-r from-red-600 from-1% via-orange-900 via-50% to-yellow-500 to-99%">
        <div className="flex h-full w-full items-center justify-center dark:bg-black bg-white p-10 rounded-[calc(1.5rem-1px)]  back">
            {children}
        </div>
    </div>
    )
}

const menuManageSnip_2 = `public void PerformFunction(object? param, string input)
{
    foreach (MenuFunction f in _functions)
    {
        if (f.ShortCuts.Contains(input.ToLower().Trim()))
        {
            f.Invoke(param, input.ToLower().Trim());
            break;
        }
    }
}`

export default function Page () {

   return  (
        <>
            <PageContents id="page-contents">
                <CSFragment content="Menu" link="menu"/>
                <CSFragment content="Menu Functions" link="menu-functions"/>
                <CSFragment content="ChooseTerminalMode" link="choose-terminal-mode" isLevel2={true}/>
                <CSFragment content="Config" link="config" isLevel2={true}/>
                <CSFragment content="Quit" link="quit" isLevel2={true}/>
                <CSFragment content="StartDVA_Service" link="startdva" isLevel2={true}/>
                <CSFragment content="LoginDVA_Service" link="logindva" isLevel2={true}/>
                <CSFragment content="SubmitDVA_Service" link="submitdva" isLevel2={true}/>
                <CSFragment content="StopDVA_Service" link="stopdva" isLevel2={true}/>
                <CSFragment content="ViewDVABookingHistory" link="viewdva" isLevel2={true}/>
                <CSFragment content="Back to top" link="/"/>

            </PageContents>
            <article className="mt-4 w-full min-w-0 max-w-6x1 px-1 md:px-6 min-height-[calc(-103px + 100vh)]">
                <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                    </div>
                    <div className="prose prose-documentation max-w-none">
                    <h1 id="" className="break-words">{`MenuManagement`}</h1>
                    <br/>
                    <p>{`ADI menu management uses a loop which reads a `}<InlineCodeSnip>{`Menu`}</InlineCodeSnip>{` object to print the `}<InlineCodeSnip>{`MenuFunction`}</InlineCodeSnip>{` objects available within the current menu. In addition to the list of `}<InlineCodeSnip>{`MenuFunction`}</InlineCodeSnip>{` objects, each menu has a name, as well as some diagnostic information that helps the agent to keep track of their work and ensure that all bookings are submitted successfully.`}</p>
                    <p>{`The user can select a function by entering a command alias into the terminal. These command alias' are shown in menu at all times, so the user can easily see and enter any given command quickly. `}</p>
                    <GradientBorder>
                        <Image className="scale-[100%]" src={adiScreenCap} alt="Image of ADI Menu"/>
                    </GradientBorder>
                    <p>{`In this image, the various methods which are available within the `}<InlineCodeSnip>{`DVALoggedIn()`}</InlineCodeSnip>{` menu can be seen. The currently active menu can be seen on the top left and the mode is visible in the top right. After this, each `}<InlineCodeSnip>{`MenuFunction`}</InlineCodeSnip>{` available to the currently active menu can be seen. In this example, the following `}<InlineCodeSnip>{`MenuFunction`}</InlineCodeSnip>{`s are available: `}<InlineCodeSnip>{`SubmitDVA_Booking`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`ViewDVABookingHistory`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`StopDVA_Service`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`Config`}</InlineCodeSnip>{` and `}<InlineCodeSnip>{`Quit`}</InlineCodeSnip>{`.`}</p>
                    <p>{`Each menu function has a list of valid shortcuts shown next to it, which can be entered into the terminal input by the user to access the method's function.`}</p>
                    <h2 id="menu" className="mb-2">{`Menu`}</h2>
                    <p>{`Here is a breakdown of each available menu, if it were to be understood only by the `}<InlineCodeSnip>{`MenuFunction`}</InlineCodeSnip>{` objects available to it: `}</p>
                    <div className="ml-4 mb-4">
                        <p id="" className={`text-md  dark:border-gray-700 border-gray-400 inline ${fira_code.className}`}>{`StartingMenu()`}<span className={`inline ${radio_canada.className}`}>{` — `}<InlineCodeSnip>{`ChooseTerminalMode`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`Config`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`Quit`}</InlineCodeSnip>{``}</span></p>
                        <br/>
                        <p id="" className={`text-md dark:border-gray-700 border-gray-400 inline ${fira_code.className}`}>{`DVAStarterMenu()`}<span className={`inline ${radio_canada.className}`}>{` — `}<InlineCodeSnip>{`StartDVA_Service`}</InlineCodeSnip>{`,  `}<InlineCodeSnip>{`ChooseTerminalMode`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`Config`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`Quit`}</InlineCodeSnip>{` `}</span></p>
                        <br/>
                        <p id="" className={`text-md dark:border-gray-700 border-gray-400 inline ${fira_code.className}`}>{`DVAActivatedMenu()`}<span className={`inline ${radio_canada.className}`}>{` — `}<InlineCodeSnip>{`LoginDVA_Service`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`StopDVA_Service`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`Config`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`Quit`}</InlineCodeSnip>{`  `}</span></p>
                        <br/>
                        <p id="" className={`text-md dark:border-gray-700 border-gray-400 inline ${fira_code.className}`}>{`DVALoggedIn()`}<span className={`inline ${radio_canada.className}`}>{` — `}<InlineCodeSnip>{`SubmitDVA_Booking`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`ViewDVABookingHistory`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`StopDVA_Service`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`Config`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`Quit`}</InlineCodeSnip>{` `}</span></p>
                        <br/>
                    </div>
                    <p className="">{`Once the user enters text into the console, ADI will parse the entered text using the `}<InlineCodeSnip>{`PerformFunction(object? param, string input)`}</InlineCodeSnip>{` method.`}</p>
                    <div className="py-2">
                        <CustomSynxtaxHighligher language="csharp" code={menuManageSnip_2}/>
                    </div>
                    <p className="">{`The menu has its functions searched for the first method which contains the users input, before invoking that method.`}</p>

                    <h2 id="menu-functions" className="">{`Menu Functions`}</h2>
                    <h2 id="choose-terminal-mode" className="">{`ChooseTerminalMode`}</h2>
                    <h2 id="config" className="">{`Config`}</h2>
                    <h2 id="quit" className="">{`Quit`}</h2>
                    <h2 id="startdva" className="">{`StartDVA_Service`}</h2>
                    <h2 id="logindva" className="">{`LoginDVA_Service`}</h2>
                    <h2 id="submitdva" className="">{`SubmitDVA_Booking`}</h2>
                    <h2 id="stopdva" className="">{`StopDVA_Service`}</h2>
                    <h2 id="viewdva" className="">{`ViewDVABookingHistory`}</h2>
                    
                    {/* Enter content here */}
                    </div>
                    <div className="h-96">{``}</div>
                    <div className="h-96">{``}</div>
            </article>

        </>
    )
}