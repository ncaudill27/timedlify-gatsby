import React from "react"
import styled from "styled-components"
import MaxWidthWrapper from "./maxWidthWrapper"

const Footer = props => (
  <StyledFooter {...props}>
    <MaxWidthWrapper width={700}>{props.children}</MaxWidthWrapper>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  padding-top: var(--spacing-1);
  padding-bottom: var(--spacing-1);
  color: var(--color-background-shade);

  &:before {
    position: absolute;
    content: "";
    top: -3px;
    width: 100%;
    height: 3px;
    background-color: var(--color-background-tint);
    box-shadow: var(--shadow-elevation-low);
  }
`
export default Footer
