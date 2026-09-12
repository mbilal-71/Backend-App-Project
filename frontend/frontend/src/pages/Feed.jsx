import { useState } from "react"

const Feed = () => {

    const [posts, setPosts] = useState([{
        id: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-D88bP4KNMu39p_FmL1aPo21TnGnVvjDedJ6cH5MQQ&s",
        caption: "This is a caption",
        likes: 0,
        username: "John",
        comments: [
            {
                username: "Jane",
                comment: "Nice"
            }
        ]
    }])


    return (
        <section className='feed-section'>
            {
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post.id}>
                            <img src={post.image} alt="" />
                            <p>{post.caption}</p>
                            <button>Like</button>
                            <p>{post.likes} likes</p>
                            {post.comments.map((comment) => (
                                <p key={comment.username}>{comment.username}: {comment.comment}</p>
                            ))}
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
