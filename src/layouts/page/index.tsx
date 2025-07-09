import { Outlet } from "react-router-dom";
import "./page.scss";

export function Page() {
    return <>
        <div>
            <Outlet />
        </div>
    </>
}