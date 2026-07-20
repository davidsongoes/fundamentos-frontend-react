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
  pokemons.results.forEach((pokemon) => {
    console.log("Pokemon: ", pokemon);
  });
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gap: "1rem",
      }}
    >
      {pokemons.results.map((pokemon: PokemonResults) => (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1rem",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          key={pokemon.name}
        >
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/").slice(-2, -1)[0]}.png`}
            alt={pokemon.name}
            style={{ marginBottom: "0.5rem" }}
          />
          <h3>#{pokemon.url.match(/\/(\d+)\/?$/)?.[1]}</h3>
          <h2>{pokemon.name}</h2>
        </div>
      ))}
    </div>
  );
}
