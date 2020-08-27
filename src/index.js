const express = require('express');
const morgan = require('morgan');
require('./database');

const app = express();

app.set('PORT', process.env.PORT || 3000);

app.use(morgan());
app.use(require('./routes/index.routes'));

app.listen(app.get('PORT'), () => {
    console.log(`server on port ${app.get('PORT')}`)
});