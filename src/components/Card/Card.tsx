import { ReactNode } from 'react';

type Root = {
  children: ReactNode;
  className?: string;
};

type Thumbnail = {
  src: string;
  alt?: string;
} & Partial<Root>;

type Content = Root;
type Header = Root;
type Main = Root;
type Footer = Root;

export const Card = ({ children, className }: Root) => {
  return <article className={className}>{children}</article>;
};

Card.displayName = 'Card';

const Thumbnail = ({ src, alt, className, children }: Thumbnail) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} />
      {children}
    </div>
  );
};

Card.Thumbnail = Thumbnail;

const Content = ({ className, children }: Content) => {
  return <div className={className}>{children}</div>;
};

Card.Content = Content;

const Header = ({ className, children }: Header) => {
  return <header className={className}>{children}</header>;
};

Card.Header = Header;

const Main = ({ className, children }: Main) => {
  return <div className={className}>{children}</div>;
};

Card.Main = Main;

const Footer = ({ className, children }: Footer) => {
  return <footer className={className}>{children}</footer>;
};

Card.Footer = Footer;
