export async function getStaticProps() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await response.json();
  return {
    props: { allPokemons: data.results },
  };
}

export default function PokemonPage({ allPokemons }) {
  return (
    <div>
      {allPokemons.map(poke => (
        <dl>
          <dt key={poke.url}>{poke.name}</dt>
          <dd>{poke.url}</dd>
        </dl>
      ))}
    </div>
  );
}
