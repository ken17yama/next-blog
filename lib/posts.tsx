import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
	// /posts　配下のファイル名を取得する
	const fileNames = fs.readdirSync(postsDirectory)
	const allPostsData = fileNames.map(fileName => {
		// id を取得するためにファイル名から ".md" を削除する
		const id = fileName.replace(/\.md$/, '')

		// マークダウンファイルを文字列として読み取る
		const fullPath = path.join(postsDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		// 投稿のメタデータ部分を解析するために gray-matter を使う
		const matterResult = matter(fileContents)

		// データを id と合わせる
		return {
			id,
			...(matterResult.data as { modified: string; title: string })
		}
	})
	// 投稿を日付でソートする
	return allPostsData.sort((a, b) => {
		if (a.modified < b.modified) {
			return 1
		} else {
			return -1
		}
	})
}

export function getCategories() {
	// /posts　配下のファイル名を取得する
	const fileNames = fs.readdirSync(postsDirectory)
	const allPostsData = fileNames.map(fileName => {
		// id を取得するためにファイル名から ".md" を削除する
		// const id = fileName.replace(/\.md$/, '')

		// マークダウンファイルを文字列として読み取る
		const fullPath = path.join(postsDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		// 投稿のメタデータ部分を解析するために gray-matter を使う
		const matterResult = matter(fileContents)

		// console.log(...(matterResult.data.title))

		// データを id と合わせる
		return {
			...(matterResult.data)
		}
	})
	let categories: string[] = new Array<string>()
	allPostsData.forEach(element => categories.push(element.category));
	categories = [...new Set(categories)];
	return categories
}

export function getTags() {
	// /posts　配下のファイル名を取得する
	const fileNames = fs.readdirSync(postsDirectory)
	const allPostsData = fileNames.map(fileName => {
		// id を取得するためにファイル名から ".md" を削除する
		// const id = fileName.replace(/\.md$/, '')

		// マークダウンファイルを文字列として読み取る
		const fullPath = path.join(postsDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		// 投稿のメタデータ部分を解析するために gray-matter を使う
		const matterResult = matter(fileContents)

		// console.log(...(matterResult.data.title))

		// データを id と合わせる
		return {
			...(matterResult.data)
		}
	})
	let tags: string[] = new Array<string>()
	allPostsData.forEach(element => {
		element.tags.forEach(element => {
			tags.push(element)
		})
	});
	tags = [...new Set(tags)];
	return tags
}

export async function getPostData(id) {
	const fullPath = path.join(postsDirectory, `${id}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')

	// 投稿のメタデータ部分を解析するために gray-matter を使う
	const matterResult = matter(fileContents)

	// マークダウンを HTML 文字列に変換するために remark を使う
	const processedContent = await remark()
		.use(html)
		.process(matterResult.content)
	const contentHtml = processedContent.toString()

	// データを id および contentHtml と組み合わせる
	return {
		id,
		contentHtml,
		...(matterResult.data as { modified: string; title: string })
	}
}

export async function getTagPosts(tag) {
	// /posts　配下のファイル名を取得する
	const fileNames = fs.readdirSync(postsDirectory)
	const allPostsData = fileNames.map(fileName => {
		// id を取得するためにファイル名から ".md" を削除する
		const id = fileName.replace(/\.md$/, '')

		// マークダウンファイルを文字列として読み取る
		const fullPath = path.join(postsDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		// 投稿のメタデータ部分を解析するために gray-matter を使う
		const matterResult = matter(fileContents)

		// データを id と合わせる
		return {
			id,
			...(matterResult.data as {
				modified: string; title: string; tags: string[]
			})
		}
	})

	const targetPostData = allPostsData.filter(function (item) {
		if ((item.tags).indexOf(tag) >= 0) return true;
	});

	// 投稿を日付でソートする
	return targetPostData.sort((a, b) => {
		if (a.modified < b.modified) {
			return 1
		} else {
			return -1
		}
	})
}


export async function getCategoryPosts(category) {
	// /posts　配下のファイル名を取得する
	const fileNames = fs.readdirSync(postsDirectory)
	const allPostsData = fileNames.map(fileName => {
		// id を取得するためにファイル名から ".md" を削除する
		const id = fileName.replace(/\.md$/, '')

		// マークダウンファイルを文字列として読み取る
		const fullPath = path.join(postsDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		// 投稿のメタデータ部分を解析するために gray-matter を使う
		const matterResult = matter(fileContents)

		// データを id と合わせる
		return {
			id,
			...(matterResult.data as {
				modified: string; title: string; category: string
			})
		}
	})

	const targetPostData = allPostsData.filter(function (item) {
		if ((item.category).indexOf(category) >= 0) return true;
	});

	// 投稿を日付でソートする
	return targetPostData.sort((a, b) => {
		if (a.modified < b.modified) {
			return 1
		} else {
			return -1
		}
	})
}


export function getAllPostIds() {
	const fileNames = fs.readdirSync(postsDirectory)
	return fileNames.map(fileName => {
		return {
			params: {
				id: fileName.replace(/\.md$/, '')
			}
		}
	})
}

export function getAllPostTags() {
	const tags = getTags()
	return tags.map(tag => {
		return {
			params: {
				tag: tag
			}
		}
	})
}

export function getAllPostCategories() {
	const categories = getCategories()
	return categories.map(category => {
		return {
			params: {
				category: category
			}
		}
	})
}
