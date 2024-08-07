import React from 'react'
import { useParams } from 'react-router-dom'
import { userSingleData } from '../../service/useSingleData'
import { SingleCard } from '../../components/single-card'
import { Loading } from '../../components/loading'

export const SinglePage = () => {
    const {id} = useParams()
    const {data, isLoading} = userSingleData(id)
  return (
    <>
    <div className="">
        {isLoading ? <Loading/> : <SingleCard {...data}/>}
    </div>
    </>
  )
}
