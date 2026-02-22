import {
  Cog,
  Link,
  Mail,
  Plus,
  Send,
  Code,
  Github,
  Loader2,
  Webhook,
  ChevronUp,
  Clipboard,
  Instagram,
  ChevronLeft,
  SmartphoneNfc,
} from "lucide-react";
import { LinkIcon } from "./link";
import { TypeScriptIcon } from "./typescript";
import {
  X,
  SquarePen,
  Check,
  ChartColumnIncreasing,
  Globe,
  GalleryHorizontalEnd,
  Shield,
  Settings2,
  Maximize2,
  LoaderCircle,
  CircleAlert,
  SearchAlert,
  ShieldOff,
  ShieldCheck,
} from "lucide-react";
import { type LucideProps } from "lucide-react";

export const Icons = {
  link: LinkIcon,
  plus: Plus,
  config: Cog,
  typescript: TypeScriptIcon,
  email: Mail,
  project: Code,
  telegram: Send,
  github: Github,
  webhook: Webhook,
  back: ChevronLeft,
  copy: Clipboard,
  spinner: Loader2,
  instagram: Instagram,
  chevronUp: ChevronUp,
  contact: SmartphoneNfc,
  // Technical features
  cms: SquarePen,
  check: Check,
  analytics: ChartColumnIncreasing,
  performance: Globe,
  responsiveness: GalleryHorizontalEnd,
  security: Shield,
  integrations: Settings2,
};

export type Icon = keyof typeof Icons;
