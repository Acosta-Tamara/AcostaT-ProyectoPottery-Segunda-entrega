import Item from "./Item"


const ItemList = ({productos}) => {
  return (
    <>
       {productos.map((p) => {
      return ( 
        <Item key={p.id} id={p.id} nombre={p.nombre} description= {p.desciption} stock={p.stock}
        />
      )
    })
    }
    </>
  )
}  

export default ItemList