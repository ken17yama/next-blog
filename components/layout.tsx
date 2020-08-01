import Head from 'next/head'
import Link from 'next/link'

import HomeLink from './homeLink'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'

const name: string = "やまだ"
export const siteTitle: string = 'やまだがエンジニアになるブログ'

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
			<header className={styles.header}>
				{home ? (
					<>
						<img
							src={`${process.env.NODE_ENV === "production" ? "/next-blog" : ""}/images/icon_cypress.png`}
							className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
							alt={name}
						/>
						<h1 className={styles.headingName}>{name}</h1>
					</>
				) : (
						<>
							<Link href={`/${process.env.NODE_ENV === "production" ? "next-blog" : ""}`}>
								<a>
									<img
										src={`${process.env.NODE_ENV === "production" ? "/next-blog" : ""}/images/icon_cypress.png`}
										className={`${styles.headerImage} ${utilStyles.borderCircle}`}
										alt={name}
									/>
								</a>
							</Link>
							<h2 className={utilStyles.headingLg}>
								<Link href={`/${process.env.NODE_ENV === "production" ? "next-blog" : ""}`}>
									<a className={utilStyles.colorInherit}>{name}</a>
								</Link>
							</h2>
						</>
					)}
			</header>
			<main>{children}</main>
			{!home && (
				<HomeLink />
			)}
		</div>
	)
}
