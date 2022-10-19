import styled, { createGlobalStyle } from "styled-components";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div``;

function App() {
  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState("");
  const [titulo, setTitulo] = useState("");

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          <FormularioCadastro
            setImagem={setImagem}
            imagem={imagem}
            descricao={descricao}
            setDescricao={setDescricao}
            titulo={titulo}
            setTitulo={setTitulo}
          />
        </aside>
        <TelaDaPostagem 
          imagem={imagem} 
          descricao={descricao} 
          titulo={titulo} 
        />
      </Container>
    </>
  );
}

export default App;
