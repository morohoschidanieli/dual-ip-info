import { type ComponentProps } from "react";
import { Link, Button, Icon } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa6";

export interface GitHubButtonProps
  extends ComponentProps<typeof Link>,
    Pick<ComponentProps<typeof Button>, "size"> {
  url: string;
  text: string;
}

export const GitHubButton = (props: GitHubButtonProps) => {
  const { url, text, variant, width, size, borderRadius, ...rest } = props;

  return (
    <Link
      {...rest}
      width={width ?? "100%"}
      href={url}
      target="_blank"
      variant={variant ?? "plain"}
    >
      <Button
        width="100%"
        size={size ?? "sm"}
        borderRadius={borderRadius ?? "sm"}
        title={text}
      >
        <Icon>
          <FaGithub />
        </Icon>
        {text}
      </Button>
    </Link>
  );
};
