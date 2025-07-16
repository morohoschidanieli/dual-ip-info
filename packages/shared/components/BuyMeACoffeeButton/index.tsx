import { type ComponentProps } from "react";
import { Link, Button } from "@chakra-ui/react";

export interface BuyMeACoffeeButtonProps
  extends ComponentProps<typeof Link>,
    Pick<ComponentProps<typeof Button>, "size"> {
  url: string;
  text: string;
}

export const BuyMeACoffeeButton = (props: BuyMeACoffeeButtonProps) => {
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
        backgroundColor="yellow.300"
        color="black"
        title={text}
      >
        <span role="img" aria-label="coffee">
          ☕
        </span>
        {text}
      </Button>
    </Link>
  );
};
