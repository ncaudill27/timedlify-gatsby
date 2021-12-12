import * as React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Button from "../components/button"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <StyledMain>
      <Button style={{ backgroundColor: "#ff7300" }}>HIIT Interval</Button>
      <Button style={{ backgroundColor: "#ff0000" }}>Work Wake-Up</Button>
      <Button style={{ backgroundColor: "#ae00ff" }}>Wind Down</Button>
    </StyledMain>
    <Footer>
      <Button
        to='/new'
        style={{
          color: "var(--color-background)",
        }}
      >
        New Timer
      </Button>
    </Footer>
  </Layout>
)

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  padding-left: var(--spacing-1);
  padding-right: var(--spacing-1);
`

export default IndexPage
