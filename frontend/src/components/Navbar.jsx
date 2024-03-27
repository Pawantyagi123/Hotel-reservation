import { useState } from "react";
import { Link } from "react-scroll";
import Hamburger from 'hamburger-react'
import { data } from "../restApi.json";
export default function Navbar() {
  const [show, setShow] = useState(false);
  const [isOpen, setOpen] = useState(false)
  return (
    <>
    <nav>
      <div className="logo">Food Point</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {data[0].navbarLinks.map((element) => {
            return (
              <Link
                to={element.link}
                key={element.id}
                spy={true}
                smooth={true}
                duration={500}
              >
                {element.title}
              </Link>
            );
          })}
        </div>
        <button className="menuBtn">OUR MENU</button>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </nav>
    </>
  );
}
