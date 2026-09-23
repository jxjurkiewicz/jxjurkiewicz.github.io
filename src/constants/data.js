import * as Icons from "../components/Icons";
import {
  ContactIconBig,
  LinkedinIconBig,
  GitHubSocialsIconBig,
} from "../components/Icons";
import { IconUsers, IconSettings, IconShieldCheck } from '@tabler/icons-react';

export const techSkills = [
  {
    title: "HTML",
    Icon: Icons.HtmlIcon,
  },
  {
    title: "CSS",
    Icon: Icons.CSSIcon,
  },
  {
    title: "SASS/ SCSS",
    Icon: Icons.SassIcon,
  },
  {
    title: "Tailwind CSS",
    Icon: Icons.TailwindCSSIcon,
  },
  // {
  //   title: "JavaScript",
  //   Icon: Icons.JavascriptIcon,
  // },
  {
    title: "TypeScript",
    Icon: Icons.TypescriptIcon,
  },
  {
    title: "jQuery",
    Icon: Icons.JQueryIcon,
  },
  {
    title: "React",
    Icon: Icons.ReactIcon,
  },
  {
    title: "Next",
    Icon: Icons.NextIcon,
  },
  {
    title: "PHP",
    Icon: Icons.PHPIcon,
  },
  {
    title: "Wordpress",
    Icon: Icons.WordPressIcon,
  },
  {
    title: "Git",
    Icon: Icons.GitIcon,
  },
  {
    title: "GitHub",
    Icon: Icons.GitHubIcon,
  },
];

export const cards = [
  {
    key: "websites",
    Icon: Icons.WorldIcon,
  },
  {
    key: "onlineStores",
    Icon: Icons.CartIcon,
  },
  {
    key: "electronicSignatures",
    Icon: Icons.PenIcon,
  },
  {
    key: "itSupport",
    Icon: Icons.CloudIcon,
  },
];

export const cardsExtra = [
  {
    key: "1",
    Icon: IconUsers,
  },
    {
    key: "2",
    Icon: IconSettings,
  },
    {
    key: "3",
    Icon: IconShieldCheck,
  },
]

export const socials = [
  {
    title: "Contact",
    link: "mailto:biuro@jakubjurkiewicz.pl",
    Icon: Icons.ContactIconSmall,
    IconBig: ContactIconBig,
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/jakub-jurkiewicz-970723286/",
    Icon: Icons.LinkedinIconSmall,
    IconBig: LinkedinIconBig,
  },
  {
    title: "Github",
    link: "https://github.com/jxjurkiewicz",
    Icon: Icons.GitHubSocialsIconSmall,
    IconBig: GitHubSocialsIconBig,
  },
];
