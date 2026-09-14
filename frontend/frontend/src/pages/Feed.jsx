import { useState, useEffect } from "react"
import axios from "axios"

const Feed = () => {

    const [posts, setPosts] = useState([{
        id: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-D88bP4KNMu39p_FmL1aPo21TnGnVvjDedJ6cH5MQQ&s",
        caption: "This is a caption",
        likes: 0,

    }])

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get("http://localhost:3000/posts")
            setPosts(response.data.posts)
        }
        fetchPosts()
    }, [])

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/posts/${id}`)
        setPosts(posts.filter((post) => post._id !== id))
    }

    return (
        <section className='feed-section'>
            {
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id}>
                            <img src={post.image} alt="" />
                            <p>{post.caption}</p>
                            <button>Like</button>
                            <button onClick={() => handleDelete(post._id)}>Delete</button>
                        </div>
                    ))
                ) : (
                    <h2>No posts yet</h2>
                )
            }
        </section>
    )
}

export default Feed
