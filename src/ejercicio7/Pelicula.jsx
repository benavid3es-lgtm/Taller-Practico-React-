function Pelicula () {

    const peliculas = [
    {
        id: 1,
        titulo: "Inception", 
        director: "Christopher Nolan", 
        genero: "Ciencia Ficción", 
        ano: 2010, duracion: "148 min", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP0yN2Sv63a6uWFCTbBqqVeF7xkgoZIou1q7cIEmARGA&s=10"
    },
    { 
        id: 2, 
        titulo: "El Caballero De La Noche", 
        director: "Christopher Nolan", 
        genero: "Acción", ano: 2008, 
        duracion: "152 min", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYnhusTs5SZyVGn5hHqPPBvqjJzx0DWTt2IFt7eqPNA&s=10" 
    },
    { 
        id: 3,
        titulo: "Interstellar", 
        director: "Christopher Nolan", 
        genero: "Ciencia Ficción", 
        ano: 2014, duracion: "169 min",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN6MBU9VxzNxqU0gzzOsgDR0Mpxn4_6BDHIzD-Xc8YaQ&s=10"
    },
    {
        id: 4, 
        titulo: "Pulp Fiction", 
        director: "Quentin Tarantino", 
        genero: "Crimen", 
        ano: 1994, 
        duracion: "154 min", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlktW_I8zKpDz3bOZkNOfqUGPRBKx2IIE2XvC27R3Law&s=10" 
    },
    { 
        id: 5,
        titulo: "Matrix",
        director: "Hermanas Wachowski", 
        genero: "Ciencia Ficción", 
        ano: 1999, duracion: "136 min", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwEPhKx3Zxv_Kpc5TFmox9LmpuBsPomCYGsGIF-_mrjw&s=10" 
    },
    { 
        id: 6, 
        titulo: "Gladiator", 
        director: "Ridley Scott", 
        genero: "Acción", 
        ano: 2000, 
        duracion: "155 min", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbop-XcVCmNHm4YVRhlQAk7GDOwuGauLE9zwAbEW__wQ&s=10" 
    },
    { 
        id: 7, 
        titulo: "Spider-Man: Into the Spider-Verse", 
        director: "Bob Persichetti", 
        genero: "Animación", 
        ano: 2018, 
        duracion: "117 min", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGL_IyfdxyaXH1HcIaRKj0uIoJMXispZHKOM70IMXaEg&s=10" 
    },
    { 
        id: 8, 
        titulo: "Fight Club", 
        director: "David Fincher", 
        genero: "Drama", 
        ano: 1999, 
        duracion: "139 min", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdVEGq3LWH1MW-0GidTrGHI-b5EjRkO9-sSX5xIDqONw&s=10" 
    },
    { 
        id: 9, 
        titulo: "Whiplash", 
        director: "Damien Chazelle", 
        genero: "Drama / Música", 
        ano: 2014, 
        duracion: "106 min", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrS6e21jqglr105yldeWnf3-GpAdfy0yyq2wnrOYC1qw&s=10" 
    },
    { 
        id: 10, 
        titulo: "Oppenheimer", 
        director: "Christopher Nolan", 
        genero: "Biografía", 
        ano: 2023, 
        duracion: "180 min", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbXOOY6Bsqpc1gmWhOVZdBZ1doOmnNsiA1djLiVYwJA&s=10" 
    
    }

    ];
    return (
    <div className="contenedor-peliculas">
        <p>Actividad N7</p>
      <h2>Lista de Peliculas</h2>
      
      <div>
                {peliculas.map((a)=>(
                    <div className="tarjetas">
                        <p>{a.id}</p>
                        <h3>{a.titulo}</h3>
                        <img src={a.imagen} alt={a.nombre} />
                        <div className="info-style">
                            <p>Director: {a.director}</p>
                            <p>Genero: {a.genero}</p>
                            <p>Año: {a.ano}</p>
                            <p>Duracion: {a.duracion}</p>

                        </div>
                       
                       
                    </div>
                ))}
            </div>
    </div>
  );
}
export default Pelicula;