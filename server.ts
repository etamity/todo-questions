import express, { Request ,Response} from 'express';
import fs from 'fs'; 
import packageJson from './package.json'
// const fs = require('fs');

const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
});

app.get('/api/info', (req: Request, res: Response) => {
    // Your implementation here to read package.json
    // and send it to client
    res.send(packageJson);
});


app.listen(port, () => {
  console.log(`Api Server listening on port ${port}`)
})