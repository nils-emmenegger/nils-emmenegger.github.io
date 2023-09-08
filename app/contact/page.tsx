import ExtLink from "@/components/utils/ExtLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  const links: [string, string][] = [
    ["LinkedIn", "https://www.linkedin.com/in/nils-emmenegger"],
    ["GitHub", "https://github.com/nils-emmenegger"],
    ["DMOJ: Modern Online Judge", "https://dmoj.ca/user/Nils_Emmenegger"],
    ["LeetCode", "https://leetcode.com/nemm/"],
    ["Codeforces", "https://codeforces.com/profile/nemm"],
    ["ScoreSaber", "https://scoresaber.com/u/76561198228321708"],
  ];

  return (
    <div className="mx-auto max-w-3xl p-4">
      <h1 className="mb-4 text-onedark-light-yellow text-3xl">Contact</h1>

      <h2 className="mb-4 text-onedark-green text-xl">
        Some online presences I&apos;ve accumulated throughout the years
      </h2>

      <ul>
        {links.map(([name, href]) => (
          <li key={name} className="mb-2 text-onedark-magenta text-base">
            {name}: <ExtLink href={href}>{href}</ExtLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
