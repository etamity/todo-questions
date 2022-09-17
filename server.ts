import express, { Request ,Response} from 'express';

const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
});

app.get('/api/info', (req: Request, res: Response) => {
    // Your implementation here to read package.json
    // and send it to client
});

app.listen(port, () => {
  console.log(`Api Server listening on port ${port}`)
})