import Link from 'next/link'
import styles from './homeLink.module.scss'

export default function Layout() {
	return (
		<div className={styles.backToHome}>
			<Link href={`/${process.env.NODE_ENV === "production" ? "next-blog" : ""}`}>
				<a>← Homeに戻る</a>
			</Link>
		</div>
	)
}
