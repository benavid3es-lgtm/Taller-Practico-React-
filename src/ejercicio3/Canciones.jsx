function TablaCanciones() {
  // 1. Array de 8 canciones con sus respectivos objetos
  const canciones = [
  { id: 1, titulo: "16 Lines", artista: "Lil Peep", album: "Come Over When You're Sober, Pt. 2", ano: 2018 },
  { id: 2, titulo: "Hell On Earth", artista: "Mobb Deep", album: "Hell on Earth", ano: 1996 },
  { id: 3, titulo: "Entre dos tierras", artista: "Héroes del Silencio", album: "Senderos de traición", ano: 1990 },
  { id: 4, titulo: "Find Me", artista: "Sigma ft. Birdy", album: "Find Me", ano: 2016 },
  { id: 5, titulo: "Molinos de viento", artista: "Mägo de Oz", album: "La leyenda de la Mancha", ano: 1998 },
  { id: 6, titulo: "Verano traidor", artista: "Vilma Palma e Vampiros", album: "3980", ano: 1993 },
  { id: 7, titulo: "Black and Yellow", artista: "Wiz Khalifa", album: "Rolling Papers", ano: 2010 },
  { id: 8, titulo: "Mojabi Ghost", artista: "Tainy & Bad Bunny", album: "DATA", ano: 2023 }
];

  return (
    <div className="contenedor-tabla">
        <p>Activivdad N3</p>
      <h2>Tabla de Canciones</h2>
      
      <table className="tabla-canciones">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Artista</th>
            <th>Álbum</th>
            <th>Año</th>
          </tr>
        </thead>
        <tbody>
          {/* 2. Recorremos el arreglo con map() para generar cada fila */}
          {canciones.map((cancion) => (
            <tr key={cancion.id}>
              <td>{cancion.id}</td>
              <td>{cancion.titulo}</td>
              <td>{cancion.artista}</td>
              <td>{cancion.album}</td>
              <td>{cancion.ano}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaCanciones;