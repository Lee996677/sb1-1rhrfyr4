export interface NavItem {
  label: string;
  href: string;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}