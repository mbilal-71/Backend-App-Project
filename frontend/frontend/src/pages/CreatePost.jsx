import React from 'react'

const CreatePost = () => {
    return (

        <section className='create-post-section' >

            <h2>Create Post</h2>
            <form>
                <input type="file" name='image' accept='image/*' />
                <input type='text' name="caption" placeholder='Write a caption...' required />

                <button type='submit'>Post</button>

            </form>

        </section>

    )
}

export default CreatePost
