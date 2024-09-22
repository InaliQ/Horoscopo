import React, { useState } from 'react';
import './Nacimiento.css'; // Archivo CSS para los estilos

function Nacimiento() {
    const [fecha, setFecha] = useState('');
    const [signoInfo, setSignoInfo] = useState(null);

    const horoscopo = [
        {
            "signo": "Aries",
            "fechaInicio": "21 de marzo",
            "fechaFin": "20 de abril",
            "descripcion": "Aries es el primer signo del zodíaco, conocido por su energía y entusiasmo.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Aries.svg/800px-Aries.svg.png"
        },
        {
            "signo": "Tauro",
            "fechaInicio": "21 de abril",
            "fechaFin": "21 de mayo",
            "descripcion": "Tauro es un signo de tierra, conocido por su paciencia y confiabilidad.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Taurus.svg"
        },
        {
            "signo": "Géminis",
            "fechaInicio": "22 de mayo",
            "fechaFin": "21 de junio",
            "descripcion": "Géminis es un signo de aire, conocido por su dualidad y adaptabilidad.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/1/15/Gemini.svg"
        },
        {
            "signo": "Cáncer",
            "fechaInicio": "22 de junio",
            "fechaFin": "22 de julio",
            "descripcion": "Cáncer es un signo de agua, conocido por su sensibilidad y empatía.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/2/29/Cancer.svg"
        },
        {
            "signo": "Leo",
            "fechaInicio": "23 de julio",
            "fechaFin": "22 de agosto",
            "descripcion": "Leo es un signo de fuego, conocido por su creatividad y liderazgo.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/9/99/Leo.svg"
        },
        {
            "signo": "Virgo",
            "fechaInicio": "23 de agosto",
            "fechaFin": "22 de septiembre",
            "descripcion": "Virgo es un signo de tierra, conocido por su precisión y atención al detalle.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Virgo.svg"
        },
        {
            "signo": "Libra",
            "fechaInicio": "23 de septiembre",
            "fechaFin": "22 de octubre",
            "descripcion": "Libra es un signo de aire, conocido por su sentido de la justicia y la armonía.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Libra.svg"
        },
        {
            "signo": "Escorpio",
            "fechaInicio": "23 de octubre",
            "fechaFin": "22 de noviembre",
            "descripcion": "Escorpio es un signo de agua, conocido por su intensidad y pasión.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Scorpio.svg"
        },
        {
            "signo": "Sagitario",
            "fechaInicio": "23 de noviembre",
            "fechaFin": "21 de diciembre",
            "descripcion": "Sagitario es un signo de fuego, conocido por su amor por la aventura y la libertad.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/8/80/Sagittarius.svg"
        },
        {
            "signo": "Capricornio",
            "fechaInicio": "22 de diciembre",
            "fechaFin": "20 de enero",
            "descripcion": "Capricornio es un signo de tierra, conocido por su disciplina y ambición.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/7/76/Capricorn.svg"
        },
        {
            "signo": "Acuario",
            "fechaInicio": "21 de enero",
            "fechaFin": "19 de febrero",
            "descripcion": "Acuario es un signo de aire, conocido por su originalidad y enfoque humanitario.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/2/24/Aquarius.svg"
        },
        {
            "signo": "Piscis",
            "fechaInicio": "20 de febrero",
            "fechaFin": "20 de marzo",
            "descripcion": "Piscis es un signo de agua, conocido por su intuición y sensibilidad.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/9/95/Pisces.svg"
        }
    ];
    

        

    const obtenerSigno = (fecha) => {
        const nacimiento = new Date(fecha);
        const dia = nacimiento.getDate();
        const mes = nacimiento.getMonth() + 1; // getMonth() devuelve un número de 0 a 11, sumamos 1 para hacer coincidir con las fechas del horóscopo.

        for (let i = 0; i < horoscopo.length; i++) {
            const signo = horoscopo[i];
            const [diaInicio, mesInicio] = signo.fechaInicio.split(' de ');
            const [diaFin, mesFin] = signo.fechaFin.split(' de ');

            // Convertimos las fechas de texto a números
            const fechaInicio = new Date(nacimiento.getFullYear(), obtenerMesNumero(mesInicio) - 1, diaInicio);
            const fechaFin = new Date(nacimiento.getFullYear(), obtenerMesNumero(mesFin) - 1, diaFin);

            if (nacimiento >= fechaInicio && nacimiento <= fechaFin) {
                return signo;
            }
        }
        return null;
    };

    const obtenerMesNumero = (mes) => {
        const meses = {
            'enero': 1,
            'febrero': 2,
            'marzo': 3,
            'abril': 4,
            'mayo': 5,
            'junio': 6,
            'julio': 7,
            'agosto': 8,
            'septiembre': 9,
            'octubre': 10,
            'noviembre': 11,
            'diciembre': 12
        };
        return meses[mes.toLowerCase()];
    };

    const handleDateChange = (event) => {
        const nuevaFecha = event.target.value;
        setFecha(nuevaFecha);
        const signo = obtenerSigno(nuevaFecha);
        setSignoInfo(signo);
    };

    return (
        <div className='nacimiento'>
            <h2 style={{padding:'10px'}}>Introduce tu fecha de nacimiento</h2>
            <input className='styled-input'
                type="date" 
                value={fecha} 
                onChange={handleDateChange}
            />
            {signoInfo && (
                <div className='signo-container'>
                    <div className='signo-info'>
                        <h3>Tu signo zodiacal es: {signoInfo.signo}</h3>
                        <p><strong>Fecha de inicio:</strong> {signoInfo.fechaInicio}</p>
                        <p><strong>Fecha de fin:</strong> {signoInfo.fechaFin}</p>
                        <p><strong>Descripción:</strong> {signoInfo.descripcion}</p>
                    </div>
                    <div className='signo-imagen'>
                        <img 
                            src={signoInfo.img} 
                            alt={signoInfo.signo}
                            style={{ width: '100px', height: '100px' }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Nacimiento;
