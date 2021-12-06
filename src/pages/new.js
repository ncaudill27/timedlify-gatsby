import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Button from "../components/button"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <Seo title='New Timer' />
    <main>
      <Button style={{ "--width": "100%", backgroundColor: "#ff7300" }}>
        <h2>HIIT Interval</h2>
      </Button>
      <Button style={{ "--width": "100%", backgroundColor: "#ff0000" }}>
        <h2>Work Wake-Up</h2>
      </Button>
      <Button style={{ "--width": "100%", backgroundColor: "#ae00ff" }}>
        <h2>Wind Down</h2>
      </Button>
    </main>
    <Footer>
      <Button
        as={Link}
        to='/new'
        style={{
          "--width": "100%",
          backgroundColor: "#00ff22",
          color: "var(--color-background)",
        }}
      >
        <h2>New Timer</h2>
      </Button>
    </Footer>
  </Layout>
)

export default IndexPage
