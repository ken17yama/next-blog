---
title: 'GitBashにaliasを登録する（永続化）'
created: '2020-08-02'
modified: '2020-08-02'
category: 'DevOps'
tags: ['DevOps', 'alias']
---

こんにちは！<br>
コマンドを全部手打ちするのがめんどくさいと思ってきた、やまだです。

この記事では、GitBashでaliasを登録する方法についてのアウトプットになります。

## aliasとは
**alias**とはコマンドを別名で登録したり、削除したりできるLinuxのコマンドです。<br>	
**alias**コマンド自体はGitBashで利用できるのですが、永続化することができません。<br>	
今回は**alias**をWindowsのGitBashでも永続化できるように設定していこうと思います。

## .bash_profileを作成
まずは既に**.bash_profile**があるかどうか確認してみましょう。
```
ls ~/.bash_profile
```
> ls: cannot access '/c/Users/[ユーザ名]/.bash_profile': No such file or directory

こちらのような結果になった場合は、新規にファイルを作成していきましょう。
```
touch ~/.bash_profile
```
> /c/Users/[ユーザ名]/.bash_profile

こちらのような結果になれば準備OKです！


## aliasの登録（永続化）
aliasの登録自体はviコマンドで行っても、エディタでファイルを編集しても問題ないです。
このように記述してください。
```
alias [名前]=[実際に実行するコマンド]
例）alias ls="-al"
```

## aliasの確認
GitBashを**再起動して**、**alias**コマンドを叩いてみましょう。
```
alias
```
追加したエイリアスが登録されているでしょうか？
では、実際に登録したエイリアスを実行してみましょう。

以上でエイリアスの登録は完了です。

## 参考
- [【 alias 】コマンド／【 unalias 】コマンド――コマンドの別名（エイリアス）を登録する／削除する](https://www.atmarkit.co.jp/ait/articles/1703/24/news012.html)
- [Git Bashでのalias設定方法](https://qiita.com/ma_me/items/f76295f3da9579043bbc)
