function ProductoCard({nombre, precio, stock, categoria}){
    return(
        <article className="producto-card">
            <h1>{nombre}</h1>
            <p>Precio: ${precio}</p>
            <p>Stock: {stock}</p>
            <p>Categoria: {categoria}</p>
        </article>
    )
}

export default ProductoCard