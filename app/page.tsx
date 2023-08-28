import ExtLink from "@/components/utils/ExtLink";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl p-4">
      <h1 className="mb-4 text-onedark-light-yellow text-3xl">Hi!</h1>
      <p className="mb-4 text-base text-onedark-magenta">
        My name&apos;s Nils Emmenegger. I&apos;m currently studying computer
        science at the University of Waterloo, class of 2027.
      </p>

      <p className="mb-4 text-base text-onedark-magenta">
        I&apos;m passionate about all things technology. More recently,
        I&apos;ve taken an interest in topics inlcuding but not limited to
        CI/CD, <ExtLink href="https://www.rust-lang.org/">Rust</ExtLink>,
        compilers, designing asynchronous runtimes, and programming language
        design.
      </p>

      <p className="mb-4 text-base text-onedark-magenta">
        On this website, you can find some projects I&apos;ve done, my contact
        information, and my resume.
      </p>

      <p className="mb-4 text-base text-onedark-magenta">
        In my spare time, you might find me rock climbing, cooking,{" "}
        <ExtLink href="https://dmoj.ca/user/Nils_Emmenegger">
          competitively programming
        </ExtLink>
        , working on side projects, or playing the VR rhythm game{" "}
        <ExtLink href="https://beatsaber.com/">Beat Saber</ExtLink>.
      </p>

      <h2 className="mb-4 text-onedark-green text-xl">Other stuff</h2>

      <p className="text-base text-onedark-magenta">
        The colour scheme of this website is loosely based on{" "}
        <ExtLink href="https://github.com/joshdick/onedark.vim">
          onedark.vim
        </ExtLink>
        , one of my favourite colour schemes for the{" "}
        <ExtLink href="https://neovim.io/">Neovim text editor.</ExtLink>
      </p>
    </div>
  );
}
