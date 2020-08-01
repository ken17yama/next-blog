import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Custom404() {
	return (
		<div className={styles.container}>
			<Head>
				<title>ページが見つかりません。</title>
				<meta name="robots" content="noindex" />
				<link rel="shortcut icon" href={`${process.env.NODE_ENV === "production" ? "/next-blog" : ""}/images/favicon.ico`}></link>
			</Head>
			<h1>404 - Page Not Found</h1>
			<p>ごめんなさい...<br />お探しのページが見つかりませんでした。</p>
			<div className={styles.backToHome}>
				<Link href={`/${process.env.NODE_ENV === "production" ? "next-blog" : ""}`}>
					<a>← Homeに戻る</a>
				</Link>
			</div>
		</div>
	)
}
