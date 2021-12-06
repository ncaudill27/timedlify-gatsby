import React from "react"
import styled from "styled-components"
import MaxWidthWrapper from "./maxWidthWrapper"

const Footer = props => (
  <StyledFooter {...props}>
    <MaxWidthWrapper width={960}>{props.children}</MaxWidthWrapper>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  color: var(--color-background);
  border-top: 3px solid #4e4e4e;
`

export default Footer
