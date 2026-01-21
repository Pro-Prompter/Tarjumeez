import React from "react";
import "./style.css";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
  FaCircle
} from "react-icons/fa";
import { socialprofiles } from "../../content_option";

const ICON_MAPPING = {
  default: FaCircle,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  snapchat: FaSnapchatGhost,
  tiktok: FaTiktok,
  twitter: FaTwitter,
  twitch: FaTwitch,
  youtube: FaYoutube
};

export const Socialicons = () => {
  return (
    <nav
      className="stick_follow_icon"
      aria-label="Social media links"
    >
      <ul role="list">
        {Object.entries(socialprofiles).map(([platform, url]) => {
          const IconComponent = ICON_MAPPING[platform] || ICON_MAPPING.default;
          const label =
            platform.charAt(0).toUpperCase() + platform.slice(1);

          return (
            <li key={platform}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow me on ${label}`}
              >
                <IconComponent aria-hidden="true" focusable="false" />
              </a>
            </li>
          );
        })}
      </ul>
      <p id="follow-me-label">Follow Me</p>
    </nav>
  );
};
