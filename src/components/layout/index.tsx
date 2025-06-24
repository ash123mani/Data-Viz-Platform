import { Outlet } from "react-router";
import { Main } from "./style.tsx";

export default function Layout() {
  return (
    <Main>
      <h1>Layouts</h1>
      {/* will either be <Home/> or <Settings/> */}
      <Outlet />
    </Main>
  );
}
