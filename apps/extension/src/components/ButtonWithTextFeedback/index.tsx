import {
  type ComponentProps,
  type ReactNode,
  useEffect,
  useState,
} from "react";
import { Button } from "@chakra-ui/react";

export interface ButtonWithTextFeedbackProps
  extends ComponentProps<typeof Button> {
  feedback?: string;
  duration?: number;
  children: ReactNode;
}

export const ButtonWithTextFeedback = (props: ButtonWithTextFeedbackProps) => {
  const [showFeedback, setShowFeedback] = useState(false);

  const { duration = 1000, children, feedback = children, onClick } = props;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFeedback(false);
    }, duration);

    return () => clearTimeout(timeout);
  }, [showFeedback, duration]);

  const handleButtonClick = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onClick?.(event);
    setShowFeedback(true);
  };

  return (
    <Button {...props} onClick={handleButtonClick}>
      {showFeedback ? feedback : children}
    </Button>
  );
};
