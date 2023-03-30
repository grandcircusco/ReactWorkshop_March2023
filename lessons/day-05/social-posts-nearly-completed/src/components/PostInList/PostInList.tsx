import React from 'react'
import { Post } from '../../types/posts'
import './PostInList.css';
interface PostInListProp {
  post: Post;
  deletePost: (id: string) => void;
}

// PostInList component recieves one prop -> post
export default function PostInList({ post, deletePost }: PostInListProp) {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.thought}</p>
      <h1 className="delete-button" onClick={() => deletePost(post.id)}>x</h1>
    </div>
  )
}
