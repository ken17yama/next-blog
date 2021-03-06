---
title: 'JavaScriptで二次元配列をソートする'
created: '2020-08-09'
modified: '2020-08-09'
category: 'JavaScript'
tags: ['JavaScript', 'ソート']
---

こんにちは！<br>
学生時代から計算量についての問題から逃げ続けていたのでそろそろ向き合う決心をした、やまだです。

この記事では、**JavaScriptで二次元配列をソートする**方法のアウトプットです。

まずは、配列の最初の要素をキーとしてソートする方法です。<br>
sortの引数にソート順を定義する**比較関数**を定義します。
```
var array = [[6,2,'やまだ'], [3,9,'たなか'], [1,7,'やまざき'], [4,0,'よしだ'], [8,5,'さわべ']]

array.sort((a,b) => {
	return(a[0] - b[0])
})
console.log(array)
```

> [<br>
　[1, 7, "やまざき"],<br>
　[3, 9, "たなか"],<br>
　[4, 0, "よしだ"],<br>
　[6, 2, "やまだ"],<br>
　[8, 5, "さわべ"]<br>
]


次は、配列の2番目の要素をキーにソートしてみます。
先ほどのコードとの違いは、**比較関数**のブラケット(角括弧)の中身つまり、比較したい配列の番号を入力すれば良いのです！
```
var array = [[6,2,'やまだ'], [3,9,'たなか'], [1,7,'やまざき'], [4,0,'よしだ'], [8,5,'さわべ']]

array.sort((a,b) => {
	return(a[1] - b[1])
})
console.log(array)
```

> [<br>
　[4, 0, "よしだ"],<br>
　[6, 2, "やまだ"],<br>
　[8, 5, "さわべ"],<br>
　[1, 7, "やまざき"],<br>
　[3, 9, "たなか"]<br>
]

思い通りに出力できましたね！ではまた！
