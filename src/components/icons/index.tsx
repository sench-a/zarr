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
};

export type Icon = keyof typeof Icons;
