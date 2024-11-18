export default async function getPosts(category: string) {
  const res = await fetch(
    `http://a1010350.xsph.ru/wp-json/wp/v2/post-content/?category=${category}`
  );

  
  return await res.json();
}


