import { Fira_Code, Fira_Sans_Extra_Condensed } from "next/font/google";


export const fira_code = Fira_Code({subsets: ["latin"], weight: "400"});

export default function InlineCodeSnip({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return(
        <span className={`inline rounded-md text-sm border-gray-300 dark:border-gray-700 border p-0.5 bg-gray-200 dark:bg-gray-800 ${fira_code.className}`}>{children}</span>
    )
}