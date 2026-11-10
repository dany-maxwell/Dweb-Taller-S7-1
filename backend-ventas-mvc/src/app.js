import express from 'express';
import cors from "cors";
import productoRoutes from './routes/productoRoutes.js';

const app = express();
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send("API Sistema de Ventas MVC");
});

app.use("/api/productos", productoRoutes);

export default app;



