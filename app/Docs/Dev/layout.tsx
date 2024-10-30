import Link from "next/link";
import Chapter from "../../ui/chapter";
import ChapterSection from "../../ui/chaptersection";
import LinkCard from "../../ui/linkcard";
import SectionPageLink from "../../ui/sectionpagelink";
import SyntaxHighlighter from "react-syntax-highlighter";
import { materialDark, materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";
import PageContents, { CSFragment } from "../../ui/pagecontents";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    let codeString = 
    `const userNavigation: UserNavigation[] = [
      {name: 'Your Profile', href: '#'}, {name: 'Your Profile', href: '#'}, {name: 'Your Profile', href: '#'}, {name: 'Your Profile', href: '#'},
      {name: 'Settings', href: '#' },
      {name: 'Sign out', href: '#'},
    ]`;

    return (
      <>
        {children}
      </>
    )
  }