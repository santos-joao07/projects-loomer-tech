import React from "react";

import { Container, Box, BoxImage } from "../style/HomeStyles";

export default function Card({ boxData }) {
  return (
    <Container>
      {boxData.map(box => (
        <Box key={box.id} >
          <BoxImage src={box.image}/>
        </Box>
      ))}
    </Container>
  );
}