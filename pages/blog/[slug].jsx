import { useRouter } from "next/router";
function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <p>This is the blog post with the slug {slug}.</p>
    </div>
  );
}
export default BlogPost;
