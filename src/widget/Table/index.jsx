import s from "./style"

const Table = (props) => {
  const { vertical, row, data, title } = props

  // YYYYMMDD 형식을 YYYY.MM.DD 형식으로 변환하는 함수
  const formatDate = (dateString) => {
    if (!dateString || dateString === "current") return dateString;
    if (dateString.length !== 8) return dateString;
    
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
    return `${year}.${month}.${day}`;
  };

  if (row) {
    // 세로형 테이블 (키-값 쌍으로 표시)
    return (
      <s.Table $row={row}>
        <s.Tbody>
          {title?.map((item, index) => (
            <s.Tr key={index}>
              <s.Th>{item}</s.Th>
              <s.Td>{data[index].value}</s.Td>
            </s.Tr>
          ))}
        </s.Tbody>
      </s.Table>
    )
  }

  if (vertical) {
    // 가로형 테이블 (헤더가 위에, 값들이 아래)
    return (
      <s.Table $vertical={vertical}>
        <s.Thead>
          <s.Tr>
            {title?.map((item, index) => (
              <s.Th key={index}>{item}</s.Th>
            ))}
          </s.Tr>
        </s.Thead>
        <s.Tbody>
        {data?.map((item, rowIndex) => (
            <s.Tr key={rowIndex}>
              {title?.length === 3 ? (
                <>
                  <s.Td>{item.td1 || item[0] || ''}</s.Td>
                  <s.Td>{item.td2 || item[1] || ''}</s.Td>
                  <s.Td>{item.td3 || item[2] || ''}</s.Td>
                </>
              ) : (
                <>
                  <s.Td>{item.td1 || item[0] || ''}</s.Td>
                  <s.Td>{item.td2 || item[1] || ''}</s.Td>
                  <s.Td>{item.td3 || item[2] || ''}</s.Td>
                  <s.Td>
                    {formatDate(item.td4 || item[3] || '')} ~ {item.td5 === "current" ? "현재" : formatDate(item.td5 || item[4] || '')}
                  </s.Td>
                </>
              )}
            </s.Tr>
          ))}
        </s.Tbody>
      </s.Table>
    )
  }

  return null
}

export default Table