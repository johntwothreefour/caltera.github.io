const pdfPath = 'assets/dl_files/charform.pdf'; // path to pdf

(async () => {
    const pdfBytes = await fetch(pdfPath).then(res => res.arrayBuffer());
    const pdfDoc = await PDFLib.PDFDocument.load(pdfBytes);

    // form fields visibility
    const form = pdfDoc.getForm();
    form.updateFieldAppearances();

    const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });

    // Embed the updated PDF to paage
    const pdfContainer = document.getElementById('pdf-container');
    const embed = document.createElement('embed');
    embed.src = pdfDataUri;
    embed.type = 'application/pdf';
    embed.style.width = '80%';
    embed.style.height = '900px';
    pdfContainer.appendChild(embed);
})();
