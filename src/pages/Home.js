import React, { useState, useEffect } from "react";
import PostForm from "../componentes/PostForm";
import TablePost from "../componentes/TablePost";
import { Button } from "@mui/material";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editPostData, setEditPostData] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data.slice(0, 5));
    };
    fetchPosts();
  }, []);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  const editPost = (updatedPost) => {
    setPosts(
      posts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  };

  const handleEdit = (postId) => {
    const postToEdit = posts.find((post) => post.id === postId);
    setEditPostData(postToEdit);
    setOpenModal(true);
  };

  const handleDelete = async (postId) => {
    try {
      await axios.delete(
        "https://jsonplaceholder.typicode.com/posts/${postId}"
      );
      setPosts(posts.filter((post) => post.id !== postId));
      console.log("Post deletado com sucesso", postId);
    } catch (error) {
      console.error("Erro ao deletar o post", error);
    }
  };

  const handleOpenModal = () => {
    setEditPostData(null);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Button onClick={handleOpenModal} variant="contained" color="primary">
        Add New Post
      </Button>
      <PostForm
        open={openModal}
        onClose={handleCloseModal}
        addPost={addPost}
        editPost={editPost}
        initialData={editPostData}
      />
      <TablePost posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Home;