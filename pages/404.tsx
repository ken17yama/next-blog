import Head from 'next/head'

import Layout from '../components/layout'

export default function Custom404() {
	return (
		<Layout>
			<Head>
				<title>ページが見つかりません。</title>
				<meta name="robots" content="noindex" />
				<link rel="shortcut icon" href={`${process.env.NODE_ENV === "production" ? "/next-blog" : ""}/images/favicon.ico`}></link>
			</Head>
			<h1>404 - Page Not Found</h1>
			<p>ごめんなさい...<br />お探しのページが見つかりませんでした。</p>
		</Layout>
	)
}
