import express from 'express';
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import todosRoutes from './routers/todos';
import schema from './schemas/schema';
import controllers from './controllers/controllers';

dotenv.config({
  path: '.env',
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: controllers,
}));

app.use(todosRoutes);

app.listen(3000);
