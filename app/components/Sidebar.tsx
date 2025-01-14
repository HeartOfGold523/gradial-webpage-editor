import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingsIcon from "@mui/icons-material/Settings";
import HistoryIcon from "@mui/icons-material/History";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";

import { WIDGETS } from "@/constants";
import styles from "./Sidebar.module.css";

const muiStyles = {
  iconBtn: {
    "&:hover": {
      color: "rgba(var(--white-rgb), 0.75)",
    },
  },
  headerBtnGroup: {
    width: "100%",
    height: "100%",
  },
  headerBtn: {
    flex: 1,
    border: 0,
    borderRadius: "0",
    bgcolor: "rgb(var(--white-rgb))",
    color: "rgb(var(--black-rgb))",
    "&.MuiButtonGroup-firstButton": {
      borderRight: 0,
      borderBottom: "3px solid rgb(var(--red-rgb))",
    },
    "&:hover": {
      color: "rgb(var(--light-blue-rgb))",
      borderColor: "rgb(var(--light-blue-rgb))",
    },
  },
  searchInput: {
    mb: "1rem",
    width: "100%",
    bgcolor: "rgb(var(--white-rgb))",
    "&:hover": {
      bgcolor: "rgba(var(--white-rgb), 0.5)",
    },
    "&.Mui-focused": {
      bgcolor: "rgba(var(--white-rgb), 0.5)",
    },
    "& .MuiInputBase-input.MuiFilledInput-input": {
      py: 1,
    },
  },
  accordion: {
    m: 0,
    mb: 3,
    bgcolor: "transparent",
    "&.Mui-expanded": {
      m: 0,
      mb: 3,
    },
  },
  widgetBtn: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    padding: "2rem 0.5rem",
    gap: "1rem",
    color: "rgb(var(--black-rgb))",
    borderColor: "currentColor",
    bgcolor: "rgb(var(--white-rgb))",
    textTransform: "capitalize",
    "&:hover": {
      color: "rgb(var(--light-blue-rgb))",
    },
  },
};

export default function Sidebar() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.header}`}>
        <div className={`${styles.top}`}>
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
        <div className={`${styles.bot}`}>
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Switch component type"
            sx={muiStyles.headerBtnGroup}
          >
            <Button sx={muiStyles.headerBtn}>Elements</Button>
            <Button sx={muiStyles.headerBtn}>Global</Button>
          </ButtonGroup>
        </div>
      </div>
      <div className={`${styles.main}`}>
        <div>
          <FilledInput
            size="small"
            sx={muiStyles.searchInput}
            placeholder="Search Widgets"
            inputProps={{
              "aria-label": "Search Widgets",
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  color="inherit"
                  aria-label="Search"
                  edge="end"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
        <div>
          {WIDGETS.map((section, secIdx) => (
            <Accordion key={secIdx} defaultExpanded sx={muiStyles.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${secIdx}-content`}
                id={`panel${secIdx}-header`}
              >
                <span>{section.label}</span>
              </AccordionSummary>
              <AccordionDetails>
                <ul className={`${styles.list}`}>
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Button
                        variant="outlined"
                        draggable
                        sx={muiStyles.widgetBtn}
                      >
                        <div>{item.icon}</div>
                        {item.label}
                      </Button>
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
      <div className={`${styles.footer}`}>
        <div className={`${styles.left}`}>
          <IconButton
            size="small"
            color="inherit"
            aria-label="Page settings"
            edge="start"
            sx={muiStyles.iconBtn}
          >
            <SettingsIcon />
          </IconButton>
          <IconButton
            size="small"
            color="inherit"
            aria-label="Revision history"
            edge="start"
            sx={muiStyles.iconBtn}
          >
            <HistoryIcon />
          </IconButton>
          <IconButton
            size="small"
            color="inherit"
            aria-label="Undo changes"
            edge="start"
            sx={muiStyles.iconBtn}
          >
            <UndoIcon />
          </IconButton>
          <IconButton
            size="small"
            color="inherit"
            aria-label="Redo changes"
            edge="start"
            sx={muiStyles.iconBtn}
          >
            <RedoIcon />
          </IconButton>
        </div>
        <div className={`${styles.right}`}>
          <Button
            variant="contained"
            color="success"
            sx={{ fontWeight: "bold" }}
          >
            Update
          </Button>
        </div>
      </div>
    </div>
  );
}
