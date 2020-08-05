import Head from 'next/head'
import Link from 'next/link'

import AuthorIcon from './authorIcon'
import styles from './globalHeader.module.scss'

export default function globalHeader({
	siteTitle,
	authorName
}: {
	siteTitle: string,
	authorName: string
}) {
	return (
		<header className={styles.header}>
			<Head>
				<link href="https://fonts.googleapis.com/earlyaccess/nicomoji.css" rel="stylesheet" />
			</Head>
			<div className={styles.siteTitle}>
				<Link href={`/${process.env.NODE_ENV === "production" ? "next-blog" : ""}`}>
					<a dangerouslySetInnerHTML={{ __html: siteTitle }}></a>
				</Link>
			</div>
			<div className={styles.authorLink}>
				<Link href={`${process.env.NODE_ENV === "production" ? "/next-blog" : ""}/author`}>
					<a><AuthorIcon authorName={authorName} /></a>
				</Link>
			</div>
		</header>
	)
}
