import { useRouter } from "next/router";
function BlogPostComments() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <h1>Comments for Blog Post: {slug}</h1>
      <p>This is the comments page for the blog post with the slug {slug}.</p>
    </div>
  );
}
export default BlogPostComments;
