export default function Home() {
  return (
    <div className="mx-auto max-w-3xl p-4">
      <h1 className="mb-4 text-onedark-light-yellow text-3xl">Hi!</h1>
      <p className="mb-4 text-base text-onedark-magenta">
        My name&apos;s Nils Emmenegger. I&apos;m currently studying computer
        science student at the University of Waterloo, class of 2027.
      </p>

      <p className="mb-4 text-base text-onedark-magenta">
        I&apos;m passionate about all things technology. More recently,
        I&apos;ve taken an interest in topics inlcuding but not limited to
        CI/CD,&nbsp;
        <a
          href="https://www.rust-lang.org/"
          className="text-onedark-blue"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rust
        </a>
        , compilers, designing asynchronous runtimes, and programming language
        design.
      </p>

      <p className="mb-4 text-base text-onedark-magenta">
        On this website, you can find some projects I&apos;ve done, my contact
        information, and my resume.
      </p>

      <p className="mb-4 text-base text-onedark-magenta">
        In my spare time, you might find me rock climbing, cooking,&nbsp;
        <a
          href="https://dmoj.ca/user/Nils_Emmenegger"
          className="text-onedark-blue"
          target="_blank"
          rel="noopener noreferrer"
        >
          competitively programming
        </a>
        , working on side projects, or playing the VR rhythm game{" "}
        <a
          href="https://beatsaber.com/"
          className="text-onedark-blue"
          target="_blank"
          rel="noopener noreferrer"
        >
          Beat Saber
        </a>
        .
      </p>

      <h2 className="mb-4 text-onedark-green text-xl">Other stuff</h2>

      <p className="text-base text-onedark-magenta">
        The colour scheme of this website is loosely based on&nbsp;
        <a
          href="https://github.com/joshdick/onedark.vim"
          className="text-onedark-blue"
          target="_blank"
          rel="noopener noreferrer"
        >
          onedark.vim
        </a>
        , one of my favourite colour schemes for the&nbsp;
        <a
          href="https://neovim.io/"
          className="text-onedark-blue"
          target="_blank"
          rel="noopener noreferrer"
        >
          Neovim text editor.
        </a>
      </p>
    </div>
  );
}
