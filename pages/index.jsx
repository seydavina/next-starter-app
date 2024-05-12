import Link from "next/link";
const IndexPage = () => {
  return (
    <div>
      <h1>My Next App</h1>
      <Link href="/movies">Movies</Link>
      <br />
      <Link href="/pokemon">Pokemon</Link>
      <br />
      <Link href="/about">About</Link>
    </div>
  );
};
export default IndexPage;
