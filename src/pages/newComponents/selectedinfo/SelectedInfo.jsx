import React from "react";

import "./SelectedInfo.css";

function SelectedInfo({ selected }) {
  const redirects = [...selected?.redirects];

  return (
    <div className="selectedinfo__Container">
      <div className="subheader__container">
        <h4 className="subheader">{selected?.name}</h4>
      </div>
      <div className="selected__infoOuterContainer">
        <div className="left__bar"></div>
        <div className="selected__infoContainer">
          <p className="selected__info">{selected?.info}</p>
        </div>
        <div>
          <ul className="ul__redirects">
            {redirects.map((redirect) => {
              return (
                <li key={redirect.name}>
                  <a
                    className="links project"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={redirect?.url}>
                    {redirect?.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SelectedInfo;
