import type { ComponentType } from "react";

type LinkProps = {
  href: string;
  description: string;
  Icon?: ComponentType<{ size: number; "aria-hidden"?: boolean }>;
  className?: string;
};

export default function Link({ href, description, Icon, className = "text-link" }: LinkProps) {
  return (
    <a href={href} className={className}>
      {Icon && <Icon size={18} aria-hidden={true} />}
      <span>{description}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
