import React from 'react';

function Horoscopo() {

    const data = [
        {
            "signo": "Aries",
            "fecha": "21 de marzo al 20 de abril",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Aries.svg/800px-Aries.svg.png"
        },
        {
            "signo": "Tauro",
            "fecha": "21 de abril al 21 de mayo",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Taurus_symbol.svg/800px-Taurus_symbol.svg.png"
        },
        {
            "signo": "Géminis",
            "fecha": "22 de mayo al 21 de junio",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Gemini_symbol_%282002%29.svg/800px-Gemini_symbol_%282002%29.svg.png"
        },
        {
            "signo": "Cáncer",
            "fecha": "22 de junio al 22 de julio",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Cancer_symbol_%281997%29.svg/800px-Cancer_symbol_%281997%29.svg.png"
        },
        {
            "signo": "Leo",
            "fecha": "23 de julio al 23 de agosto",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Leo_symbol_%281997%29.svg/800px-Leo_symbol_%281997%29.svg.png"
        },
        {
            "signo": "Virgo",
            "fecha": "24 de agosto al 23 de septiembre",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Virgo_symbol_%281997%29.svg/800px-Virgo_symbol_%281997%29.svg.png"
        },
        {
            "signo": "Libra",
            "fecha": "24 de septiembre al 23 de octubre",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Libra_symbol_%281997%29.svg/800px-Libra_symbol_%281997%29.svg.png"
        },
        {
            "signo": "Escorpio",
            "fecha": "24 de octubre al 22 de noviembre",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Scorpio_symbol_%281997%29.svg/800px-Scorpio_symbol_%281997%29.svg.png"
        }
    ];

    return (
        <div>
            <h1>Horóscopo</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {data.map((signo, index) => (
                    <div key={index} style={{ border: '1px solid #ddd', padding: '20px', textAlign: 'center' }}>
                        <img src={signo.img} alt={signo.signo} style={{ width: '100px', height: '100px' }} />
                        <h2>{signo.signo}</h2>
                        <p>{signo.fecha}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Horoscopo;
