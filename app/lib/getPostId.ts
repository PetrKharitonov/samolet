export default async function getPostId(id: number) {
    const res = await fetch(
      `http://a1010350.xsph.ru/wp-json/wp/v2/post-content/?id=${id}`
    );
    return res.json();
  }
  