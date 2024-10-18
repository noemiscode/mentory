import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TablePost = ({ posts, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Body</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell component="th" scope="row">
                {post.title}
              </TableCell>
              <TableCell align="right">{post.body}</TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => onEdit(post.id)}
                  startIcon={<EditIcon />}
                  color="primary"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => onDelete(post.id)}
                  startIcon={<DeleteIcon />}
                  color="secondary"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablePost;