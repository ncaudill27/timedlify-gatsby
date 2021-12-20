import * as React from "react"
import useCurrentUser from "../hooks/useCurrentUser"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Form from "../containers/form"

const IndexPage = () => {
  const { user, error } = useCurrentUser()

  return (
    <Layout>
      <Seo title='New Timer' />
      <main>
        <Form />
      </main>
    </Layout>
  )
}

export default IndexPage
