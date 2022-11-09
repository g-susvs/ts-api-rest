import express, {Application} from 'express';
import cors from 'cors';
import userRoutes from '../routes/usuarios';
import db from '../db/connection';

class Server{

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8800';

        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection(){
        try {
            
            db.authenticate()
            console.log('BD online !!!')

        } catch (error) {
            console.log(error);
        }
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    listen(): void{
        this.app.listen(this.port, ()=>{
            console.log(`http://localhost:${this.port}`)
        })
    }

}

export default Server;