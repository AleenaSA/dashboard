import React from "react";
import Container from "@material-ui/core/Container";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Grid from "@material-ui/core/Grid"

type MenuItems = {
  title: string;
  to: string;
};

type Props = {
  menuItems: MenuItems[];
  copyright: string;
  loggerEnabled: boolean;
  enableLogger: () => void;
  disableLogger: () => void;
  exportLogs: () => void;
};

const MainFooter = ({
  menuItems,
  copyright,
  loggerEnabled,
  enableLogger,
  disableLogger,
  exportLogs,
}: Props) => (
  <footer className="main-footer d-flex p-2 px-3">
    <Container>
      <Grid>
        <BottomNavigation>
          {menuItems.map((item, idx) => (
            <a key={idx} href={item.to} className="nav-link">
              {item.title}
            </a>
          ))}
          {loggerEnabled ? (
            <>
              <span
                className="nav-link text-warning cursor-pointer"
                onClick={disableLogger}
              >
                Exit Debug Mode
              </span>
              <span
                className="nav-link text-warning cursor-pointer"
                onClick={exportLogs}
              >
                Export Debug Data
              </span>
            </>
          ) : (
            <span
              className="nav-link text-warning cursor-pointer"
              onClick={enableLogger}
            >
              Debug Mode
            </span>
          )}
        </BottomNavigation>
        <span className="copyright ml-auto my-auto mr-2">{copyright}</span>
      </Grid>
    </Container>
  </footer>
);

MainFooter.defaultProps = {
  contained: false,
  copyright: "Copyright © Jina AI Limited",
  menuItems: [
    {
      title: "Home",
      to: "https://jina.ai",
    },
    {
      title: "Open Source",
      to: "https://opensource.jina.ai",
    },
    {
      title: "Learn",
      to: "https://docs.jina.ai",
    },
    {
      title: "Community",
      to: "https://twitter.com/JinaAI_",
    },
    {
      title: "Jobs",
      to: "https://www.linkedin.com/company/jinaai/jobs/",
    },
    {
      title: "Privacy & Terms",
      to: "https://github.com/jina-ai/legal",
    },
  ],
};

export default MainFooter;
