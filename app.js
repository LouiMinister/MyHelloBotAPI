import express from "express";
import logger from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import swaggerOptions from './swaggerDef';
import v1Router from './routes/version/v1Router';

const app = express();

app.use(express.json());
app.use(logger('short'));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerOptions)));
app.use('/v1/api', v1Router );

app.use((req, res) => {
    res.status(404).send("Sorry Not Found");
    console.log("404 ERROR");
});
app.use( (error, req, res, next) => {
    console.log(error);
});
app.listen(3000, ()=>{
    console.log("App started on port 3000");
});