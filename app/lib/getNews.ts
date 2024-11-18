export default async function getNews(num: number) {
    const res = await fetch(`http://a1010350.xsph.ru/wp-json/wp/v2/post-content/?post_type=news&posts_per_page=${num}`
    )

    return res.json()
}