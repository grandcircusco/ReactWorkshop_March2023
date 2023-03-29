import React from 'react';
import "./PostForm.css";

interface PostFormProps {
    formVisible: boolean;
    setFormVisible: (visible: boolean) => void;
};

export default function PostForm({ formVisible, setFormVisible }: PostFormProps) {
    return (
        <div className="post-form" style={{ display: formVisible ? undefined : "none" }}>
            <h3>Add your thoughts</h3>
            <button onClick={() => setFormVisible(false)}>Close</button>
        </div>
    )
}