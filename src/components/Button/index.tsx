import { StyledButtonM } from "./Button.styles";

type Props = {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
};

export function ButtonM({
  type = "button",
  children
}: Props): JSX.Element {
  return (
    <StyledButtonM type={type}>{children}</StyledButtonM>
  );
}
