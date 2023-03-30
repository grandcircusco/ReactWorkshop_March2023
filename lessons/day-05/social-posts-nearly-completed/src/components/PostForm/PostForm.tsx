import React, { useState } from 'react';
import { v4 } from 'uuid';
import { Post } from '../../types/posts';
import "./PostForm.css";

interface PostFormProps {
    setFormVisible: (visible: boolean) => void;
    onSubmitForm: (post: Post) => void;
};

export default function PostForm({ setFormVisible, onSubmitForm }: PostFormProps) {
    const [title, setTitle] = useState('');
    const [thought, setThought] = useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // form validation 
        let newPost: Post = {
            title,
            thought,
            id: v4()
        }
        // clear inputs
        setTitle('');
        setThought('');
        onSubmitForm(newPost)
        // close form
        setFormVisible(false);
    }

    return (
        <div className="post-form">
            <h3>Add your thoughts</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <p>Title: </p>
                    <input onChange={e => setTitle(e.target.value)} value={title} />
                </div>
                <div>
                    <p>Thought: </p>
                    <input onChange={e => setThought(e.target.value)} value={thought} />
                </div>
                <button type="submit">Add Post</button>
            </form>
            <h1 className="close-logo" onClick={() => setFormVisible(false)}>x</h1>
        </div>
    )
}