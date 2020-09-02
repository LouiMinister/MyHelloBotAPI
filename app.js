import express from "express";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import swaggerOptions from './swaggerDef';

const app = express();

/**
 * @swagger
 * tags:
 *   name: Todo
 *   description: Todo management
 * definitions:
 *   Todo:
 *     type: object
 *     required:
 *       - content
 *     properties:
 *       _id:
 *         type: string
 *         description: ObjectID
 *       content:
 *         type: string
 *         description: 할일 내용
 *       done:
 *         type: boolean
 *         description: 완료 여부
 */

/**
 * @swagger
 * /todo:
 *   get:
 *     summary: Returns Todo list
 *     tags: [Todo]
 *     responses:
 *       200:
 *         description: todo list
 *         schema:
 *           type: object
 *           properties:
 *             todos:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Todo'
 */


app.get("/isApiWork", (req,res)=>{
    const result = "Api server is working";
    res.json({ result: result });
});


app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerOptions)));

app.listen(3000, ()=>{
    console.log("App started on port 3000");
});