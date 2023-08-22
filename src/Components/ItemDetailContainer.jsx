import ItemDetail from "./ItemDetail";
const ItemDetailContainer = () => {
 
        const productos = [
          {id: 1, nombre: "Producto A", description: "Descripcion del Producto A", stock: 5, category: "cat1"},
          {id: 2, nombre: "Producto B", description: "Descripcion del Producto B", stock: 10, category: "cat2"},
          {id: 3, nombre: "Producto C", description: "Descripcion del Producto C", stock: 20, category: "cat3"},
        ]
         const getProductos = new Promise((resolve, reject) => {
           if (productos.length > 0) {
             setTimeout(() => {
               resolve(productos);
             }, 2000);
           } else {
             reject(new Error("No hay datos"));
           }
         });
      
         getProductos
         .then((res)=> {
          console.log(res)
         })
         .catch((error)=> {
          console.log(error)
         })
      
         
        return (
          <>
            <ItemDetail productos={productos} />
          </>
        );
      }



export default ItemDetailContainer