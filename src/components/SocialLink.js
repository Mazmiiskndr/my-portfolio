// SocialLink.js
const SocialLink = ({
  href,
  className,
  ariaHidden = true,
  rel = "nofollow",
  target = "_blank",
}) => {
  return (
    <a target={target} rel={rel} href={href}>
      <i aria-hidden={ariaHidden} className={className} />
    </a>
  );
};

export default SocialLink;
