import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import axios from "axios";

const PostForm = ({ open, onClose, addPost, editPost, initialData }) => {
  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (initialData) {
      setValue("title", initialData.title);
      setValue("body", initialData.body);
    } else {
      reset();
    }
  }, [initialData, setValue, reset]);

  const onSubmit = async (data) => {
    if (initialData) {
      const response = await axios.put(
        "https://jsonplaceholder.typicode.com/posts/${initialData.id}",
        data,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      editPost(response.data);
    } else {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        data,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      addPost(response.data);
    }
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{initialData ? "Edit Post" : "Create a Post"}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("title", { required: true })}
          />
          <TextField
            label="Body"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            {...register("body", { required: true })}
          />
          <Button type="submit" variant="contained" color="primary">
            {initialData ? "Update" : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default PostForm;