import React from "react";
import searchable from "../../images/searchable.png";
import {
  Loading,
  Header,
  NavContainer,
  NavMain,
  NavLogo,
  Logo,
  NavTitle,
} from "./Navigation.styles";

function Navigation() {
  return (
    <div>
      {1 === 0 ? (
        <Loading></Loading>
      ) : (
        <Header>
          <NavContainer>
            <NavMain>
              <NavLogo to="/login">
                <Logo alt={"Hackathon"} src={searchable} />
              </NavLogo>
              <NavTitle to="/not-real-page">
                Searchable Enterprise Directory
              </NavTitle>
            </NavMain>
          </NavContainer>
        </Header>
      )}
    </div>
  );
}

export default Navigation;
