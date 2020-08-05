import Head from 'next/head'

import Layout from '../components/layout'
import Author from '../components/author'

import { siteTitle, authorName } from '../config/global.config'

export default function AuthorPage() {
  return (
    <Layout>
      <>
        <Head>
          <title>{authorName}について | {siteTitle}</title>
        </Head>
        <Author authorName={authorName} />
      </>
    </Layout>
  )
}
