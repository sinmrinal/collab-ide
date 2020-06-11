import React from "react";
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from "carbon-components-react/lib/components/UIShell";
import { Link } from "react-router-dom";
import Collaborate20 from "@carbon/icons-react/lib/collaborate/20";
import UserAvatar20 from "@carbon/icons-react/lib/user--avatar/20";
import SettingsAdjust20 from "@carbon/icons-react/lib/settings--adjust/20"



const MainHeader = () => (
  <Header aria-label="Collab IDE">
    <SkipToContent />
    <HeaderName element={Link} to="/" prefix="Collab">
      IDE
    </HeaderName>
    <HeaderNavigation aria-label="Collab IDE">
      <HeaderMenuItem element={Link} to="/about">About</HeaderMenuItem>
    </HeaderNavigation>
    <HeaderGlobalBar>
  <HeaderGlobalAction aria-label="Collaborate">
    <Collaborate20 />
  </HeaderGlobalAction>
  <HeaderGlobalAction aria-label="User Avatar">
    <UserAvatar20 />
  </HeaderGlobalAction>
  <HeaderGlobalAction aria-label="Settings Adjust">
    <SettingsAdjust20 />
  </HeaderGlobalAction>
</HeaderGlobalBar>
  </Header>
);
export default MainHeader;