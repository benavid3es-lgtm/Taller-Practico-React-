
function Libro() {
  let nombre = "Tarjetas";
  
  let portada = [
    {
      Titulo: "Cien años de soledad",
      imagen: "",
      Autor: "Gabriel García Márquez",
      Año_publicado: "1967",
      Editorial: "Sudamericana",
      numero_paginas: "471",
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwzt1PPzI2XtTBL351qGJPxDmrk6AqtGGD8PF0JuxbmUcpDLVbG_v0_WcM&s=10"
    }
  ];

  return (
    <div>
      <div>
        <h1>{nombre}</h1>
      </div>
      <div>
        {/* Usamos la función flecha (a) => (...) */}
        {portada.map((a, index) => (
          <div key={index} className="tarjeta-libro">
            <h2>{a.Titulo}</h2>
            {a.imagen && <img src={a.imagen} alt={a.Titulo} /> }
            <p><strong>Autor:</strong> {a.Autor}</p>
            <p><strong>Año:</strong> {a.Año_publicado}</p>
            <p><strong>Editorial:</strong> {a.Editorial}</p>
            <p><strong>Páginas:</strong> {a.numero_paginas}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}


export default Libro;