export async function getStaticProps() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await response.json();
  return {
    props: { allPokemons: data.results },
  };
}

export default function PokemonPage({ allPokemons }) {
  return (
    <ul>
      {allPokemons.map(poke => (
        <li key={poke.url}>{poke.name}</li>
      ))}
    </ul>
  );
}
