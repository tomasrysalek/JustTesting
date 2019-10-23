import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 4433;

app.use(bodyParser.json())
app.listen(port)
app.get('/',(req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
   res.write('Hi There')
   res.end()
})