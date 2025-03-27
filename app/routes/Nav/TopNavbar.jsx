import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../Icons/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(0); // valeur par défaut

  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => setY(window.scrollY);
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner>
          <a href="/accueil">
            <LogoIcon />
          </a>
          <BurderWrapper onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper>
            <li><a href="/accueil">Accueil</a></li>
            <li><a href="/Forum">Forum</a></li>
            <li><a href="/Activités">Activités</a></li>
            <li><a href="/Contact">Nous connaître</a></li>
            <li><a href="/adherer">Adhérer</a></li>
            <li><a href="/Promouvoir">Promouvoir</a></li>
            <li><a href="/apprendre">Apprendre</a></li>
            <li><a href="/enseigner">Enseigner</a></li>
            <li><a href="/divers">Divers</a></li>
          </UlWrapper>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: white;
  transition: height 0.3s ease;
`;

const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const BurderWrapper = styled.button`
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  display: none;

  @media (max-width: 760px) {
    display: block;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-left: 15px;

    a {
      text-decoration: none;
      padding: 10px 15px;
      font-weight: 600;
      font-size: 15px;
      color: black;
    }
  }

  @media (max-width: 760px) {
    display: none;
  }
`;
