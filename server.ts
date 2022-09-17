import express, { Request ,Response} from 'express';
import packageJson from './package.json' assert { type: "json" };

const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
});

app.get('/api/info', (req: Request, res: Response) => {
    res.send(packageJson);
});

app.listen(port, () => {
  console.log(`Api Server listening on port ${port}`)
})