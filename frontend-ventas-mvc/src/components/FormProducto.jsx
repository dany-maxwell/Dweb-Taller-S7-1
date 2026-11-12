import { useState } from "react";

function FormProducto( {onRegistrar} ){
    const [nombre, setNombre] = useState("")
    const [precio, setPrecio] = useState("")
    const [stock, setStock] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault()
        const nuevoProducto = {
            nombre: nombre.trim(),
            precio: Number(precio),
            stock: Number(stock)
        }
        const registrado = await onRegistrar(nuevoProducto)

        if (registrado) {
            setNombre("")
            setStock("")
            setPrecio("")
        }
    }

    return(
        <form className="formulario-producto" onSubmit={manejarEnvio}>
            <h2>Registrar Producto</h2>
            <div>
                <label>Nombre: </label>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Precio: </label>
                <input
                    type="number"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    min="0.01"
                    step="0.01"
                    required
                />
            </div>
            <div>
                <label>Stock: </label>
                <input
                    type="number"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    min="0"
                    step="1"
                    required
                />
            </div>
            <button type="submit">
                Guardar Producto
            </button>
        </form >
    )
}

export default FormProducto