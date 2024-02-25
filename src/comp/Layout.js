import { Outlet } from "react-router-dom"
import {Header} from "./Header"
import {Footer} from "./Footer"
import { Suspense } from "react"

export  const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    )
}
