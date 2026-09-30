function Platos () {

    const  carta = [
    { 
        id: 1, 
        nombre: "Bandeja Paisa",
        categoria: "Plato Fuerte", 
        precio: 32000,
        imagen:"data:image/jpeg;base64,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"
    },
    { 
        id: 2, 
        nombre: "Ajiaco Santafereño", 
        categoria: "Sopas", 
        precio: 25000, 
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFBpkx8a-X03lfJH-lxDdDzyUX27zlsy2oA-osPEhXIQ&s=10"
    },
    { 
        id: 3, 
        nombre: "Sancocho de Gallina", 
        categoria: "Sopas", 
        precio: 22000,
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAnM7d226sTkFc05tMa62ySn7JqHPLA20nB-e3hbftg&s=10"
    },
    { 
        id: 4,
        nombre: "Lomo al Trapo", 
        categoria: "Carnes", 
        precio: 38000 ,
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7BCmEAUum3z3Asys4ko4mw3pMi-vX8CVgo8GNIuysA&s=10"
    },
    { 
        id: 5, 
        nombre: "Empanadas de Pipián", 
        categoria: "Entradas", 
        precio: 12000 ,
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUhAy7Ao24N0jjJmPptTmjgYPcI_1lGVLlOeaJoEpBJA&s=10"
    },
    { 
        id: 6, 
        nombre: "Pargo Rojo Frito", 
        categoria: "Pescados", 
        precio: 35000 ,
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMTaaqVRGQclmoHQqxZfhf9Is49JX9cvmC8VYJ_Dc3xw&s=10"
    },
    { 
        id: 7, 
        nombre: "Ceviche de Camarón", 
        categoria: "Entradas", 
        precio: 28000 ,
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI46M02mzOsfgnYzFJzwqEoEXR2QSdZmh6kIyuhjjImQ&s=10"
    },
    { 
        id: 8, 
        nombre: "Arroz con Pollo", 
        categoria: "Plato Fuerte", 
        precio: 20000, 
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrzbCl-94_qHXNgWUmHZk41woZgaxcGTQjvbMSG-Ra6A&s=10"
    },
    { 
        id: 9, 
        nombre: "Flan de Arequipe",
        categoria: "Postres", 
        precio: 10000 ,
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKV7aujIxSzSMI0gpFTpqQGq0HP0Vh75OPK74E9GSdcw&s=10"
    },
    { 
        id: 10, 
        nombre: "Limonada de Coco", 
        categoria: "Bebidas", 
        precio: 9000 ,
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABD-h-eSv0HaPM6oNLMpugP4_EGhQP6iTKduyzxlfIA&s=10"
    }

    ];
    return (
    <div className="contenedor-carta">
        <p>Actividad N8</p>
      <h2>Carta del dia</h2>
      
      <div>
                {carta.map((a)=>(
                    <div className="plato">
                        <p>{a.id}</p>
                        <h3>{a.nombre}</h3>
                        <img src={a.imagen} alt={a.nombre} />
                            <p>Categoria: {a.categoria}</p>
                            <p>Precio: {a.precio}</p>
                        
                       
                       
                       
                    </div>
                ))}
            </div>
    </div>
  );
}
export default Platos;