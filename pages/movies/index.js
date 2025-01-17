import Link from "next/link";
import Head from "next/head.js";
import { movies } from "@/lib/data.js";

export default function Movies() {
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
    </>
  );
}

/*
function Andrea(name) {
  console.log(name);
} // Function Declaration: Parameter

Andrea("Andrea"); // Function Call: Argument
*/
