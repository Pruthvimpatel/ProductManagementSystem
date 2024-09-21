import * as dotenv from 'dotenv';
import express from 'express';
dotenv.config();

const app = express();
app.use(express.json());

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
app.use((err: any, req: any,res: any, next: any) => {
    if(err.statusCode) {
        res.status(err.statusCode).json({message: err.message, code: err.code});

    } else {
        res.status(500).json({ message: 'Internal Server Error' });
  
    }
});

export default app;