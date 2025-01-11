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

import {
  AccordionIcon,
  AlertIcon,
  BasicGalleryIcon,
  ButtonIcon,
  ContainerIcon,
  CounterIcon,
  DividerIcon,
  GoogleMapsIcon,
  HeadingIcon,
  HTMLIcon,
  IconBoxIcon,
  IconIcon,
  IconListIcon,
  ImageBoxIcon,
  ImageCarouselIcon,
  ImageIcon,
  InnerSectionIcon,
  LinkInBioIcon,
  MenuAnchorIcon,
  ProgressBarIcon,
  ShortcodeIcon,
  SidebarIcon,
  SocialsIcon,
  SoundCloudIcon,
  SpacerIcon,
  StarRatingIcon,
  TabsIcon,
  TestimonialIcon,
  TextEditorIcon,
  TextPathIcon,
  ToggleIcon,
  VideoIcon,
} from "@/icons";
import styles from "./Sidebar.module.css";

const COMPONENTS = [
  {
    label: "Basic",
    items: [
      {
        label: "Inner Section",
        icon: <InnerSectionIcon />,
      },
      {
        label: "Heading",
        icon: <HeadingIcon />,
      },
      {
        label: "Image",
        icon: <ImageIcon />,
      },
      {
        label: "Text Editor",
        icon: <TextEditorIcon />,
      },
      {
        label: "Video",
        icon: <VideoIcon />,
      },
      {
        label: "Button",
        icon: <ButtonIcon />,
      },
      {
        label: "Star Rating",
        icon: <StarRatingIcon />,
      },
      {
        label: "Divider",
        icon: <DividerIcon />,
      },
      {
        label: "Google Maps",
        icon: <GoogleMapsIcon />,
      },
      {
        label: "Icon",
        icon: <IconIcon />,
      },
      {
        label: "Image Box",
        icon: <ImageBoxIcon />,
      },
      {
        label: "Icon Box",
        icon: <IconBoxIcon />,
      },
      {
        label: "Basic Gallery",
        icon: <BasicGalleryIcon />,
      },
      {
        label: "Image Carousel",
        icon: <ImageCarouselIcon />,
      },
      {
        label: "Icon List",
        icon: <IconListIcon />,
      },
      {
        label: "Counter",
        icon: <CounterIcon />,
      },
      {
        label: "Spacer",
        icon: <SpacerIcon />,
      },
      {
        label: "Testimonial",
        icon: <TestimonialIcon />,
      },
      {
        label: "Tabs",
        icon: <TabsIcon />,
      },
      {
        label: "Accordion",
        icon: <AccordionIcon />,
      },
      {
        label: "Toggle",
        icon: <ToggleIcon />,
      },
      {
        label: "Social Icons",
        icon: <SocialsIcon />,
      },
      {
        label: "Progress Bar",
        icon: <ProgressBarIcon />,
      },
      {
        label: "Sound Cloud",
        icon: <SoundCloudIcon />,
      },
      {
        label: "Shortcode",
        icon: <ShortcodeIcon />,
      },
      {
        label: "HTML",
        icon: <HTMLIcon />,
      },
      {
        label: "Menu Anchor",
        icon: <MenuAnchorIcon />,
      },
      {
        label: "Alert",
        icon: <AlertIcon />,
      },
      {
        label: "Sidebar",
        icon: <SidebarIcon />,
      },
      {
        label: "Text Path",
        icon: <TextPathIcon />,
      },
      {
        label: "Container",
        icon: <ContainerIcon />,
      },
      {
        label: "Link in Bio",
        icon: <LinkInBioIcon />,
      },
    ],
  },
  {
    label: "Advanced",
    items: [],
  },
];

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
        <div>
          {COMPONENTS.map((section, secIdx) => (
            <Accordion defaultExpanded key={secIdx}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <span>{section.label}</span>
              </AccordionSummary>
              <AccordionDetails>
                <ul className={`${styles.list}`}>
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Button
                        className={`${styles.widgetBtn}`}
                        variant="outlined"
                        draggable
                      >
                        <div>{item.icon ?? "Test"}</div>
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
