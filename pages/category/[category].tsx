import Head from 'next/head'
import Link from 'next/link'

import { GetStaticProps, GetStaticPaths } from 'next'

import Layout from '../../components/layout'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.scss'

import { getAllPostCategories, getCategoryPosts } from '../../lib/posts'
import { siteTitle } from '../../config/global.config'

export default function Post({
	category,
	postData
}: {
	category: string
	postData: {
		id: string
		title: string
		created: string
	}[]
}) {
	return (
		<Layout>
			<Head>
				<title>「{category}」カテゴリーの記事一覧 | {siteTitle}</title>
			</Head>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>「{category}」カテゴリーの記事一覧</h2>
				<ul className={utilStyles.list}>
					{postData.map(({ id, created, title }) => (
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

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllPostCategories()
	return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData = await getCategoryPosts(params.category as string)
	const category = params.category as string
	return {
		props: {
			category,
			postData
		}
	}
}
