import {
  HomeIcon,
  CodeBracketIcon,
  LinkIcon,
  Cog8ToothIcon,
  ClockIcon,
  HashtagIcon,
  MusicalNoteIcon,
  EyeDropperIcon,
  GifIcon,
  QrCodeIcon,
  DocumentIcon,
  PhotoIcon,
  DocumentTextIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

const iconClasses = "h-6 w-6";
const submenuIconClasses = "h-5 w-5";
const routes = [
  {
    path: "/app/home",
    icon: <HomeIcon className={iconClasses} />,
    name: "Home",
  },
  {
    path: "/app/draw",
    icon: <HomeIcon className={iconClasses} />,
    name: "Draw",
  },
  {
    path: "",
    name: "Converter",
    submenu: [
      {
        path: "/app/convert/json",
        icon: <HomeIcon className={submenuIconClasses} />,
        name: "JSON <> Yaml",
      },
      {
        path: "/app/convert/number",
        icon: <HomeIcon className={submenuIconClasses} />,
        name: "Number Base",
      },
      {
        path: "/app/convert/date",
        icon: <ClockIcon className={submenuIconClasses} />,
        name: "Date Time",
      },
    ],
  },
  {
    path: "",
    name: "Encoders / Decoders",
    submenu: [
      {
        path: "/app/encode/html",
        icon: <CodeBracketIcon className={submenuIconClasses} />,
        name: "HTML",
      },
      {
        path: "/app/encode/url",
        icon: <LinkIcon className={submenuIconClasses} />,
        name: "URL",
      },
      {
        path: "/app/encode/base64",
        icon: <LinkIcon className={submenuIconClasses} />,
        name: "Base64",
      },
      {
        path: "/app/encode/jwt",
        icon: <LinkIcon className={submenuIconClasses} />,
        name: "JWT",
      },
    ],
  },
  {
    path: "",
    name: "Formatters",
    submenu: [
      {
        path: "/app/format/json",
        icon: <CodeBracketIcon className={submenuIconClasses} />,
        name: "JSON",
      },
      {
        path: "/app/format/xml",
        icon: <LinkIcon className={submenuIconClasses} />,
        name: "XML",
      },
      {
        path: "/app/format/sql",
        icon: <LinkIcon className={submenuIconClasses} />,
        name: "SQL Formatter",
      },
    ],
  },
  {
    path: "",
    name: "Generators",
    submenu: [
      {
        path: "/app/gen/hash",
        icon: <HashtagIcon className={submenuIconClasses} />,
        name: "Hash",
      },
      {
        path: "/app/gen/uuid",
        icon: <LinkIcon className={submenuIconClasses} />,
        name: "UUID",
      },
      {
        path: "/app/gen/text",
        icon: <DocumentTextIcon className={submenuIconClasses} />,
        name: "Lorem Ipsum",
      },
      {
        path: "/app/gen/checksum",
        icon: <CheckIcon className={submenuIconClasses} />,
        name: "Checksum",
      },
      {
        path: "/app/gen/qr",
        icon: <QrCodeIcon className={submenuIconClasses} />,
        name: "QR Code Generator",
      },
    ],
  },
  {
    path: "",
    name: "Text",
    submenu: [
      {
        path: "/app/text/inspect",
        icon: <CodeBracketIcon className={submenuIconClasses} />,
        name: "Inspector & Case Converter",
      },
      {
        path: "/app/text/regex",
        icon: <LinkIcon className={submenuIconClasses} />,
        name: "Regex",
      },
      {
        path: "/app/text/diff",
        icon: <LinkIcon className={submenuIconClasses} />,
        name: "Text Diff",
      },
      {
        path: "/app/text/hyphenation",
        icon: <LinkIcon className={submenuIconClasses} />,
        name: "Hyphenation",
      },
    ],
  },
  {
    path: "",
    name: "Graphic",
    submenu: [
      {
        path: "/app/graphic/compression",
        icon: <CodeBracketIcon className={submenuIconClasses} />,
        name: "PNG/JPEG Compression",
      },
      {
        path: "/app/graphic/pdf",
        icon: <DocumentIcon className={submenuIconClasses} />,
        name: "PDF Converter",
      },
      {
        path: "/app/graphic/image",
        icon: <PhotoIcon className={submenuIconClasses} />,
        name: "Image Converter",
      },
      {
        path: "/app/graphic/icon",
        icon: <LinkIcon className={submenuIconClasses} />,
        name: "Icon Generator",
      },
      {
        path: "/app/graphic/qr",
        icon: <QrCodeIcon className={submenuIconClasses} />,
        name: "QR Code Reader",
      },
    ],
  },
  {
    path: "",
    name: "Media",
    submenu: [
      {
        path: "/app/media/color",
        icon: <EyeDropperIcon className={submenuIconClasses} />,
        name: "Color Picker",
      },
      {
        path: "/app/media/audio",
        icon: <MusicalNoteIcon className={submenuIconClasses} />,
        name: "Audio Converter",
      },
      {
        path: "/app/media/gif",
        icon: <GifIcon className={submenuIconClasses} />,
        name: "Gif Converter",
      },
    ],
  },
  {
    path: "/app/setting",
    icon: <Cog8ToothIcon className={iconClasses} />,
    name: "Settings",
  },
];

export default routes;
