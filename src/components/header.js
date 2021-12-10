import * as React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import MaxWidthWrapper from "../components/maxWidthWrapper"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <MaxWidthWrapper width={700}>
      <h1 style={{ margin: 0 }}>
        <Link
          to='/'
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </MaxWidthWrapper>
  </StyledHeader>
)

const StyledHeader = styled.header`
  padding-top: var(--spacing-1);
  padding-bottom: var(--spacing-1);
  background-color: var(--color-background-shade);
  text-align: center;
  box-shadow: var(--shadow-elevation-low);
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
