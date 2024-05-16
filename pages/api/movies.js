export default async function handler(req, res) {
    const response = await fetch("https://reactnative.dev/movies.json");
    const movies = await response.json();
    res.status(200).json(movies.movies);
}