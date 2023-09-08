import ExtLink from "@/components/utils/ExtLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <div className="mx-auto max-w-3xl p-4">
      <h1 className="mb-4 text-onedark-light-yellow text-3xl">Projects</h1>

      <h2 className="mb-4 text-onedark-green text-xl">
        Coming soon! In the meantime, you can check out my{" "}
        <ExtLink href="https://github.com/nils-emmenegger">GitHub</ExtLink>.
      </h2>
    </div>
  );
}
