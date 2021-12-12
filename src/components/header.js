import * as React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import MaxWidthWrapper from "../components/maxWidthWrapper"

import useGlassmorphism from "../hooks/useGlassmorphism"

const Header = ({ siteTitle }) => {
  const headerEl = React.useRef()

  const stuff = useGlassmorphism(headerEl)
  
  return (
    <StyledHeader ref={headerEl}>
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
}

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  padding-top: var(--spacing-1);
  padding-bottom: var(--spacing-1);
  text-align: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: var(--shadow-elevation-low);
  /* GLASS PROPERTIES */
  background: var(--glass-background-dark);
  backdrop-filter: var(--glass-blur);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
