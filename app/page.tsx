import { IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";

import { PageEditor, Sidebar } from "@/components";
import styles from "./page.module.css";

const muiStyles = {
  iconBtn: {
    "&:hover": {
      color: "rgba(var(--white-rgb), 0.75)",
    },
  },
};

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <div className={`${styles.topBar}`}>
        <IconButton
          size="small"
          color="inherit"
          aria-label="Toggle sidebar"
          edge="start"
          sx={muiStyles.iconBtn}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Webpage Editor</Typography>
        <IconButton
          size="small"
          color="inherit"
          aria-label="Open more features"
          edge="end"
          sx={muiStyles.iconBtn}
        >
          <AppsIcon />
        </IconButton>
      </div>
      <div className={`${styles.sidebar}`}>
        <Sidebar />
      </div>
      <div className={`${styles.pageEditor}`}>
        <PageEditor />
      </div>
    </main>
  );
}
