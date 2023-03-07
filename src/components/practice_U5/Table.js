// Crea  un  componente  de  tabla  que  utilice  styled-components  y  que  tenga  diferentes
// estilos según el tipo de fila (por ejemplo, encabezado, cuerpo, pie).
import React from "react";
import styled from "styled-components";

export const Table = () => {
  return (
    <Wrapper>
      <TableHeader>
        <tr>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Nombre</TableHeaderCell>
          <TableHeaderCell>Correo electrónico</TableHeaderCell>
        </tr>
      </TableHeader>
      <TableBody>
        <tr>
          <TableCell>1</TableCell>
          <TableCell>John Doe</TableCell>
          <TableCell>john.doe@example.com</TableCell>
        </tr>
        <tr>
          <TableCell>2</TableCell>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane.smith@example.com</TableCell>
        </tr>
      </TableBody>
      <TableFooter>
        <tr>
          <TableFooterCell colSpan="3">Total de registros: 2</TableFooterCell>
        </tr>
      </TableFooter>
    </Wrapper>
  );
};

const Wrapper = styled.table`
  border-collapse: collapse;
  margin: 16px;
`;

const TableHeader = styled.thead`
  background-color: #bbb;
`;

const TableHeaderCell = styled.th`
  padding: 8px;
  text-align: left;
`;

const TableBody = styled.tbody`
  background-color: #eaeaea;
`;

const TableCell = styled.td`
  padding: 8px;
`;

const TableFooter = styled.tfoot`
  background-color: red;
  color: white;
`;

const TableFooterCell = styled.td`
  padding: 8px;
  text-align: right;
`;
