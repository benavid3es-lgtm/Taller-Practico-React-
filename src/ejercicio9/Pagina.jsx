function Gimnasio() {
  // 1. Información principal usando variables
  const nombreGimnasio = "Iron Fitness Club";
  const eslogan = "Transforma tu cuerpo, fortalece tu mente";
  const direccion = "Calle 5 # 12-34, Centro";
  const horario = "Lunes a Viernes: 6:00 AM - 10:00 PM | Sábados: 8:00 AM - 4:00 PM";

  //Array//
  const servicios = [
    { 
        nombre: "Zona de Pesas Libres", 
        categoria: "Musculación", 
        nivel: "Todos los niveles" 
    },
    { 
        nombre: "Spinning Cardiovascular", 
        categoria: "Cardio", 
        nivel: "Intermedio / Avanzado" 
    },
    { 
        nombre: "Clases de Yoga y Flexibilidad", 
        categoria: "Mente y Cuerpo", 
        ivel: "Principiante" 
    },
    { 
        nombre: "Entrenamiento Funcional (Cross)", 
        categoria: "Resistencia", 
        nivel: "Avanzado" 
    },
    { 
        nombre: "Pilates en Suelo",
        categoria: "Postural",
        nivel: "Todos los niveles" },
    { 
        nombre: "Boxeo y Artes Marciales", 
        categoria: "Contacto", 
        nivel: "Intermedio" 
    },
    { 
        nombre: "Área de Máquinas Guiadas", 
        categoria: "Musculación",
        nivel: "Principiante" 
    },
    { 
        nombre: "Evaluación Antropométrica", 
        categoria: "Salud", 
        nivel: "General" }
  ];

  const planes = [
    { plan: "Plan Básico", duracion: "1 Mes", precio: "$90.000", beneficio: "Acceso a zona de pesas y máquinas" },
    { plan: "Plan VIP", duracion: "1 Año", precio: "$800.000", beneficio: "Acceso total + Clases dirigidas" }
  ];

  return (
    <div className="contenedor-gimnasio">
      <p>Actividad Final</p>

      
      <header>
        <h1>{nombreGimnasio}</h1>
        <p><em>"{eslogan}"</em></p>
      </header>

      <section className="info-gimnasio">
        <h2>Información General</h2>
        <p><strong>Ubicación:</strong> {direccion}</p>
        <p><strong>Horario de atención:</strong> {horario}</p>
      </section>

      {/* Renderizado con map() */}
      <section>
        <h2>Servicios y Áreas</h2>
        <div>
          {servicios.map((a) => (
            <div key={a.id} className="tarjeta">
              <h3>{a.nombre}</h3>
              <div className="tarjeta-info">
                <p><strong>Categoría:</strong> {a.categoria}</p>
                <p><strong>Exigencia:</strong> {a.nivel}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    
      <section>
        
            <h2>Planes de Membresía</h2>
            <table className="tabla-pagina">
                <thead>
                <tr>
                    <th>Plan</th>
                    <th>Beneficio</th>
                    <th>Duracion</th>
                    <th>Precio</th>
                
                </tr>
                </thead>
                <tbody>
                
                {planes.map((planes) => (
                    <tr key={planes.id}>
                    <td>{planes.plan}</td>
                    <td>{planes.beneficio}</td>
                    <td>{planes.duracion}</td>
                    <td>{planes.precio}</td>
                    
                    </tr>
                ))}
                </tbody>
            </table>
        
        <h2>Requisitos de Ingreso</h2>
        <ul style={{ color: '#cbd5e1', paddingLeft: '20px' }}>
          <li>1. Uso obligatorio de toalla personal.</li>
          <li>2. Calzado deportivo limpio.</li>
          <li>3. Hidratación en recipiente plástico.</li>
        </ul>
      </section>
    </div>
  );
}

export default Gimnasio;