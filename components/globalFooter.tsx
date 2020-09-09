import styles from './globalFooter.module.scss'

export default function globalHeader() {
	return (
		<footer className={styles.footer}>
			<div className={styles.copyright}>
				Copyright &copy; 2020 やまだのログ All Rights Resarved.
			</div>
		</footer>
	)
}
