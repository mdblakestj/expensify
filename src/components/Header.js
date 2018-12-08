import React from 'react';


const Header = (props) => (

      <div className="header">
        <h1 className="header__title">{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>

  )

Header.defaultProps = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
  };


export default Header;
