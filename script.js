document.getElementById('download').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("¡Feliz San Valentín!", 10, 10);
    doc.text("Este es un mensaje bonito para ti.", 10, 20);

    doc.save("mensaje_san_valentin.pdf");
});