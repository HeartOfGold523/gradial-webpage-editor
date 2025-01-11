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
  AnimatedHeadlineIcon,
  BasicGalleryIcon,
  BlockquoteIcon,
  ButtonIcon,
  CodeHighlightIcon,
  ContainerIcon,
  CountdownIcon,
  CounterIcon,
  CTAIcon,
  DividerIcon,
  FacebookButtonIcon,
  FacebookCommentsIcon,
  FacebookEmbedIcon,
  FacebookPageIcon,
  FlipBoxIcon,
  FormIcon,
  GalleryIcon,
  GoogleMapsIcon,
  HeadingIcon,
  HotspotIcon,
  HTMLIcon,
  IconBoxIcon,
  IconIcon,
  IconListIcon,
  ImageBoxIcon,
  ImageCarouselIcon,
  ImageIcon,
  InnerSectionIcon,
  LinkInBioIcon,
  LoginIcon,
  LoopCarouselIcon,
  LottieWidgetIcon,
  MediaCarouselIcon,
  MegaMenuIcon,
  MenuAnchorIcon,
  NavMenuIcon,
  NestedCarouselIcon,
  OffCanvasIcon,
  PayPalButtonIcon,
  PortfolioIcon,
  PostsIcon,
  PriceListIcon,
  PriceTableIcon,
  ProgressBarIcon,
  ProgressTrackerIcon,
  ReviewsIcon,
  ShareButtonsIcon,
  ShortcodeIcon,
  SidebarIcon,
  SlidesIcon,
  SocialsIcon,
  SoundCloudIcon,
  SpacerIcon,
  StarRatingIcon,
  StripeButtonIcon,
  TableOfContentsIcon,
  TabsIcon,
  TemplateIcon,
  TestimonialCarouselIcon,
  TestimonialIcon,
  TextEditorIcon,
  TextPathIcon,
  ToggleIcon,
  VideoIcon,
  VideoPlaylistIcon,
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
    items: [
      {
        label: "Posts",
        icon: <PostsIcon />,
      },
      {
        label: "Share Buttons",
        icon: <ShareButtonsIcon />,
      },
      {
        label: "Portfolio",
        icon: <PortfolioIcon />,
      },
      {
        label: "Slides",
        icon: <SlidesIcon />,
      },
      {
        label: "Form",
        icon: <FormIcon />,
      },
      {
        label: "Login",
        icon: <LoginIcon />,
      },
      {
        label: "Nav Menu",
        icon: <NavMenuIcon />,
      },
      {
        label: "Animated Headline",
        icon: <AnimatedHeadlineIcon />,
      },
      {
        label: "Price Table",
        icon: <PriceTableIcon />,
      },
      {
        label: "Price List",
        icon: <PriceListIcon />,
      },
      {
        label: "Gallery",
        icon: <GalleryIcon />,
      },
      {
        label: "Flip Box",
        icon: <FlipBoxIcon />,
      },
      {
        label: "Call to Action",
        icon: <CTAIcon />,
      },
      {
        label: "Media Carousel",
        icon: <MediaCarouselIcon />,
      },
      {
        label: "Testimonial Carousel",
        icon: <TestimonialCarouselIcon />,
      },
      {
        label: "Nested Carousel",
        icon: <NestedCarouselIcon />,
      },
      {
        label: "Loop Carousel",
        icon: <LoopCarouselIcon />,
      },
      {
        label: "Table of Contents",
        icon: <TableOfContentsIcon />,
      },
      {
        label: "Countdown",
        icon: <CountdownIcon />,
      },
      {
        label: "Facebook Page",
        icon: <FacebookPageIcon />,
      },
      {
        label: "Blockquote",
        icon: <BlockquoteIcon />,
      },
      {
        label: "Template",
        icon: <TemplateIcon />,
      },
      {
        label: "Reviews",
        icon: <ReviewsIcon />,
      },
      {
        label: "Facebook Button",
        icon: <FacebookButtonIcon />,
      },
      {
        label: "Facebook Embed",
        icon: <FacebookEmbedIcon />,
      },
      {
        label: "Facebook Comments",
        icon: <FacebookCommentsIcon />,
      },
      {
        label: "PayPal Button",
        icon: <PayPalButtonIcon />,
      },
      {
        label: "Lottie Widget",
        icon: <LottieWidgetIcon />,
      },
      {
        label: "Code Highlight",
        icon: <CodeHighlightIcon />,
      },
      {
        label: "Video Playlist",
        icon: <VideoPlaylistIcon />,
      },
      {
        label: "Hotspot",
        icon: <HotspotIcon />,
      },
      {
        label: "Progress Tracker",
        icon: <ProgressTrackerIcon />,
      },
      {
        label: "Stripe Button",
        icon: <StripeButtonIcon />,
      },
      {
        label: "Mega Menu",
        icon: <MegaMenuIcon />,
      },
      {
        label: "Off-Canvas",
        icon: <OffCanvasIcon />,
      },
    ],
  },
  {
    label: "Theme",
    items: [
      {
        label: "Post Title",
        icon: null,
      },
      {
        label: "Post Excerpt",
        icon: null,
      },
      {
        label: "Post Content",
        icon: null,
      },
      {
        label: "Featured Image",
        icon: null,
      },
      {
        label: "Author Box",
        icon: null,
      },
      {
        label: "Post Comments",
        icon: null,
      },
      {
        label: "Post Navigation",
        icon: null,
      },
      {
        label: "Post Info",
        icon: null,
      },
      {
        label: "Site Logo",
        icon: null,
      },
      {
        label: "Site Title",
        icon: null,
      },
      {
        label: "Page Title",
        icon: null,
      },
      {
        label: "Search Bar",
        icon: null,
      },
      {
        label: "Breadcrumbs",
        icon: null,
      },
      {
        label: "Sitemap",
        icon: null,
      },
      {
        label: "Loop Grid",
        icon: null,
      },
    ],
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
