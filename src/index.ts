import express from 'express';
import routes from './infraestructure/api/routes';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use('/api', routes);   

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});