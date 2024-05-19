import { FunctionComponent, ReactNode } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Sidebar } from "../../components/Sidebar/Sidebar";

type SideMeuLayoutProps = {
    children?: ReactNode | Array<ReactNode> | string
}

export const SidebarLayout : FunctionComponent<SideMeuLayoutProps> = ({children}) => {
    return (
        <main className="min-h-screen grid grid-cols-12 gap-4">
        <Sidebar/>
        <section  className="col-span-12 md:col-span-9 transition-all duration-150 ease-in-out lg:col-span-10 bg-white p-4 shadow-lg max-h-screen overflow-y-scroll">
        <Navbar/>
        {children}
        </section>
       
        </main>
    )
}