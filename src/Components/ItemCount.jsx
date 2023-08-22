import { useState } from "react"
import { AddIcon, MinusIcon, } from '@chakra-ui/icons'
import { Button, ButtonGroup, IconButton } from "@chakra-ui/react"

const ItemCount = () => {
    
    const [contador, setContador] = useState(0)

    const sumar = () => {
        if (contador < 10) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    // const reset = () => {
    //     setContador(0)
    // }


  return (
    <ButtonGroup size='md' isAttached variant='outline'>
        <IconButton onClick={sumar} icon={<MinusIcon/>} />
        <Button>{contador} </Button>
        <IconButton onClick={restar} icon={<AddIcon/>} />
    </ButtonGroup>    
  )
}

export default ItemCount