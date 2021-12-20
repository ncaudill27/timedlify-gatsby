import * as React from "react"
import styled from "styled-components"

import useCurrentUser from "../hooks/useCurrentUser"
import { GET_USER_ALERTS } from "../utils/graphql/queries"
import { useQuery } from "@apollo/client"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Button from "../components/button"
import Footer from "../components/footer"

const IndexPage = () => {
  const { user, error } = useCurrentUser()

  const {
    loading,
    error: apolloError,
    data: alerts = [],
  } = useQuery(GET_USER_ALERTS, {
    variables: { id: user.id },
  })

  return (
    <Layout>
      <Seo title='Home' />
      <StyledMain>
        {alerts.map(alert => (
          <Button style={{ backgroundColor: alert.color }}>{alert.name}</Button>
        ))}
        {/* <Button style={{ backgroundColor: "#ff7300" }}>HIIT Interval</Button>
        <Button style={{ backgroundColor: "#ff0000" }}>Work Wake-Up</Button>
        <Button style={{ backgroundColor: "#ae00ff" }}>Wind Down</Button> */}
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
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  padding-left: var(--spacing-1);
  padding-right: var(--spacing-1);
`

export default IndexPage
