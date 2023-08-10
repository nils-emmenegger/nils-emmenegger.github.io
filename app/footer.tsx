import GithubLogo from "@/components/icons/github-logo";
import LinkedInLogo from "@/components/icons/linkedin-logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto py-4 pt-3 flex flex-col items-center text-center">
      {/* the mt-auto above depends on the footer being inside a flex container */}
      <ul className="flex mb-3">
        <li className="w-10 mx-1 transition hover:scale-110">
          <a
            href="https://github.com/nils-emmenegger"
            className="fill-onedark-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo />
          </a>
        </li>
        <li className="w-10 mx-1 transition hover:scale-110">
          <a
            href="https://www.linkedin.com/in/nils-emmenegger"
            className="fill-onedark-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInLogo />
          </a>
        </li>
      </ul>
      <span className="text-onedark-white">
        &copy; 2022-{year}, Nils Emmenegger
      </span>
    </footer>
  );
}
