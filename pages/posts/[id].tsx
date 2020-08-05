import Head from 'next/head'

import { GetStaticProps, GetStaticPaths } from 'next'

import Layout from '../../components/layout'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.scss'

import { getAllPostIds, getPostData } from '../../lib/posts'
import { siteTitle } from '../../config/global.config'

export default function Post({
	postData
}: {
	postData: {
		title: string
		created: string
		modified: string
		contentHtml: string
	}
}) {
	return (
		<Layout>
			<Head>
				<title>{postData.title} | {siteTitle}</title>
			</Head>
			<article>
				<h1 className={utilStyles.headingXl}>{postData.title}</h1>
				<div className={utilStyles.lightText}>
					<p className={utilStyles.dateText}>投稿日：<Date dateString={postData.created} /></p>
					<p className={utilStyles.dateText}>更新日：<Date dateString={postData.modified} /></p>
				</div>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</Layout>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData = await getPostData(params.id as string)
	return {
		props: {
			postData
		}
	}
}
