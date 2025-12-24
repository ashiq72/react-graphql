import { ShoppingBag, Plane, CalendarCheck, Users } from "lucide-react";

export const stats = [
  { label: "Active Users", value: "12K+" },
  { label: "Business Partners", value: "50+" },
  { label: "Countries Served", value: "15" },
  { label: "Total Transactions", value: "$2M+" },
];

export const brands = [
  "Stripe",
  "AWS",
  "Google Cloud",
  "Vercel",
  "MongoDB",
  "Twilio",
  "SendGrid",
  "Auth0",
];

export const projects = [
  {
    title: "Bponi Commerce",
    subtitle: "Multi-Vendor Ecosystem",
    description:
      "A comprehensive marketplace solution supporting B2B and B2C models. Features real-time inventory & AI.",
    icon: <ShoppingBag className='w-6 h-6' />,
    tags: ["E-commerce", "Fintech"],
  },
  {
    title: "Travel Xperience",
    subtitle: "Global Booking Engine",
    description:
      "Seamless flight, hotel, and tour booking system. Integrated with major GDS systems.",
    icon: <Plane className='w-6 h-6' />,
    tags: ["Travel", "Booking"],
  },
  {
    title: "Service Sync",
    subtitle: "Appointment Manager",
    description:
      "Advanced scheduling for professionals. Handles recurring appointments and reminders.",
    icon: <CalendarCheck className='w-6 h-6' />,
    tags: ["SaaS", "CRM"],
  },
  {
    title: "Community Hub",
    subtitle: "Social Network",
    description:
      "A niche social platform focusing on privacy. Features encrypted chat and groups.",
    icon: <Users className='w-6 h-6' />,
    tags: ["Social", "Chat"],
  },
];

export const roadmap = [
  {
    year: "2023",
    title: "Foundation",
    desc: "Launched core commerce engine and secured seed funding.",
  },
  {
    year: "2024",
    title: "Expansion",
    desc: "Integrated Travel and Booking modules. Reached 10k users.",
  },
  {
    year: "2025",
    title: "Ecosystem",
    desc: "Launching Social Hub and Mobile Super App. AI integration.",
  },
  {
    year: "2026",
    title: "Global Scale",
    desc: "Expansion to European and MENA markets. IPO preparation.",
  },
];

export const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CTO, TechFlow",
    text: "The API documentation is flawless. We integrated Bponi Suite in under a week.",
  },
  {
    name: "Ahmed Rahman",
    role: "Founder, ShopBD",
    text: "Finally a platform that understands the local market needs while providing global standards.",
  },
  {
    name: "David Chen",
    role: "Product Manager",
    text: "The dark mode and UI performance is just butter smooth. Highly recommended.",
  },
];

export const pricing = [
  {
    plan: "Starter",
    price: "Free",
    desc: "Perfect for testing the waters.",
    features: ["Single Project", "Basic Analytics", "Community Support"],
    recommended: false,
  },
  {
    plan: "Business",
    price: "$49",
    desc: "For growing companies.",
    features: [
      "5 Projects",
      "Advanced Analytics",
      "Priority Support",
      "API Access",
    ],
    recommended: true,
  },
  {
    plan: "Enterprise",
    price: "Custom",
    desc: "For large scale operations.",
    features: [
      "Unlimited Projects",
      "Dedicated Server",
      "24/7 Phone Support",
      "White Labeling",
    ],
    recommended: false,
  },
];

export const faqs = [
  {
    q: "Can I integrate Bponi Suite with my existing site?",
    a: "Yes! Our platform is built with a RESTful API architecture, allowing seamless integration with any existing codebase.",
  },
  {
    q: "Is the data secure?",
    a: "Absolutely. We use banking-grade 256-bit encryption and comply with GDPR regulations to ensure your data is safe.",
  },
  {
    q: "Do you offer custom development?",
    a: "Yes, our team of engineers can build custom modules tailored to your specific business needs.",
  },
];
