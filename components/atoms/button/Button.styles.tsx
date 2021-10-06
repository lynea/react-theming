import styled, { css } from "styled-components";

const primaryButtonStyles = css`
  border: 0;
  background-color: var(--color-primary);
  color: var(--color-contrast);
`;

const ghostButtonStyles = css`
  background-color: var(--color-contrast);
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
`;

const ctaButtonStyles = css`
  background-color: var(--color-secondary);
  color: var(--color-contrast);
  border: 0;
`;

const determineVariant = (variant: "primary" | "ghost" | "cta") => {
  switch (variant) {
    case "ghost":
      return ghostButtonStyles;

    case "cta":
      return ctaButtonStyles;

    default:
      return primaryButtonStyles;
  }
};

type ButtonProps = {
  variant: "primary" | "ghost" | "cta";
};

export const Button = styled.button<ButtonProps>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  padding: 16px 24px;
  ${(props) => determineVariant(props.variant)}
`;

// export const GhostButton = styled(Button)`
//   background-color: var(--color-contrast);
//   color: var(--color-primary);
//   border: var(--color-primary);
// `;

// export const CtaButton = styled(Button)`
//   background-color: var(--color-contrast);
//   color: var(--color-primary);
//   border: var(--color-primary);
// `;
