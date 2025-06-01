const container = document.getElementById('sistemas-container');

// Agrupar por categoria
const categorias = [...new Set(sistemas.map(s => s.categoria))];

categorias.forEach(categoria => {
    // Cria o título da categoria
    const titulo = document.createElement('h2');
    titulo.textContent = categoria;
    titulo.className = 'text-center';
    titulo.className = 'categoria-titulo';
    container.appendChild(titulo);

    // Cria a linha (row) para os cards dessa categoria
    const row = document.createElement('div');
    row.className = 'row mb-4';

    // Filtra os sistemas da categoria atual
    const sistemasFiltrados = sistemas.filter(s => s.categoria === categoria);

    sistemasFiltrados.forEach(sistema => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-3';

        const panelDiv = document.createElement('div');
        panelDiv.className = 'panel panel-default';

        const panelHeading = document.createElement('div');
        panelHeading.className = 'panel-heading';

        const headingTitle = document.createElement('h3');
        headingTitle.className = 'panel-title text-center';
        headingTitle.textContent = sistema.site;

        const panelBody = document.createElement('div');
        panelBody.className = 'panel-body text-center';

        const link = document.createElement('a');
        link.href = sistema.url;
        link.textContent = "Clique aqui";
        link.target = '_blank';

        panelHeading.appendChild(headingTitle);
        panelBody.appendChild(link);
        panelDiv.appendChild(panelHeading);
        panelDiv.appendChild(panelBody);
        colDiv.appendChild(panelDiv);

        row.appendChild(colDiv);
    });

    container.appendChild(row);
});