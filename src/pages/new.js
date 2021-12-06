import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Form from "../containers/form"

const IndexPage = () => (
  <Layout>
    <Seo title='New Timer' />
    <main>
      <Form />
    </main>
  </Layout>
)

export default IndexPage
