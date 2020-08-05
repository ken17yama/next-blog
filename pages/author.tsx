import Head from 'next/head'

import Layout from '../components/layout'
import Author from '../components/author'

import { authorName } from '../config/global.config'

export default function AuthorPage() {
  return (
    <Layout>
      <>
        <Head>
          <title>{authorName}について</title>
        </Head>
        <Author authorName={authorName} />
      </>
    </Layout>
  )
}
