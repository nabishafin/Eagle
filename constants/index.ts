import type { StaticImageData } from "next/image";

import amEx from "@/public/am_ex.png";
import appLogo from "@/public/app_logo.png";
import appStore from "@/public/app_store.png";
import applePay from "@/public/apple_pay.png";
import blueEagle from "@/public/blue_egale.svg";
import blueWrite from "@/public/blue_write.png";
import digitalJurnal from "@/public/digital_jurnal.png";
import facebook from "@/public/facebook.png";
import fox from "@/public/fox.png";
import greenEagle from "@/public/green_eagle.svg";
import greenWrite from "@/public/green_write.png";
import insta from "@/public/insta.png";
import leftHeroImg from "@/public/left_hero_img.png";
import leftHeroShadow from "@/public/left_hero_shadow.png";
import leftHeroShadowUnder from "@/public/left_hero_shadow_under.png";
import marketWatch from "@/public/market_watch.png";
import masterCard from "@/public/master_card.png";
import middleHeroImg from "@/public/middle_hero_img.png";
import nbc from "@/public/nbc.png";
import pinkEagle from "@/public/pink_eagle.svg";
import pinkWrite from "@/public/pink_write.png";
import redEagle from "@/public/red_eagle.svg";
import redWrite from "@/public/red_write.png";
import rightHeroImg from "@/public/right_hero_img.png";
import rightHeroShadow from "@/public/right_hero_shadow.png";
import social1 from "@/public/social_1.png";
import social2 from "@/public/social_2.png";
import social3 from "@/public/social_3.png";
import social4 from "@/public/social_4.png";
import social5 from "@/public/social_5.png";
import social6 from "@/public/social_6.png";
import sportify from "@/public/sportify.png";
import threads from "@/public/threads.png";
import tiktok from "@/public/tiktok.png";
import tripa from "@/public/tripa.png";
import twitch from "@/public/twitch.png";
import usaToday from "@/public/usa_today.png";
import userIcon from "@/public/user_icon.png";
import visa from "@/public/visa.png";
import x from "@/public/x.png";
import yahoo from "@/public/yahoo.png";
import youtube from "@/public/youtube.png";
import hero_top_shadow from "@/public/hero_top_shadow.png"
import tiktok_service from "@/public/tiktok_service.png"
import left_shadow from "@/public/left_shadow.png"
import right_shadow from "@/public/right_shadow.png"

export const images = {
    amEx,
    appLogo,
    appStore,
    applePay,
    blueEagle,
    blueWrite,
    digitalJurnal,
    facebook,
    fox,
    greenEagle,
    greenWrite,
    insta,
    leftHeroImg,
    leftHeroShadow,
    leftHeroShadowUnder,
    marketWatch,
    masterCard,
    middleHeroImg,
    nbc,
    pinkEagle,
    pinkWrite,
    redEagle,
    redWrite,
    rightHeroImg,
    rightHeroShadow,
    social1,
    social2,
    social3,
    social4,
    social5,
    social6,
    sportify,
    threads,
    tiktok,
    tripa,
    twitch,
    usaToday,
    userIcon,
    visa,
    x,
    yahoo,
    youtube,
    hero_top_shadow,
    tiktok_service,
    left_shadow,
    right_shadow
} satisfies Record<string, StaticImageData>;

export type ServiceTab = {
    name: string;
    icon: StaticImageData;
    rating: string;
    count: string;
    highlighted?: boolean;
};

export const primaryNav = [
    "TIKTOK",
    "INSTAGRAM",
    "YOUTUBE",
    "FACEBOOK",
    "TWITTER (X)",
    "BLOG",
    "CONTACT US",
];

export const topServiceTabs: ServiceTab[] = [
    {
        name: "TikTok Services",
        icon: tiktok,
        rating: "5.0",
        count: "7420+",
        highlighted: true,
    },
    {
        name: "Instagram Services",
        icon: insta,
        rating: "5.0",
        count: "5450+",
    },
    {
        name: "YouTube Services",
        icon: youtube,
        rating: "5.0",
        count: "5280+",
    },
    {
        name: "Facebook Services",
        icon: facebook,
        rating: "5.0",
        count: "6980+",
    },
];

export const bottomServiceTabs: ServiceTab[] = [
    {
        name: "Twitter (X) Services",
        icon: x,
        rating: "5.0",
        count: "4450+",
    },
    {
        name: "Twitch Services",
        icon: twitch,
        rating: "5.0",
        count: "3270+",
    },
    {
        name: "Spotify Services",
        icon: sportify,
        rating: "5.0",
        count: "2750+",
    },
    {
        name: "Threads Services",
        icon: threads,
        rating: "5.0",
        count: "2540+",
    },
];

export const featuredServiceButtons = [
    "BUY TIKTOK FOLLOWERS",
    "BUY TIKTOK LIKES",
    "BUY TIKTOK VIEWS",
    "BUY TIKTOK SHARES",
];

export const heroActivityBadges = [
    "500 views delivered",
    "6 mins ago",
];

export const reviewStars = 5;

export const pressLogos = [
    digitalJurnal,
    fox,
    marketWatch,
    nbc,
    tripa,
    usaToday,
    yahoo,
];

export const paymentLogos = [amEx, applePay, masterCard, visa, appStore];

export const socialShowcaseCards = [
    social1,
    social2,
    social3,
    social4,
    social5,
    social6,
];

export const eagleMarks = [
    blueEagle,
    greenEagle,
    pinkEagle,
    redEagle,
    blueWrite,
    greenWrite,
    pinkWrite,
    redWrite,
];

export type EagleLikeFeature = {
    title: string;
    description: string;
    image: StaticImageData;
    imageAlt: string;
    imagePosition: "left" | "right";
    bullets?: string[];
};

