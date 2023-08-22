import { Center } from "@chakra-ui/react";
import {useParams} from 'react-router-dom'
import  ItemList from './ItemList'

const ItemListContainer = () => {
  const {category} = useParams()
  
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

   const filteredProducts = productos.filter((producto)=> producto.category === category)

   
  return (
    <Center p="1rem">
      {category ? <ItemList productos={filteredProducts} /> : <ItemList productos={filteredProducts} /> }
    </Center>
  );
}  

export default ItemListContainer