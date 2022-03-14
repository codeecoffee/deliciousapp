import React, { useEffect, useState } from 'react'
import recipesdbApi from '../api/recipesdbApi'

export default function Popular(){
  const [popular, setPopular] = useState([])

  useEffect(() => {
    const tempData = recipesdbApi.getPopular()
    console.log(tempData)
    setPopular(tempData)
  }, [])
  


  return(
    <div>Popular</div>
  )
}
