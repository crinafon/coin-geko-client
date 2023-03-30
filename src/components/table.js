import { Table as BsTable } from "react-bootstrap";

function Table({ header, body, onRowClick }) {
  return (
    <BsTable striped bordered hover>
      <thead>
        <tr>
          {header.map((h) => (
            <th key={h.title}>{h.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((data) => (
          <tr onClick={() => onRowClick && onRowClick(data.id)} key={data.id}>
            {header.map((h) => (
              <td key={h.title}>
                {h.type === "image" ? (
                  <img src={data[h.objKey]} width={60} />
                ) : (
                  data[h.objKey]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </BsTable>
  );
}

export default Table;
