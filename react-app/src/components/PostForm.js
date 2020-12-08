import React from 'react'
import { useState } from 'react'
import { newPost } from '../services/auth';

function PostForm() {
    const [content, setContent] = useState('')
    const [caption, setCaption] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const post = await newPost(content, caption);
    }

    const updateContent = (e) => {
        setContent(e.target.value);
    };

    const updateCaption = (e) => {
        setCaption(e.target.value);
    };
    return (
        <div className='postForm'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Drawing</label>
                    <input
                        type="text"
                        name="drawing"
                        onChange={updateContent}
                        value={content}
                    />
                </div>
                <div>
                    <label htmlFor="">Caption</label>
                    <input
                        type="text"
                        name="caption"
                        onChange={updateCaption}
                        value={caption}
                    />
                </div>
                <button type="submit">Share Drawing</button>
            </form>
        </div>
    )
}

export default PostForm
