
import { Card, CardHeader, Heading, CardBody, Text, CardFooter, Button, } from "@chakra-ui/react"
import { Link, } from "react-router-dom"
const Item = ({id, nombre, description, category  }) => {
  
  return (
    <>  

      <Card>
        <CardHeader>
          <Heading size='md'> {nombre} </Heading>
        </CardHeader>
        <CardBody>
          <Text>{description} </Text>
          <Text>{category} </Text>
        </CardBody>
        <CardFooter>

        <Button>
            <Link to={`/item/${id}`}>
                Añadir  
            </Link>
        </Button>    
              
          
        </CardFooter>
      </Card>
    </>
  )
}

export default Item