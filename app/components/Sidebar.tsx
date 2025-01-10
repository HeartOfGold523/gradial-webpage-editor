import {
  Button,
  ButtonGroup,
  FilledInput,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import HistoryIcon from "@mui/icons-material/History";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";

import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.header}`}>
        <div className={`${styles.top}`}>
          <IconButton color="inherit" aria-label="Toggle sidebar" edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Webpage Editor</Typography>
          <IconButton
            color="inherit"
            aria-label="Open more features"
            edge="end"
          >
            <AppsIcon />
          </IconButton>
        </div>
        <div className={`${styles.bot}`}>
          <ButtonGroup
            className={`${styles.buttonGroup}`}
            disableElevation
            variant="contained"
            aria-label="Switch component type"
          >
            <Button>Elements</Button>
            <Button>Global</Button>
          </ButtonGroup>
        </div>
      </div>
      <div className={`${styles.main}`}>
        <div>
          <FilledInput
            className={`${styles.searchInput}`}
            size="small"
            placeholder="Search Widgets"
            inputProps={{
              "aria-label": "Search Widgets",
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton color="inherit" aria-label="Search" edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
      </div>
      <div className={`${styles.footer}`}>
        <IconButton
          color="inherit"
          title="Page settings"
          aria-label="Page settings"
          edge="start"
        >
          <SettingsIcon />
        </IconButton>
        <IconButton
          color="inherit"
          title="Revision history"
          aria-label="Revision history"
          edge="start"
        >
          <HistoryIcon />
        </IconButton>
        <IconButton
          color="inherit"
          title="Undo changes"
          aria-label="Undo changes"
          edge="start"
        >
          <UndoIcon />
        </IconButton>
        <IconButton
          color="inherit"
          title="Redo changes"
          aria-label="Redo changes"
          edge="start"
        >
          <RedoIcon />
        </IconButton>
      </div>
    </div>
  );
}
