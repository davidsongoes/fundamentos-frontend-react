const hobbies = ["Cozinhar", "Viajar", "Fotografia", "Jardinagem"];

export const Hobbies = () => {
  const [hobbiesPreferido, hobbiesPreferido2, ...outrosHobbies] = hobbies;

  const novosHobbies = ["Ciclismo"];
  const hobbiesAtualizados = [...outrosHobbies, ...novosHobbies];

  return (
    <div>
      <p>Meus hobbies são:</p>
      <ul className="list-disc pl-10">
        <li className="font-bold" style={{ color: "blue" }}>
          {hobbiesPreferido}
        </li>
        <li className="font-bold" style={{ color: "green" }}>
          {hobbiesPreferido2}
        </li>
        {hobbiesAtualizados.map((hobbyAtualizado, i) => (
          <li style={{ color: "yellow" }} key={`hobby-${i}`}>
            {hobbyAtualizado}
          </li>
        ))}
      </ul>
    </div>
  );
};
