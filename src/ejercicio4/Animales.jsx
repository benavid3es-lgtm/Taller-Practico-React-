function Animales () {

    const lista = [
        {  
            nombre: "Lucas",
            especie: "Perro",
            habitat: "Ciudad", 
            imagen: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300" 
        },
        { 
            nombre: "Michi",
            especie: "Gato",
            habitat: "Casa",
            imagen: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300"
        },
        { 
            nombre: "Simba", 
            especie: "León", habitat: "Sabana",
            imagen: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=300" 
        },
        { 
            nombre: "Bamby", 
            especie: "Ciervo", 
            habitat: "Bosque", 
            imagen: "https://images.unsplash.com/photo-1484406566174-9da000fda645?w=300"
        },
        { 
            nombre: "Dumbo", 
            especie: "Elefante", 
            habitat: "Selva", 
            imagen: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=300"
        },
        {  
            nombre: "Nemo", 
            especie: "Pez Payaso", 
            habitat: "Océano", 
            imagen: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=300" 
        },
        { 
            nombre: "Koko",
            especie: "Gorila", 
            habitat: "Selva", 
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdKIWT0VQZ9CgQjZaCg2c6YIOgntQupLpmEtgX52nkg&s=10" 
        },
        {  
            nombre: "Perry", 
            especie: "Ornitorrinco",
            habitat: "Río", 
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj2B351e6PSYpsN_2Wknj2eqXOFY2rlwQ0OktBFCtblA&s=10"
        },
        { 
            nombre: "Pico", 
            especie: "Tucán", 
            habitat: "Bosque Tropical", 
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiCNIF457r8ghnD1-k-fI2O64AZlfaxlgm6vdBzoq__Q&s=100"
        },
        {  
            nombre: "Sombra", 
            especie: "Lobo", 
            habitat: "Montaña", 
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMaL89OmBmAjYKMvLDszJbRtyEby0ICZFKKEsV-u5XNg&s" 
        }
    
    ];
    return (
    <div className="contenedor-animales">
        <p>Actividad N4</p>
      <h2>Lista de Animales</h2>
      
      <div>
                {lista.map((a)=>(
                    <div className="tarjeta">
                        <p>Nombre: {a.nombre}</p>
                        <img src={a.imagen} alt={a.nombre} />
                        <p>Especie: {a.especie}</p>
                        <p>Habitad: {a.habitat}</p>
                       
                    </div>
                ))}
            </div>
    </div>
  );
}
export default Animales;