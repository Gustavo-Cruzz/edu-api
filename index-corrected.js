const express = require('express');
const app = express();

// Exemplo: cálculo simples via função segura
app.get('/calc', (req, res) => {
    const expr = req.query.expr || '2+2';

    // Não use eval; suporte apenas números e +,-,*,/
    // O código abaixo usa regex para validar a entrada antes de executar
    const safe = expr.match(/^[0-9+\-*/ ().]+$/) ? Function('return ' + expr)() : null;

    res.json({ result: safe });
});

app.listen(3000, () => console.log('Server running'));
