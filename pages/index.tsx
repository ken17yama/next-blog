import Head from 'next/head'
import Link from 'next/link'

import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'

import Layout from '../components/layout'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.scss'

import { siteTitle } from '../config/global.config'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    created: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>記事一覧</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, created, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`${process.env.NODE_ENV === "production" ? "/next-blog" : ""}/posts/[id]${process.env.NODE_ENV === "production" ? ".html" : ""}`} as={`${process.env.NODE_ENV === "production" ? "/next-blog" : ""}/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={created} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
