import { useState, useEffect } from 'react';
import Encabezado from './components/Encabezado'
import ProductoCard from './components/ProductoCard'
import FormProducto from './components/formProducto';
import { 
  obtenerProductos,
  registrarProducto 
} from './services/ProductoService';
import './App.css'

function App() {

  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const cargarProductos = async () => {
      try{
        const datos = await obtenerProductos();
        setProductos(datos);
      }
      catch(error){
        console.error("Error al cargar productos:", error);
      }
    }

    cargarProductos();

  }, []);

  const guardarProducto = async (nuevoProducto) => {
    try{
      await registrarProducto(nuevoProducto);

      const datos = await obtenerProductos();
      setProductos(datos);
      return true;
    }
    catch(error){
      console.error("Error al registrar producto", error)
      return false;
    }
  };

  const borrarProducto = async (id) => {
  try {
    await eliminarProducto(id);

    setProductos((productosActuales) =>
      productosActuales.filter(
        (producto) => producto.id !== id
      )
    );

  } catch (error) {
    console.error("Error al eliminar producto:", error);
    alert("No se pudo eliminar el producto");
  }
};

  return (
    <div className='contenedor'>
      <Encabezado />
      <h1>Registrar producto</h1>
      <FormProducto onRegistrar={guardarProducto}/>
      
      <h1>Lista de productos</h1>
      <div className='productos'>
        {productos.map((producto) => (
          <ProductoCard 
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            stock={producto.stock}
            onEliminar={borrarProducto}
          />
        ))}

      </div>
    </div>
  )
}

export default App
