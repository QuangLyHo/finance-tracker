import 'dotenv/config';
import express from 'express';

import accountsRouter from './src/routes/accounts.js'
import categoriesRouter from './src/routes/categories.js'
import transactionsRouter from './src/routes/transactions.js'
import errorHandler from './src/middleware/errorHandler.js'

const app = express();

app.use(express.json());

app.use('/api/accounts', accountsRouter)
app.use('/api/categories', categoriesRouter)
app.use('/api/transactions', transactionsRouter)

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    `Server running on port ${PORT}`
})
