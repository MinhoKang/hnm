import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SideMenu from './SideMenu';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const goToLogin = () => {
    authenticate ? setAuthenticate(false) : navigate('/login');
  };
  const search = (event) => {
    if (event.key === 'Enter') {
      let keryword = event.target.value;
      navigate(`/?q=${keryword}`);
      console.log(keryword);
    }
  };
  const goToHome = () => {
    navigate('/');
  };
  const menuList = [
    '여성',
    'Devided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M Home',
    'Sale',
    '지속가능성',
  ];
  // const showMenu = () => {
  //   const sideMenu = document.querySelector('.sideMenu-parent');
  //   const sideMenuBtn = document.querySelector('.side-menu-btn');
  //   sideMenuBtn.addEventListener('click', () => {
  //     sideMenu.classList.remove('.close');
  //   });
  // };
  return (
    <div>
      <SideMenu
        menuList={menuList}
        isOpen={isSideMenuOpen}
        onClose={() => setSideMenuOpen(false)}
      />
      <div className="header">
        <div className="header-left">
          <FontAwesomeIcon
            icon={faBars}
            className="side-menu-btn"
            onClick={() => {
              setSideMenuOpen(true);
            }}
          />
          <div className="logo-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png"
              alt=""
              className="logo-mobile"
            />
          </div>
        </div>

        <div className="header-right">
          <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div>{authenticate ? '로그아웃' : '로그인'}</div>
          </div>
        </div>
      </div>
      <div className="nav-section">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png"
          alt=""
          srcset=""
          width={100}
          onClick={goToHome}
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="제품검색" onKeyPress={(evnet) => search(evnet)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
