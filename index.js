const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/bienvenida', (req, res) => {
    const hoy = new Date();
    const mes = hoy.getMonth() + 1; // Enero es 0
    const dia = hoy.getDate();

    let imagenUrl = "https://cdn.pixabay.com/photo/2017/03/26/10/45/welcome-2175196_1280.jpg";
    let mensaje = "¡Bienvenido a nuestra App!";

    // Ejemplo de lógica por fechas
    if (mes === 1 && dia === 1) {
        imagenUrl = "https://cdn.pixabay.com/photo/2017/03/26/10/45/welcome-2175196_1280.jpg";
        mensaje = "¡Feliz Año Nuevo 2026!";
    } else if (mes === 2 && dia === 14) {
        imagenUrl = "https://tu-dominio.com/san-valentin.jpg";
        mensaje = "¡Feliz San Valentín!";
    } else if (mes >= 12) {
        imagenUrl = "https://cdn.pixabay.com/photo/2017/03/26/10/45/welcome-2175196_1280.jpg";
        mensaje = "¡Felices Fiestas!";
    }

    res.json({
        status: "success",
        data: {
            url: imagenUrl,
            message: mensaje,
            date_checked: hoy.toISOString()
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor REST corriendo en puerto ${PORT}`);
});