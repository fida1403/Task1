import React, { useEffect, useState } from 'react'
import './usefetch.css'
import Table from './Table'

const UseFetch = () => {

    const API_URL = "https://jsonplaceholder.typicode.com/posts"
    const [isLoading, setIsloading] = useState(false)
    const [error, setError] = useState()
    const [posts, setPosts] = useState()

    const Fetch_posts = async() =>{
        setIsloading(true)
        try{
            await new Promise(resolve => setTimeout(resolve, 2000));
            const response = await fetch(API_URL)
            const data = await response.json()
            setPosts(data)
        }
        catch(error){
            setError(error)
        }
        setIsloading(false)
    }

    useEffect(() => {
        Fetch_posts()
    },[])

    const refresh = () => {
        setIsloading(true);
        setError();
        setPosts();
        Fetch_posts();
    }

    if(isLoading){
       return <h1>Loading....</h1>
    }

    if(error){
        return <h1>Something went wrong, try again..</h1>
    }

  return (
    <div>
      <button className='refresh-btn' onClick={refresh}>Refresh</button>
      <Table posts={posts} />
    </div>
  )
}

export default UseFetch
