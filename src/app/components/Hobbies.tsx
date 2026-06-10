const hobbies = [
  "Cozinhar",
  "Viajar",
  "Fotografia",
  "Jardinagem"];

  export const Hobbies = () => (
    <>
    <p>Meus hobbies são:</p>
    <ul className="list-disc pl-10">
      {hobbies.map((hobby, i) => (
        <li key={`hobby-${i}`}>{hobby}</li>
      ))}
    </ul>
    </>
  )