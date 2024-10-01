import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import blogFetch from "../axios/config"

import './Home.css'

const Home = () => {

  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    try {

      const response = await blogFetch.get("/posts")

      setPosts(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    getPosts()

  }, [])


  return (
    <div className="home">
      <h1>Últimos posts</h1>
      {posts.length === 0 ? <p>Carregando...</p> : (
        posts.map((posts) => (
          <div className="post" key={posts.id}>
            <h2>{posts.title}</h2>
            <p>{posts.body}</p>
            <Link to={`/posts/${posts.id}`} className="btn">
              Ler mais
            </Link>
          </div>
        ))
      )}
    </div>
  )
}

export default Home