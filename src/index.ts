import express from 'express';
import config from '@/config';

const app = express();

app.get('/', (req, resp) => {
  resp.json({
    message: 'Hello this is app we care solutions',
  });
});

app.listen(config.PORT, () => {
  console.log(`Server is running on http://localhost:${config.PORT}`);
});
