import styled from "@emotion/styled";

// Assets
import CloseIcon from '../Icons/CloseIcon';
import LogoIcon from "../Icons/Logo";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
<Wrapper role="navigation" className="animate darkBg" isOpen={sidebarOpen}>
<SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LogoIcon />
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <a href="/accueil" onClick={() => toggleSidebar(!sidebarOpen)} style={{ padding: "10px 15px" }}>
            Accueil
          </a>
        </li>
        <li className="semiBold font15 pointer">
          <a href="/forum" onClick={() => toggleSidebar(!sidebarOpen)} style={{ padding: "10px 15px" }}>
            Forum
          </a>
        </li>
        <li className="semiBold font15 pointer">
          <a href="/Activites" onClick={() => toggleSidebar(!sidebarOpen)} style={{ padding: "10px 15px" }}>
            Activités
          </a>
        </li>
        <li className="semiBold font15 pointer">
          <a href="/contact" onClick={() => toggleSidebar(!sidebarOpen)} style={{ padding: "10px 15px" }}>
            Nous connaître
          </a>
        </li>
        <li className="semiBold font15 pointer">
          <a href="/adherer" onClick={() => toggleSidebar(!sidebarOpen)} style={{ padding: "10px 15px" }}>
            Adhérer
          </a>
        </li>
        <li className="semiBold font15 pointer">
          <a href="/promouvoir" onClick={() => toggleSidebar(!sidebarOpen)} style={{ padding: "10px 15px" }}>
            Promouvoir
          </a>
        </li>
        <li className="semiBold font15 pointer">
          <a href="/apprendre" onClick={() => toggleSidebar(!sidebarOpen)} style={{ padding: "10px 15px" }}>
            Apprendre
          </a>
        </li>
        <li className="semiBold font15 pointer">
          <a href="/enseigner" onClick={() => toggleSidebar(!sidebarOpen)} style={{ padding: "10px 15px" }}>
            Enseigner
          </a>
        </li>
        <li className="semiBold font15 pointer">
          <a href="/divers" onClick={() => toggleSidebar(!sidebarOpen)} style={{ padding: "10px 15px" }}>
            Divers
          </a>
        </li>
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
right: ${(props) => (props.isOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const SidebarHeader = styled.div`
  padding: 20px 0;
`;

const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;

const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
