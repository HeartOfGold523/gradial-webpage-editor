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
import { WidgetSection } from "@/types";

const ICONSIZE = 30;

export const WIDGETS: WidgetSection[] = [
  {
    label: "Basic",
    items: [
      {
        label: "Inner Section",
        icon: InnerSectionIcon({ size: ICONSIZE }),
      },
      {
        label: "Heading",
        icon: HeadingIcon({ size: ICONSIZE }),
      },
      {
        label: "Image",
        icon: ImageIcon({ size: ICONSIZE }),
      },
      {
        label: "Text Editor",
        icon: TextEditorIcon({ size: ICONSIZE }),
      },
      {
        label: "Video",
        icon: VideoIcon({ size: ICONSIZE }),
      },
      {
        label: "Button",
        icon: ButtonIcon({ size: ICONSIZE }),
      },
      {
        label: "Star Rating",
        icon: StarRatingIcon({ size: ICONSIZE }),
      },
      {
        label: "Divider",
        icon: DividerIcon({ size: ICONSIZE }),
      },
      {
        label: "Google Maps",
        icon: GoogleMapsIcon({ size: ICONSIZE }),
      },
      {
        label: "Icon",
        icon: IconIcon({ size: ICONSIZE }),
      },
      {
        label: "Image Box",
        icon: ImageBoxIcon({ size: ICONSIZE }),
      },
      {
        label: "Icon Box",
        icon: IconBoxIcon({ size: ICONSIZE }),
      },
      {
        label: "Basic Gallery",
        icon: BasicGalleryIcon({ size: ICONSIZE }),
      },
      {
        label: "Image Carousel",
        icon: ImageCarouselIcon({ size: ICONSIZE }),
      },
      {
        label: "Icon List",
        icon: IconListIcon({ size: ICONSIZE }),
      },
      {
        label: "Counter",
        icon: CounterIcon({ size: ICONSIZE }),
      },
      {
        label: "Spacer",
        icon: SpacerIcon({ size: ICONSIZE }),
      },
      {
        label: "Testimonial",
        icon: TestimonialIcon({ size: ICONSIZE }),
      },
      {
        label: "Tabs",
        icon: TabsIcon({ size: ICONSIZE }),
      },
      {
        label: "Accordion",
        icon: AccordionIcon({ size: ICONSIZE }),
      },
      {
        label: "Toggle",
        icon: ToggleIcon({ size: ICONSIZE }),
      },
      {
        label: "Social Icons",
        icon: SocialsIcon({ size: ICONSIZE }),
      },
      {
        label: "Progress Bar",
        icon: ProgressBarIcon({ size: ICONSIZE }),
      },
      {
        label: "Sound Cloud",
        icon: SoundCloudIcon({ size: ICONSIZE }),
      },
      {
        label: "Shortcode",
        icon: ShortcodeIcon({ size: ICONSIZE }),
      },
      {
        label: "HTML",
        icon: HTMLIcon({ size: ICONSIZE }),
      },
      {
        label: "Menu Anchor",
        icon: MenuAnchorIcon({ size: ICONSIZE }),
      },
      {
        label: "Alert",
        icon: AlertIcon({ size: ICONSIZE }),
      },
      {
        label: "Sidebar",
        icon: SidebarIcon({ size: ICONSIZE }),
      },
      {
        label: "Text Path",
        icon: TextPathIcon({ size: ICONSIZE }),
      },
      {
        label: "Container",
        icon: ContainerIcon({ size: ICONSIZE }),
      },
      {
        label: "Link in Bio",
        icon: LinkInBioIcon({ size: ICONSIZE }),
      },
    ],
  },
  {
    label: "Advanced",
    items: [
      {
        label: "Posts",
        icon: PostsIcon({ size: ICONSIZE }),
      },
      {
        label: "Share Buttons",
        icon: ShareButtonsIcon({ size: ICONSIZE }),
      },
      {
        label: "Portfolio",
        icon: PortfolioIcon({ size: ICONSIZE }),
      },
      {
        label: "Slides",
        icon: SlidesIcon({ size: ICONSIZE }),
      },
      {
        label: "Form",
        icon: FormIcon({ size: ICONSIZE }),
      },
      {
        label: "Login",
        icon: LoginIcon({ size: ICONSIZE }),
      },
      {
        label: "Nav Menu",
        icon: NavMenuIcon({ size: ICONSIZE }),
      },
      {
        label: "Animated Headline",
        icon: AnimatedHeadlineIcon({ size: ICONSIZE }),
      },
      {
        label: "Price Table",
        icon: PriceTableIcon({ size: ICONSIZE }),
      },
      {
        label: "Price List",
        icon: PriceListIcon({ size: ICONSIZE }),
      },
      {
        label: "Gallery",
        icon: GalleryIcon({ size: ICONSIZE }),
      },
      {
        label: "Flip Box",
        icon: FlipBoxIcon({ size: ICONSIZE }),
      },
      {
        label: "Call to Action",
        icon: CTAIcon({ size: ICONSIZE }),
      },
      {
        label: "Media Carousel",
        icon: MediaCarouselIcon({ size: ICONSIZE }),
      },
      {
        label: "Testimonial Carousel",
        icon: TestimonialCarouselIcon({ size: ICONSIZE }),
      },
      {
        label: "Nested Carousel",
        icon: NestedCarouselIcon({ size: ICONSIZE }),
      },
      {
        label: "Loop Carousel",
        icon: LoopCarouselIcon({ size: ICONSIZE }),
      },
      {
        label: "Table of Contents",
        icon: TableOfContentsIcon({ size: ICONSIZE }),
      },
      {
        label: "Countdown",
        icon: CountdownIcon({ size: ICONSIZE }),
      },
      {
        label: "Facebook Page",
        icon: FacebookPageIcon({ size: ICONSIZE }),
      },
      {
        label: "Blockquote",
        icon: BlockquoteIcon({ size: ICONSIZE }),
      },
      {
        label: "Template",
        icon: TemplateIcon({ size: ICONSIZE }),
      },
      {
        label: "Reviews",
        icon: ReviewsIcon({ size: ICONSIZE }),
      },
      {
        label: "Facebook Button",
        icon: FacebookButtonIcon({ size: ICONSIZE }),
      },
      {
        label: "Facebook Embed",
        icon: FacebookEmbedIcon({ size: ICONSIZE }),
      },
      {
        label: "Facebook Comments",
        icon: FacebookCommentsIcon({ size: ICONSIZE }),
      },
      {
        label: "PayPal Button",
        icon: PayPalButtonIcon({ size: ICONSIZE }),
      },
      {
        label: "Lottie Widget",
        icon: LottieWidgetIcon({ size: ICONSIZE }),
      },
      {
        label: "Code Highlight",
        icon: CodeHighlightIcon({ size: ICONSIZE }),
      },
      {
        label: "Video Playlist",
        icon: VideoPlaylistIcon({ size: ICONSIZE }),
      },
      {
        label: "Hotspot",
        icon: HotspotIcon({ size: ICONSIZE }),
      },
      {
        label: "Progress Tracker",
        icon: ProgressTrackerIcon({ size: ICONSIZE }),
      },
      {
        label: "Stripe Button",
        icon: StripeButtonIcon({ size: ICONSIZE }),
      },
      {
        label: "Mega Menu",
        icon: MegaMenuIcon({ size: ICONSIZE }),
      },
      {
        label: "Off-Canvas",
        icon: OffCanvasIcon({ size: ICONSIZE }),
      },
    ],
  },
  {
    label: "Theme",
    items: [
      {
        label: "Post Title",
        icon: PostTitleIcon({ size: ICONSIZE }),
      },
      {
        label: "Post Excerpt",
        icon: PostExcerptIcon({ size: ICONSIZE }),
      },
      {
        label: "Post Content",
        icon: PostContentIcon({ size: ICONSIZE }),
      },
      {
        label: "Featured Image",
        icon: FeaturedImageIcon({ size: ICONSIZE }),
      },
      {
        label: "Author Box",
        icon: AuthorBoxIcon({ size: ICONSIZE }),
      },
      {
        label: "Post Comments",
        icon: PostCommentsIcon({ size: ICONSIZE }),
      },
      {
        label: "Post Navigation",
        icon: PostNavigationIcon({ size: ICONSIZE }),
      },
      {
        label: "Post Info",
        icon: PostInfoIcon({ size: ICONSIZE }),
      },
      {
        label: "Site Logo",
        icon: SiteLogoIcon({ size: ICONSIZE }),
      },
      {
        label: "Site Title",
        icon: SiteTitleIcon({ size: ICONSIZE }),
      },
      {
        label: "Page Title",
        icon: PageTitleIcon({ size: ICONSIZE }),
      },
      {
        label: "Search Bar",
        icon: SearchBarIcon({ size: ICONSIZE }),
      },
      {
        label: "Breadcrumbs",
        icon: BreadcrumbsIcon({ size: ICONSIZE }),
      },
      {
        label: "Sitemap",
        icon: SitemapIcon({ size: ICONSIZE }),
      },
      {
        label: "Loop Grid",
        icon: LoopGridIcon({ size: ICONSIZE }),
      },
    ],
  },
];
