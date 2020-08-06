import Head from 'next/head'
import Link from 'next/link'

import { getTags, getTagPosts } from '../../lib/posts'
import { GetStaticProps } from 'next'

import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.scss'

import { siteTitle } from '../../config/global.config'

export default function Tags({
	allTags
}: {
	allTags: {
		category: string
	}[]
}) {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>タグ一覧</h2>
				<ul className={utilStyles.list}>
					{allTags.map((tag) => (
						<li key={tag.toString()}>
							<Link href={`${process.env.NODE_ENV === "production" ? "/next-blog" : ""}/tag/[tag]${process.env.NODE_ENV === "production" ? ".html" : ""}`} as={`${process.env.NODE_ENV === "production" ? "/next-blog" : ""}/tag/${tag}`}>
								<a>{tag}</a>
							</Link>
						</li>
					))}

				</ul>
			</section>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const allTags = getTags()
	const TagPosts = await getTagPosts("DevOps")
	console.log(TagPosts)
	return {
		props: {
			allTags
		}
	}
}
