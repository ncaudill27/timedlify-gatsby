import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Button from "../components/button"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <main>
      <Button style={{ "--width": "100%", backgroundColor: "#ff7300" }}>
        HIIT Interval
      </Button>
      <Button style={{ "--width": "100%", backgroundColor: "#ff0000" }}>
        Work Wake-Up
      </Button>
      <Button style={{ "--width": "100%", backgroundColor: "#ae00ff" }}>
        Wind Down
      </Button>
    </main>
    <Footer>
      <Button
        to='/new'
        style={{
          "--width": "100%",
          backgroundColor: "#00ff22",
          color: "var(--color-background)",
        }}
      >
        New Timer
      </Button>
    </Footer>
  </Layout>
)

export default IndexPage
