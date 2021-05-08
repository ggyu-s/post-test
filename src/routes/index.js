import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Main from "../pages";
// import Main from "../pages";
// import ProfileUpdate from "../pages/ProfileUpdate";
import Register from "../pages/Register";

const Wrapper = styled.div`
  justify-content: center;
  height: 100vh;
  align-items: center;
`;
function Routes() {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/register" component={Register} />
        {/* <Route exact path="/profileupdate" component={ProfileUpdate} /> */}
      </Switch>
    </Wrapper>
  );
}

export default Routes;
