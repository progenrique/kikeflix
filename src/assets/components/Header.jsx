import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

const Header = ({ setSearch, searchPeticion, search }) => {
  const handleClick = (e) => {
    if (e.target.matches("button")) searchPeticion();
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => e.preventDefault();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchPeticion();
    }
  };

  return (
    <header className="bg-secondary-subtle header">
      <nav className="container-sm header-nav">
        <Link to="/">
          <img src="./public/logo.svg" alt="Logo" />
        </Link>

        <form onSubmit={handleSubmit} className="input-group  header-form">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={handleChange}
            onKeyUp={handleKeyDown}
            value={search}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={handleClick}>
            Buscar
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Header;
