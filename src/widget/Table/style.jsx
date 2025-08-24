import styled from "styled-components"

const style = {
  Table: styled.table`
    width: 100%;
    border-collapse: collapse;
    margin:0;
    padding:0;
    font-size:1.3rem;

    @media (max-width: 768px) {
      font-size:1.2rem;
    }

    th{
      white-space: nowrap;
    }
    
    ${props => props.$row && `
      th {
        background-color: #f0f0f0;
        text-align: left;
        padding: 8px 12px;
        border: 1px solid #ddd;
        width: 30%;   
        height: 4rem;
      }      
      td {
        padding: 8px 12px;
        border: 1px solid #ddd;
        background-color: white;
        height: 4rem;
      }
    `}
    
    ${props => props.$vertical && `
      th {
        background-color: #f0f0f0;
        text-align: center;
        padding: 8px 12px;
        border: 1px solid #ddd;
        font-weight: bold;
      }
      td {
        padding: 8px 12px;
        border: 1px solid #ddd;
        text-align: center;
        background-color: white;
      }
    `}
  `,
  Thead: styled.thead`
    background-color: #f0f0f0;
  `,
  Tbody: styled.tbody`
  `,
  Tr: styled.tr`
  `,
  Th: styled.th`
  `,
  Td: styled.td`
  `,
}

export default style