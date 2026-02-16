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

export const Icons = {
  link: Link,
  plus: Plus,
  config: Cog,
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
