import { Menus } from "../utils";
import Logo from "../assets/2.png";
import DesktopMenu from "../components/DesktopMenu";
import MobMenu from "../components/MobMenu";
import Kontak from "../pages/Kontak";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="h-16 text-[15px] fixed inset-0 flex-center bg-[#ffffff] shadow-lg">
        <nav className=" px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          <div className="flex-center gap-x-3 z-[999] relative">
            <Link to={"/"}>
              <img src={Logo} alt="" className="size-16" />
            </Link>
          </div>

          <ul className="gap-x-5 lg:flex-center hidden text-black ">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          <div className="flex-center gap-x-5">
            <button
              aria-label="sign-in"
              className="bg-white/5 text-black z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center hover:bg-[#55B3A4] hover:text-white"
            >
              <Link to={"/kontak"}>Contact</Link>
            </button>
            <div className="lg:hidden">
              <MobMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
