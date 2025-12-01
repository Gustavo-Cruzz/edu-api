const express = require('express');
const app = express();

app.get('/calc', (req, res) => {
    const expr = req.query.expr || '2+2';
    
    // Insecure eval
    const result = eval(expr);
    
    res.json({ result });
});

app.listen(3000, () => console.log('Server running'));
