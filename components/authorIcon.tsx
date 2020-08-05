import styles from '../components/authorIcon.module.scss'

export default function authorIcon({
	author,
	authorName
}: {
	author?: boolean
	authorName: string
}) {
	return (
		<>
			<img
				src={`${process.env.NODE_ENV === "production" ? "/next-blog" : ""}/images/icon_cypress.png`}
				className={`${styles.borderCircle} ${styles.headerImage} ${author && styles.authorImage}`}
				alt={authorName}
			/>
		</>
	)
}
