import * as React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import MaxWidthWrapper from "../components/maxWidthWrapper"

const Header = ({ siteTitle }) => {
  return (
    <StyledHeader>
      <Flex width={700}>
        <Link
          to='/'
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Title>{siteTitle}</Title>
        </Link>
        <SignIn href='/.netlify/functions/authorize'>
          Sign in with Spotify
        </SignIn>
      </Flex>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  text-align: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: var(--shadow-elevation-low);
  /* GLASS PROPERTIES */
  background: var(--glass-background-dark);
  backdrop-filter: var(--glass-blur);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
`

const Flex = styled(MaxWidthWrapper)`
  display: flex;
  align-items: baseline;
  padding: var(--spacing-1);
`

const Title = styled.h1`
  margin: 0;
`

const SignIn = styled.a`
  display: block;
  margin-left: auto;
  color: inherit;
  text-decoration: none;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
