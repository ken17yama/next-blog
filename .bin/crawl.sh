#!/bin/bash

# URL 先頭部分
domain="https://ken17yama.github.io/next-blog"

# sitemap.xml 登録リストの生成
sitemaps=`find html/ -name *.html`
sitemaps=${sitemaps/html\/404.html/}
sitemaps=${sitemaps/html\/50x.html/}

# sitemap.xml の作成
cat << EOS > html/sitemap.xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
EOS
for path in ${sitemaps}
do
  page=${path#html/}
  old=old/${page}
  page=${page/index.html/}

  # 変更チェック
  if [ -e ${old} ]; then
    prevmod=`date "+%s" -r ${old}`

    if diff ${path} ${old} > /dev/null 2>&1; then
      # 変更なしの場合、古い更新日時を継承する
      mv ${old} ${path}
    fi
  else
    # 新規ファイルの場合、前回の更新時間は1970年1月1日とみなす
    prevmod=0
  fi

  # <loc> の生成
  loc=`echo "${domain}/${page}" | recode utf8..html`

  # <changefreq> の生成
  elapsed=$((`date "+%s"` - ${prevmod}))
  if [ ${elapsed} -le $((60*60)) ];then
    changefreq="hourly"
  elif [ ${elapsed} -le $((60*60*24)) ];then
    changefreq="daily"
  elif [ ${elapsed} -le $((60*60*24*7)) ];then
    changefreq="weekly"
  elif [ ${elapsed} -le $((60*60*24*28)) ];then
    changefreq="monthly"
  else
    changefreq="yearly"
  fi

  # <lastmod> の生成
  # W3C Datetime: https://www.w3.org/TR/NOTE-datetime
  lastmod=`date "+%Y-%m-%dT%H:%M:%S%:z" -r ${path}`

  # <url> の登録
  echo "<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq></url>" >> ../.github/workflows/sitemap.xml
done
echo "</urlset>" >> ../.github/workflows/sitemap.xml
