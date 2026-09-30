function Futbol() {
  // 1. Array de 8 canciones con sus respectivos objetos
 const jugadores = [
  { numero: 1, nombre: "Emiliano", apellido: "Martínez", posicion: "Portero", edad: 32 },
  { numero: 2, nombre: "Dani", apellido: "Carvajal", posicion: "Lateral Derecho", edad: 32 },
  { numero: 4, nombre: "Ronald", apellido: "Araújo", posicion: "Defensa Central", edad: 25 },
  { numero: 5, nombre: "Virgil", apellido: "van Dijk", posicion: "Defensa Central", edad: 33 },
  { numero: 3, nombre: "Federico", apellido: "Dimarco", posicion: "Lateral Izquierdo", edad: 26 },
  { numero: 8, nombre: "Federico", apellido: "Valverde", posicion: "Centrocampista", edad: 26 },
  { numero: 16, nombre: "Rodri", apellido: "Hernández", posicion: "Pivote", edad: 28 },
  { numero: 10, nombre: "Luka", apellido: "Modrić", posicion: "Centrocampista", edad: 39 },
  { numero: 11, nombre: "Mohamed", apellido: "Salah", posicion: "Extremo Derecho", edad: 32 },
  { numero: 9, nombre: "Erling", apellido: "Haaland", posicion: "Delantero Centro", edad: 24 },
  { numero: 7, nombre: "Vinícius", apellido: "Júnior", posicion: "Extremo Izquierdo", edad: 24 }
];

  return (
    <div className="contenedor-jugadores">
        <p>Activivdad N6</p>
      <h2>Tabla de jugadores</h2>
      
      <table className="tabla-jugadores">
        <thead>
          <tr>
            <th>Numero</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>posicion</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {/* 2. Recorremos el arreglo con map() para generar cada fila */}
          {jugadores.map((jugadores) => (
            <tr key={jugadores.numero}>
              <td>{jugadores.numero}</td>
              <td>{jugadores.nombre}</td>
              <td>{jugadores.apellido}</td>
              <td>{jugadores.posicion}</td>
              <td>{jugadores.edad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Futbol;