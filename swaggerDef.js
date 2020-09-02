import path from 'path';

const SwaggerDefinition = {
    info: {
        title: 'MyHelloBotApiDoc',
        version: '1.0.0',
        description: 'MyHelloBot의 Api 문서입니다'
    },
    host: 'localhost:3000',
    basePath: '/',
    contact: {
        email: "louiminister@gmail.com"
    },
    components: {
        res: {
            Forbidden: { description: '권한이 없습니다.'},
            NotFound: {description: '존재하지 않는 정보입니다.'}
        }
    },
    schemes: ['http']
};


const swaggerDefinition2 = {
    info: { // API informations (required)
      title: 'Hello World', // Title (required)
      version: '1.0.0', // Version (required)
      description: 'A sample API', // Description (optional)
    },
    host: 'localhost:3000', // Host (optional)
    basePath: '/', // Base path (optional)
  }

export default {
    SwaggerDefinition: swaggerDefinition2,
    apis: ['./app.js']
    //apis:[path.join(__dirname + '/app.js')]
};


