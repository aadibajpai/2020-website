import React from "react"
import ScrollLock from 'react-scrolllock'
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import * as styles from './index.module.css'

const IndexPage = () => (
  <div id={styles.main}>
    <ScrollLock isActive={true} />
    <SEO title="Home" />
    <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
    <Layout id='root' />
  </div>
)

export default IndexPage
