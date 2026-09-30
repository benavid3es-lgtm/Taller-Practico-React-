function Juegos() {
  // 1. Array de 8 canciones con sus respectivos objetos
 const juegos = [
  {  id:1, nombre: "The Forest", genero: "Supervivencia", plataforma: "PC / PS4", ano: 2018 },
  {  id:2, nombre: "Left 4 Dead 2", genero: "Shooter / Zombis", plataforma: "PC / Xbox 360", ano: 2009 },
  {  id:3,nombre: "Minecraft", genero: "Sandbox", plataforma: "Multiplataforma", ano: 2011 },
  {  id:4, nombre: "Grand Theft Auto V", genero: "Acción / Mundo Abierto", plataforma: "Multiplataforma", ano: 2013 },
  {  id:5, nombre: "Counter-Strike 2", genero: "Shooter Táctico", plataforma: "PC", ano: 2023 },
  {  id:6, nombre: "God of War", genero: "Acción / Aventura", plataforma: "PC / PS4", ano: 2018 },
  {  id:7,nombre: "Red Dead Redemption 2", genero: "Mundo Abierto / Cuyo", plataforma: "Multiplataforma", ano: 2018 },
  {  id:8,nombre: "Elden Ring", genero: "RPG de Acción", plataforma: "Multiplataforma", ano: 2022 }
];

  return (
    <div className="contenedor-juegos">
        <p>Activivdad N5</p>
      <h2>Tabla de juegos</h2>
      
      <table className="tabla-juegos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Plataforma</th>
            <th>Genero</th>
            <th>Año</th>
          </tr>
        </thead>
        <tbody>
          {/* 2. Recorremos el arreglo con map() para generar cada fila */}
          {juegos.map((juegos) => (
            <tr key={juegos.id}>
              <td>{juegos.id}</td>
              <td>{juegos.nombre}</td>
              <td>{juegos.plataforma}</td>
              <td>{juegos.genero}</td>
              <td>{juegos.ano}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Juegos;