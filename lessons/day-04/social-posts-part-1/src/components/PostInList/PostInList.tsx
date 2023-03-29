import React from 'react'
import { Post } from '../../types/posts'
import './PostInList.css';

interface PostInListProp {
  post: Post
}

// PostInList component recieves one prop -> post
export default function PostInList({ post }: PostInListProp) {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.thought}</p>
    </div>
  )
}
