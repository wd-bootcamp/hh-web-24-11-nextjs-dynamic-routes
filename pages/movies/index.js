import Link from "next/link";
import Head from "next/head.js";
import { useRouter } from "next/router.js";
import { movies } from "@/lib/data.js";

export default function Movies() {
  const router = useRouter();

  function handleRandomRedirect() {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];
    router.push(`/movies/${randomMovie.slug}`);
  }

  return (
    <>
      <Head>
        <title>List of Movies</title>
      </Head>
      <h1>List of Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.slug}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleRandomRedirect}>Suprise me!</button>
    </>
  );
}

/*
function Andrea(name) {
  console.log(name);
} // Function Declaration: Parameter

Andrea("Andrea"); // Function Call: Argument
*/
