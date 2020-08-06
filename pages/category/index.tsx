import Head from 'next/head'
import Link from 'next/link'

import { getCategories } from '../../lib/posts'
import { GetStaticProps } from 'next'

import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.scss'

import { siteTitle } from '../../config/global.config'

export default function Categories({
	allCategories
}: {
	allCategories: {
		category: string
	}[]
}) {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>カテゴリー一覧</h2>
				<ul className={utilStyles.list}>
					{allCategories.map((category) => (
						<li key={category.toString()}>
							<Link href={`${process.env.NODE_ENV === "production" ? "/next-blog" : ""}/category/[category]${process.env.NODE_ENV === "production" ? ".html" : ""}`} as={`${process.env.NODE_ENV === "production" ? "/next-blog" : ""}/category/${category}`}>
								<a>{category}</a>
							</Link>
						</li>
					))}

				</ul>
			</section>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const allCategories = getCategories()
	return {
		props: {
			allCategories
		}
	}
}
