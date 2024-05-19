import React, { FunctionComponent, ReactNode } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Sidebar } from "../../components/Sidebar/Sidebar";

type SideMeuLayoutProps = {
    children?: ReactNode | Array<ReactNode> | string
}

export const SidebarLayout : FunctionComponent<SideMeuLayoutProps> = ({children}) => {
    return (
        <main className="display: grid grid-cols-12 gap-4">
       
        <Sidebar/>
        <section className="col-span-10 max-h-screen h-full overflow-y-scroll pb-20">
        <Navbar/>
        {children}
        </section>
        </main>
    )
}