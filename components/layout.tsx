import Head from 'next/head'

import GlobalHeader from './globalHeader'
import HomeLink from './homeLink'
import styles from './layout.module.scss'

import { siteTitle, authorName } from '../config/global.config'

export default function Layout({
	children,
	home
}: {
	children: React.ReactNode
	home?: boolean
}) {
	return (
		<div className={styles.container}>
			<Head>
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<meta
					property="og:image"
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
				<link rel="shortcut icon" href={`${process.env.NODE_ENV === "production" ? "/next-blog" : ""}/images/favicon.ico`}></link>
			</Head>
			<GlobalHeader siteTitle={siteTitle} authorName={authorName} />
			<main>
				{children}
				{!home && (
					<HomeLink />
				)}
			</main>


		</div>
	)
}
