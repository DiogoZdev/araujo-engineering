import { Outlet } from "react-router-dom";
import "./page.scss";

export function Page() {
    return <main>
        <Outlet />
    </main>
}