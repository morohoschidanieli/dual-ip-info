interface TitleProps {
  children: string;
}

const Title = ({ children }: TitleProps) => {
  return <div>{children}</div>;
};

export default Title;
