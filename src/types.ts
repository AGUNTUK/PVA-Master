export interface PlatformItem {
  id: string;
  name: string;
  icon: string;
  status: string;
  badge: string;
  description: string;
  startingPrice: string;
}

export interface AppConfig {
  whatsappNumber: string;
  defaultMessage: string;
  telegramUsername: string;
  supportEmail: string;
  businessName?: string;
  responseRate?: string;
  noticeMessage?: string;
  platforms?: PlatformItem[];
}
