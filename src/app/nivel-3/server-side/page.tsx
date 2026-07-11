export default async function Page() {
  type Pokemon = {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonResults[];
  };

  type PokemonResults = {
    name: string;
    url: string;
  };

  const data = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000",
  );
  //   const data = await fetch("https://api.vercel.app/blog");
  const pokemons: Pokemon = await data.json();
  //   const posts = await data.json();
  console.log(pokemons);
  return (
    <ul>
      {pokemons.results.map((pokemon: PokemonResults) => (
        <div style={{ border: "1rem", margin: "1rem" }} key={pokemon.name}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/").slice(-2, -1)[0]}.png`}
            alt={pokemon.name}
          />
          <h2>{pokemon.name}</h2>
        </div>
      ))}
    </ul>
  );
}
