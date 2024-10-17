import React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material";
import { styled } from "@mui/system";

// Styled components
const StyledCard = styled(Card)({
  width: 280,
  borderRadius: "10px",
  boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.08)",
});

const StyledAvatar = styled(Avatar)({
  width: 100,
  height: 100,
  position: "relative",
  bottom: -50,
  border: "3px solid white",
});

const Header = styled("div")({
  backgroundColor: "#f0f0f0",
  borderRadius: "10px 10px 0 0",
  padding: "20px 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Content = styled(CardContent)({
  borderRadius: "0px 0px 10px 10px",
  textAlign: "center",
  padding: "70px 10px 40px",
});

const Colaborador = (props) => {
  return (
    <StyledCard>
      <Header>
        <StyledAvatar src={props.imagem} alt={props.nome} />
      </Header>
      <Content>
        <Typography
          variant="h6"
          component="h4"
          style={{ color: "#6278f7", fontWeight: "bold" }}
        >
          {props.nome}
        </Typography>
        <Typography variant="body2" component="h5" style={{ color: "#212121" }}>
          {props.cargo}
        </Typography>
      </Content>
    </StyledCard>
  );
};

export default Colaborador;
