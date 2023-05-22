import * as express from 'express';
import { Application } from 'express';
import { getAllProducts, getProductByUrl } from './get-products.route';
import { loginUser } from './auth.route';
import { saveProduct } from './save-product.route';
import { createProduct } from './create-products.route';
import { deleteProduct } from './delete-product.route';

const bodyParser = require('body-parser');

const app: Application = express();

const cors = require('cors');

app.use(cors({ origin: true }));

app.use(bodyParser.json());

app.route('/api/login').post(loginUser);

app.route('/api/products').get(getAllProducts);

app.route('/api/product').post(createProduct);

app.route('/api/product/:id').put(saveProduct);

app.route('/api/product/:id').delete(deleteProduct);

app.route('/api/products/:productUrl').get(getProductByUrl);

// app.route('/api/lessons').get(searchLessons);

const httpServer: any = app.listen(9000, () => {
  console.log(
    'HTTP REST API Server running at http://localhost:' +
      httpServer.address().port
  );
});
