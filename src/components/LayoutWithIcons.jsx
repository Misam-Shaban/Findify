import { Outlet } from "react-router-dom";
import NavbarWithIcons from "./NavbarWithIcons";

function LayoutWithIcons() {
  return (
    <div className="app-shell">
      <NavbarWithIcons />
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}

export default LayoutWithIcons;
