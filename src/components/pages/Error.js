import React from 'react'
import { Link, useRouteError } from "react-router-dom";

function Error() {
    const error = useRouteError()
    console.log('ver error ==>',error)
  return (
    <div className='text-bolder text-dark'>NO EXISTE ESTA URL</div>
  )
}

export default Error