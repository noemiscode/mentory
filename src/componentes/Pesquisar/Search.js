import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

function Search({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value === "") {
      onSearch("");
    }
  };

  return (
    <div className="campo-texto">
      <TextField
        label="Digite o nome do agente"
        value={search}
        onChange={handleSearch}
        variant="outlined"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => onSearch(search)}
        style={{ marginLeft: "10px" }}
      >
        Buscar
      </Button>
    </div>
  );
}

export default Search;
