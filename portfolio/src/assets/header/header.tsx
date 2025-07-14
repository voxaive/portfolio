import React, { useEffect, useState } from 'react';
import './style.css'

const HeaderBar: React.FC = () => {

  window.addEventListener('scroll', () => {
      if(window.scrollY > 20){
        document.querySelector('Header')?.classList.add('colorMenuScroll')
      }else{
        document.querySelector('Header')?.classList.remove('colorMenuScroll')
      }
    });
  return (
    <header>
        <div className='Header-bar'>
            <img className='logo-image' src="" alt="" />
            <ul>
                <li><a href="#about-me">SOBRE MI</a></li>
                <li><a href="#experiencie">EXPERIENCIA LABORAL</a></li>
                <li><a href="#projects">PROYECTOS</a></li>
                <li><a href="#contact">CONTACTAR</a></li>
            </ul>
        </div>
    </header>
  );
};

export default HeaderBar;