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
  AuthorBoxIcon,
  BasicGalleryIcon,
  BlockquoteIcon,
  BreadcrumbsIcon,
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
  FeaturedImageIcon,
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
  LoopGridIcon,
  LottieWidgetIcon,
  MediaCarouselIcon,
  MegaMenuIcon,
  MenuAnchorIcon,
  NavMenuIcon,
  NestedCarouselIcon,
  OffCanvasIcon,
  PageTitleIcon,
  PayPalButtonIcon,
  PortfolioIcon,
  PostCommentsIcon,
  PostContentIcon,
  PostExcerptIcon,
  PostInfoIcon,
  PostNavigationIcon,
  PostsIcon,
  PostTitleIcon,
  PriceListIcon,
  PriceTableIcon,
  ProgressBarIcon,
  ProgressTrackerIcon,
  ReviewsIcon,
  SearchBarIcon,
  ShareButtonsIcon,
  ShortcodeIcon,
  SidebarIcon,
  SiteLogoIcon,
  SitemapIcon,
  SiteTitleIcon,
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
        icon: <PostTitleIcon />,
      },
      {
        label: "Post Excerpt",
        icon: <PostExcerptIcon />,
      },
      {
        label: "Post Content",
        icon: <PostContentIcon />,
      },
      {
        label: "Featured Image",
        icon: <FeaturedImageIcon />,
      },
      {
        label: "Author Box",
        icon: <AuthorBoxIcon />,
      },
      {
        label: "Post Comments",
        icon: <PostCommentsIcon />,
      },
      {
        label: "Post Navigation",
        icon: <PostNavigationIcon />,
      },
      {
        label: "Post Info",
        icon: <PostInfoIcon />,
      },
      {
        label: "Site Logo",
        icon: <SiteLogoIcon />,
      },
      {
        label: "Site Title",
        icon: <SiteTitleIcon />,
      },
      {
        label: "Page Title",
        icon: <PageTitleIcon />,
      },
      {
        label: "Search Bar",
        icon: <SearchBarIcon />,
      },
      {
        label: "Breadcrumbs",
        icon: <BreadcrumbsIcon />,
      },
      {
        label: "Sitemap",
        icon: <SitemapIcon />,
      },
      {
        label: "Loop Grid",
        icon: <LoopGridIcon />,
      },
    ],
  },
];

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
          {COMPONENTS.map((section, secIdx) => (
            <Accordion key={secIdx} defaultExpanded sx={muiStyles.accordion}>
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
                        variant="outlined"
                        draggable
                        sx={muiStyles.widgetBtn}
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
