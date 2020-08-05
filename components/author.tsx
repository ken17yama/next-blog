

import AuthorIcon from '../components/authorIcon'
import AuthorName from '../components/authorName'
import styles from '../components/author.module.scss'

import { authorIntroduction } from '../config/global.config'

export default function Author({
	authorName
}: {
	authorName: string
}) {
	return (
		<div className={styles.container}>
			<AuthorIcon author authorName={authorName} />
			<AuthorName authorName={authorName} />
			<section className={styles.headingMd}>
				<p className={styles.authorIntroduction}>{authorIntroduction}</p>
			</section>
		</div>
	)
}
