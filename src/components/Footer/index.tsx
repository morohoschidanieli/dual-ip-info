interface FooterProps {
  children?: React.ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  return <footer className="font-bold">{children}</footer>;
};

export default Footer;
