function ListaCiudades(){
    let ciudades =[
        "Medellin",
        "Bogota",
        "Cali",
        "Barranquilla",
        "Cartagena",
        "Pereira",
        "Manizales",
        "Cucuta",
        "Popayab",
        "Bucaramanga",

    ];

    return(
        <div className="contendor-ciudades">
            <p>Actividad N2</p>
            <h2>Lista de ciudades</h2>

            <ul className="Lista-ciudades">
                {ciudades.map((ciudad,index) =>(
                    <li key={index} className="item-ciudad">
                        {ciudad}
                    </li>
                ))}
            </ul>

        </div>
    )
}
export default ListaCiudades;