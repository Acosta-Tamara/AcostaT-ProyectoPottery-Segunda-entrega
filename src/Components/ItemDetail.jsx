import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Center } from "@chakra-ui/react";
import {useParams} from 'react-router-dom'
import ItemCount from './ItemCount'


const ItemDetail =  ( { productos }) => {
    const {id} = useParams();
    console.log(id)

    const filteredProducts = productos.filter((producto) => producto.id == id)

   return (
     <div>
        {filteredProducts.maps((p) => {
            return (
                <div key={p.id}>
                    <Center p= '1rem'>
                       <Card>
                         <CardHeader>
                           <Heading size='md'> {p.nombre} </Heading>
                        </CardHeader>
                        <CardBody>
                           <Text>{p.description} </Text>
                           <Text>{p.category} </Text>
                        </CardBody>
                        <CardFooter>
                            <ItemCount/>                    
                        </CardFooter>
                        </Card>
                     </Center>
                </div>
            )    
        })} 
    </div>
  )
}

export default ItemDetail