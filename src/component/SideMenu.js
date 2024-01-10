import React from 'react';

const SideMenu = ({ menuList, isOpen, onClose }) => {
  //   const close = () => {
  //     const sideMenu = document.querySelector('.side-menu');
  //     const closeMenu = document.querySelector('.close-menu');
  //     closeMenu.addEventListener('click', () => {
  //       sideMenu.classList.add('close');
  //     });
  const close = () => {
    onClose();
  };
  return (
    <div className={`side-menu ${isOpen ? 'show' : 'close'}`}>
      <div className="close-menu" onClick={close}>
        X
      </div>
      <ul className="side-menu-list">
        {menuList.map((item) => (
          <li className="side-menu-item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
