import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = (props) => {
  const onChangeImagem = (event) => {
    // console.log("onchange",event.target.value);
    props.setImagem(event.target.value);
  };
  const onChangeDescricao = (event) => {
    // console.log("descricao", event.target.value);
    props.setDescricao(event.target.value);
  };
  const onChangeTitulo = (event) => {
    // console.log("descricao", event.target.value);
    props.setTitulo(event.target.value);
  };

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" onChange={onChangeImagem} value={props.imagem} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input
            id="descricao"
            onChange={onChangeDescricao}
            value={props.descricao}
          />
          <Input 
            id="titulo" 
            onChange={onChangeTitulo} 
            value={props.titulo} />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
