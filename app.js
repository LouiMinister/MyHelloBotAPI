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


const mysql = require('mysql');
// Connection 객체 생성 
const connection = mysql.createConnection({
  host: 'myhellobot.clt3woxx18bh.ap-northeast-2.rds.amazonaws.com',
  port: 3306,
  user: 'admin',   
  password: 'masterpassword',
  database: 'myhellobot'  
});  
// Connect
connection.connect(function (err) {   
  if (err) {     
    console.error('mysql connection error');     
    console.error(err);     
    throw err;   
  } 
});

app.get('/dbcheck', function (req, res) {

    var query = connection.query(
        `SELECT * FROM chatbot_friends`, function (err, rows, field) {
      if (err) {
        console.error(err);
        throw err;
      }
      res.status(200).json({id : rows[0].id, name : rows[0].name});
      console.log("rows");
    });
  });


app.listen(3000, ()=>{
    console.log("App started on port 3000");
});