// Crea un componente de menú desplegable que utilice styled-components y que tenga
// diferentes estilos según el estado del menú (por ejemplo, abierto, cerrado).
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  background-color: ${({ isOpen }) => (isOpen ? "green" : "red")};
  color: white;
  font-size: 16px;
  border: none;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${({ isOpen }) => (isOpen ? "darkgreen" : "darkred")};
  }
`;

const List = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid black;
  padding: 8px;
  margin-top: 8px;
  list-style: none;
`;

const ListItem = styled.li`
  margin: 8px 0;
  &:hover {
    background-color: lightgray;
  }
`;

export function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <Button onClick={handleToggle}>Menu</Button>
      {isOpen && (
        <List>
          <ListItem>Option 1</ListItem>
          <ListItem>Option 2</ListItem>
          <ListItem>Option 3</ListItem>
        </List>
      )}
    </Wrapper>
  );
}
