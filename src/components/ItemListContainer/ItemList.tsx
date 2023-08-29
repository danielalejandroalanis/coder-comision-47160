import React, { FC } from 'react'

type Products = {
    id: number,
    name: string,
    description: string,
    // hola: string
}

interface Propiedades {
    numero: number,
    name: string,
    data: Array<Products>
}

const ItemList: FC<Propiedades> = ({numero, name, data}) => {
  return (
    // <div>{data[0].hola}</div>
    <div></div>
  )
}

export default ItemList