import Link from "next/link";
import React, { ReactNode, forwardRef } from "react";

interface ElementTypeProps {
  href?: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

const isExternalHttpLink = (url: string) => /^https?:\/\//.test(url);
const isProtocolLink = (url: string) => /^(https?:\/\/|mailto:|tel:)/.test(url);

const ElementType = forwardRef<HTMLElement, ElementTypeProps>(
  ({ href, children, className, style, ...props }, ref) => {
    if (href) {
      const isExternalHttp = isExternalHttpLink(href);
      if (isProtocolLink(href)) {
        return (
          <a
            href={href}
            target={isExternalHttp ? "_blank" : undefined}
            rel={isExternalHttp ? "noreferrer noopener" : undefined}
            ref={ref as React.Ref<HTMLAnchorElement>}
            className={className}
            style={style}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={className}
          style={style}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </Link>
      );
    }
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={className}
        style={style}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  },
);

ElementType.displayName = "ElementType";
export { ElementType };
