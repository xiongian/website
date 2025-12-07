import type { JSX } from "react";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import twitterIcon from "../assets/twitter.png";

interface SocialLinkButtonProps {
  button_name: string;
  url: string;
}

function SocialLinkButton({ button_name, url }: SocialLinkButtonProps): JSX.Element {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img className="logo" src={button_name} alt="Social link"></img>
    </a>
  );
}

export function SocialLinks(): JSX.Element {
  return (
    <div>
      <SocialLinkButton
        button_name={githubIcon}
        url="https://github.com/xiongian"
      />
      <SocialLinkButton
        button_name={linkedinIcon}
        url="https://www.linkedin.com/in/ian-xiong/"
      />
      <SocialLinkButton
        button_name={twitterIcon}
        url="https://x.com/ianxiong_"
      />
    </div>
  );
}