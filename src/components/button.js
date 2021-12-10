import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

const Button = ({ variant = "fill", children, ...props }) => {
  let Component
  const stylesObj = {
    "--width": "100%",
    ...props.style,
  }

  if (variant === "fill") {
    Component = FillButton
  } else if (variant === "outline") {
    Component = OutlineButton
  } else if (variant === "ghost") {
    Component = GhostButton
  }

  if (!!props.to) {
    return (
      <Link
        style={{
          textDecoration: "none",
          "--width": "100%",
        }}
        {...props}
      >
        <Component style={stylesObj}>{children}</Component>
      </Link>
    )
  }
  return <Component {...props}>{children}</Component>
}

const ButtonBase = styled.button`
  width: var(--width);
  margin-top: var(--spacing-1);
  margin-bottom: var(--spacing-1);
  padding: var(--spacing-0) var(--spacing-3);
  border: 2px solid transparent;
  border-radius: 50px;
  appearance: none;
  font-weight: 600;
  box-shadow: var(--shadow-elevation-medium);

  font-family: var(--font-family-primary);
  --type-fontsize-min: ${26 / 16}rem; // 18px
  --type-fontsize-max: ${34 / 16}rem; // 23px
  --type-fontsize-value: 1.2rem + 1vw;
  font-size: calc(
    (
      clamp(
          var(--type-fontsize-min),
          var(--type-fontsize-value),
          var(--type-fontsize-max)
        ) - 2px
    )
  );

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background-color: var(--color-text-transparent);
    cursor: wait;
  }
`

const FillButton = styled(ButtonBase)`
  color: white;
  background-color: var(--color-primary);

  &:hover {
    background-color: var(--color-primary-muted);
  }
`

const OutlineButton = styled(ButtonBase)`
  background-color: var(--color-background);
  color: var(--color-primary);
  border: 2px solid var(--color-primary);

  &:hover {
    background-color: var(--color-background-muted);
    color: var(--color-primary-muted);
    border: 2px solid var(--color-primary-muted);
  }
`

const GhostButton = styled(ButtonBase)`
  background-color: transparent;
  color: var(--color-text-tint);

  &:hover {
    background-color: var(--color-text-transparent);
  }
`

Button.propTypes = {
  variant: PropTypes.oneOf(["fill", "variant", "ghost"]),
}

Button.defaultProps = {
  style: {
    "--width": "100%",
  },
}

export default Button
