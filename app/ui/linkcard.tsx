import Link from "next/link";

export default function LinkCard(props: {link: string, name: string, children: React.ReactNode}){
    return (
        <>
            {/* <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2"> */}
                <Link href={props.link} className="bg-gray-0 border-[--ds-gray-300] shadow border group block space-y-2 rounded-md p-6 pt-5 transition-shadow
                duration-300 hover:shadow-lg ">
                    <h3 className="group-hover:text-gray-1000 truncate text-lg font-medium leading-snug">
                        {props.name}
                    </h3>
                    <div className="line-clamp-3 text-sm font-normal text-gray-900 dark:text-gray-100">
                        {props.children}
                    </div>
                </Link>
            {/*</div>*/}
        </>
    )

}