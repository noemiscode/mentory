import { useEffect, useState } from "react";
import Banner from "./componentes/Banner/Banner";
import axios from "axios";
import Colaborador from "./componentes/Colaborador/Colaborador";
import Search from "./componentes/Pesquisar/Search";
import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";

function App() {
  /* const [agents, setAgents] = useState([]);
  const [filteredAgents, setFilteredAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await axios.get(
          "https://valorant-api.com/v1/agents?language=pt-BR&isPlayableCharacter=true"
        );
        setAgents(response.data.data);
        setFilteredAgents(response.data.data);
      } catch (error) {
        console.error(error, "Error ao buscar os agentes");
      }
    };
    fetchAgents();
  }, []);

  const onSearch = (search) => {
    if (search) {
      const filtered = agents.filter((agent) =>
        agent.displayName.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredAgents(filtered);
    } else {
      setFilteredAgents(agents);
    }
  };

  return (
    <div className="App">
      <Banner />
      <div className="Container">
        <Search onSearch={onSearch} />
        <div className="flex-container">
          {filteredAgents.map((agente, idx) => (
            <div key={idx} className="flex-item">
              <Colaborador
                corDeFundo={agente.background}
                key={agente.uuid}
                nome={agente.displayName}
                cargo={agente.role?.displayName}
                imagem={agente.displayIcon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );*/
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  </Router>
  )
}

export default App;