export const eagleLikeFeatures: EagleLikeFeature[] = [
    {
        title: "Social Media Exposure",
        description:
            "A solid social media presence is essential in the digital world, and this section showcases how our tailored solutions help your brand stand out across every platform.",
        image: social1,
        imageAlt: "Person holding a phone with floating social icons",
        imagePosition: "right",
    },
    {
        title: "Instant Growth Boost",
        description:
            "Engagement grows faster when your content reaches the right audience at the right time. Our services are built to create momentum with followers, views, reactions, and social proof that feels natural.",
        image: social2,
        imageAlt: "Excited person reacting to social media growth on a phone",
        imagePosition: "left",
    },
    {
        title: "Social Media Growth",
        description:
            "Transform your social presence with data-driven strategies and watch your engagement soar.",
        image: social3,
        imageAlt: "Analytics-themed social growth illustration",
        imagePosition: "left",
        bullets: [
            "Data-Driven Insights",
            "Audience Engagement",
            "Performance Tracking",
        ],
    },
];

export type EagleServiceFeature = {
    title: string;
    accent: string;
    description: string;
    rating: string;
    reviews: string;
    bullets: string[];
    buttonLabel: string;
    cards: {
        title: string;
        url: string;
        description: string;
    }[];
};

export const eagleServiceFeature: EagleServiceFeature = {
    title: "Buy Instagram Likes",
    accent: "Instagram",
    description:
        "Transform your social media journey with reliable Instagram and TikTok growth solutions. Gain real followers, likes, and views safely and instantly, helping your content reach more people and increasing your engagement organically",
    rating: "5.0",
    reviews: "3220+",
    bullets: [
        "Real likes from authentic Instagram users",
        "Different follower packages available to choose",
        "Likes delivered instantly",
        "Option to split your likes across several posts",
        "Cost-effective",
        "Total safety for your data and accounts",
        "Explosive likes growth",
    ],
    buttonLabel: "Buy Instagram Likes",
    cards: [
        {
            title: "Why Do Instagram Followers Matter?",
            url: "https://docs.google.com/document/d/100cYimpHIFPWTXJFPNO0kC8AHA7tEQ_uebv8MIRP-0/edit?usp=sharing",
            description:
                "Learn how follower count builds trust, reach, and stronger first impressions for your profile.",
        },
        {
            title: "Main Reasons To Buy Instagram Followers",
            url: "https://docs.google.com/document/d/100cYimpHIFPWTXJFPNO0kC8AHA7tEQ_uebv8MIRP-0/edit?usp=sharing",
            description:
                "See why brands and creators use follower boosts to kickstart visibility and social proof.",
        },
    ],
};

export type HowItWorksStep = {
    number: string;
    title: string;
    description: string;
    icon: "cart" | "user" | "lock";
    iconColor: string;
    iconBackground: string;
};

export const howItWorksSteps: HowItWorksStep[] = [
    {
        number: "01",
        title: "Pick a Service",
        description: "Pick the service that fits your goals and start growing now",
        icon: "cart",
        iconColor: "#c86dff",
        iconBackground: "rgba(133,54,185,0.18)",
    },
    {
        number: "02",
        title: "Enter Information",
        description: "Enter your information to get started quickly and securely!",
        icon: "user",
        iconColor: "#5aa8ff",
        iconBackground: "rgba(44,102,181,0.18)",
    },
    {
        number: "03",
        title: "Pay Securely",
        description: "Pay securely and complete your order in seconds!",
        icon: "lock",
        iconColor: "#12d39a",
        iconBackground: "rgba(12,122,92,0.18)",
    },
];

export type WhyEagleLikesFeature = {
    title: string;
    description: string;
    image: StaticImageData;
    imageAlt: string;
    imagePosition: "left" | "right";
    badge?: string;
    bullets?: {
        title: string;
        description: string;
        color: "pink" | "green" | "purple";
    }[];
};

export const whyEagleLikesFeatures: WhyEagleLikesFeature[] = [
    {
        title: "Growth Focused Services",
        description:
            "For more than a decade, Eagle Likes has offered verified TikTok followers, likes, and views that help accounts scale faster, increasing visibility and engagement while maintaining a respected standing as a reputable social media growth service relied upon by customers globally. Safely and reliably.\n\nAs the TikTok market expanded, we focused on providing high-quality growth services that empower creators to gain real followers and consistent engagement safely.",
        image: social4,
        imageAlt: "Excited person celebrating social media growth",
        imagePosition: "right",
    },
    {
        title: "Leading Growth Specialists",
        description:
            "With our support millions of users are building stronger social media profiles, delivering billions of Instagram likes, views, and comments, along with thousands of authentic TikTok interactions that boost engagement, strengthen visibility, and drive continuous, lasting growth.\n\nUsers trust our service because we consistently deliver high-quality, genuine growth. Our expert team ensures every follower, like, and view is gained safely and effectively for lasting success.",
        image: social5,
        imageAlt: "Smiling woman checking growth progress on her phone",
        imagePosition: "left",
    },
    {
        title: "Scale Your Social Media to New Heights",
        description:
            "Unlock explosive growth with data-driven strategies. Build authentic engagement, expand your reach, and turn followers into loyal customers.",
        image: social6,
        imageAlt: "Growth analytics ring with social media metrics",
        imagePosition: "right",
        badge: "Accelerate Your Growth",
        bullets: [
            {
                title: "Accelerated Growth",
                description: "Achieve 10x faster audience expansion with proven tactics.",
                color: "pink",
            },
            {
                title: "Authentic Engagement",
                description: "Foster genuine interactions that drive long-term loyalty.",
                color: "green",
            },
            {
                title: "Data-Driven Results",
                description: "Track every metric and optimize for maximum impact.",
                color: "purple",
            },
        ],
    },
];
