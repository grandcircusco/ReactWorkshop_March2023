import React, { useState } from 'react'
import { Post } from '../../types/posts'
import PostForm from '../PostForm/PostForm';
import PostsInList from '../PostInList/PostInList';
import './SocialPosts.css';

const MOCK_POSTS: Post[] = [
  {
    title: "I wish I could build twitter.",
    thought: "Twitter is a great platform"
  },
  {
    title: "Why to buy NVIDIA.",
    thought: "NVIDIA makes really awesome graphics cards"
  },
  {
    title: "Why to buy apple.",
    thought: "Apples chips are the best chips for development"
  }
];

export default function SocialPosts() {
  const [formVisible, setFormVisible] = useState(false);
  return (
    <div className="social-posts">
      {MOCK_POSTS.map(item => <PostsInList post={item} />)}

      {/* below we make a toggle by flipping the boolean value of our state */}
      <button onClick={() => setFormVisible(true)}>Add New Thought</button>

      {/* the prop we pass, will control the forms visibility */}
      {/* to control state from child components, we can pass a prop to update the state */}
      <PostForm formVisible={formVisible} setFormVisible={setFormVisible} />
    </div>
  )
}
