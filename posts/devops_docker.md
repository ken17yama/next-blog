---
title: 'Docker'
created: '2020-08-02'
modified: '2020-08-02'
category: 'Docker'
tags: ['Docker']
---

こんにちは！
DevOpsエンジニアを目指したもののインフラの知識が無さすぎて、[Udemy](https://www.udemy.com/)でAWSの受講をはじめた、やまだです。

この記事では、Dockerについてのアウトプットとなります。（執筆中）

## 基本コマンド

- イメージのダウンロード
	```
	docker pull [hoge]
	```
- イメージの削除
	```
	docker rmi [hoge]
	```
- イメージの確認
	```
	docker images
	```
- コンテナを一覧表示
	```
	docker ps --all
	```
- コンテナの起動
	```
	docker start [hoge]
	```
- コンテナの停止
	```
	docker stop [hoge]
	```
- コンテナの削除
	```
	docker rm [hoge]
	```
- コンテナに入る
	```
	docker exec [hoge]
	```
