import { Menu } from "lucide-react";
import Example from "./ui/menu";
import Dropdown from "./ui/menu";
import Bounded from "./common/bounded";

export default function Nav() {
  return (
    <header className="z-[999]">
      <Bounded c>
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">K&K Associates</div>
          <div className="relative md:hidden">
            <Example />
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Gallery</li>
              <li>Contact</li>
              <li>
                <button>Employee Login</button>
              </li>
            </ul>
          </nav>
        </div>
      </Bounded>
    </header>
  );
}
