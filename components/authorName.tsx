import styles from '../components/authorName.module.scss'

export default function AuthorName({
	authorName
}: {
	authorName: string
}) {
	return (
		<>
			<h1 className={styles.authorName}>{authorName}</h1>
		</>
	)
}
