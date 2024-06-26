import  express  from "express";
import  cors  from "cors";
import dotenv from  "dotenv"
import  {dbConnection}  from "./database/dbConnection.js";
import {errorMiddleware} from "./error/error.js"
import router from './routes/reserveRoute.js'

const app = express();
dotenv.config({path: "./config/.env"});

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["POST"],
    credentials: true
})
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/reservation',  router);

app.get("/", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD",
  });
});

dbConnection();

app.use(errorMiddleware);

export default app;