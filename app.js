const express = require('express');  // Importa o módulo express
const path = require('path');        // Importa o módulo path para trabalhar com caminhos de diretório

const app = express();  // Cria uma instância do Express

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal (raiz) que servirá o arquivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicializa o servidor na porta 3000 ou uma porta fornecida pelo ambiente (no Render, por exemplo)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
