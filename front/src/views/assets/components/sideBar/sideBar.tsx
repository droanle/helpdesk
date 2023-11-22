import React, { useEffect, useState } from "react";
import "./sideBar.scss";
import {
  UserCircle,
  Briefcase,
  Ticket,
  DiamondsFour,
  List,
  MagnifyingGlass,
  SignOut,
  SquaresFour,
  Users,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import sessionHook from "../../../../api/hooks/session";

const Sidebar: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    nivel: null
  })

  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search");

    sessionHook()
      .then((data: any) => {
        setUserInfo({
          name: data.name,
          nivel: data.nivel
        });
      }).catch((error) => {
        console.log(error);
      });

    const menuBtnChange = () => {
      if (sidebar?.classList.contains("open") && closeBtn) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else if (closeBtn) {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    };

    const handleSidebarToggle = () => {
      if (sidebar) {
        sidebar.classList.toggle("open");
        menuBtnChange();
      }
    };

    if (closeBtn) {
      closeBtn.addEventListener("click", handleSidebarToggle);
    }

    if (searchBtn) {
      searchBtn.addEventListener("click", handleSidebarToggle);
    }

    return () => {
      if (closeBtn) {
        closeBtn.removeEventListener("click", handleSidebarToggle);
      }

      if (searchBtn) {
        searchBtn.removeEventListener("click", handleSidebarToggle);
      }
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="logo_details">
        <Link to="/Home">
          <i className="bx icons icon">
            <DiamondsFour size={32} weight="duotone" />
          </i>
        </Link>

        <div className="logo_name">HelpDesk</div>
        <i className="bx icons bx-menu" id="btn">
          <List size={24} weight="duotone" />
        </i>
      </div>
      <ul className="nav_list">
        <li>
          <i className="bx bx-search icons">
            <MagnifyingGlass size={24} weight="duotone" />
          </i>
          <input type="text" placeholder="Procurar..." />
          <span className="tooltip">Procurar</span>
        </li>
        <li>
          <Link to="/Home">
            <a href="#">
              <i className="bx icons">
                <SquaresFour size={24} weight="duotone" />
              </i>
              <span className="links_name">Dashboard</span>
            </a>
          </Link>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <Link to="/Usuarios">
            <a href="#">
              <i className="bx icons">
                <Users size={24} weight="duotone" />
              </i>
              <span className="links_name">Usuário</span>
            </a>
          </Link>
          <span className="tooltip">Usuário</span>
        </li>
        <li>
          <Link to="/Cliente">
            <a href="#">
              <i className="bx icons">
                <UserCircle size={24} weight="duotone" />
              </i>
              <span className="links_name">Cliente</span>
            </a>
          </Link>
          <span className="tooltip">Cliente</span>
        </li>
        <li>
          <Link to="/Setores">
            <a href="#">
              <i className="bx icons">
                <Briefcase size={24} weight="duotone" />
              </i>
              <span className="links_name">Setores</span>
            </a>
          </Link>
          <span className="tooltip">Setores</span>
        </li>
        <li>
          <Link to="/Ticket">
            <a href="#">
              <i className="bx icons">
                <Ticket size={24} weight="duotone" />
              </i>
              <span className="links_name">Ticket</span>
            </a>
          </Link>
          <span className="tooltip">Ticket</span>
        </li>
        <li className="profile">
          <Link to="/" className="logout">
            <div className="profile_details">
              <div className="name">{userInfo.name}</div>
              <div className="job">{userInfo.nivel == 0 ? "Admin" : "Usuario"}</div>
            </div>
            <i className="icons_logout" id="log_out">
              <SignOut size={24} weight="duotone" />
            </i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
