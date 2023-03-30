import { Table as BsTable } from "react-bootstrap";

function Table({ header, body, onRowClick }) {
  return (
    <BsTable striped bordered hover>
      <thead>
        <tr>
          {header.map((h) => (
            <th>{h.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((data) => (
          <tr onClick={() => onRowClick(data.id)}>
            {header.map((h) => (
              <td>
                {h.type === "image" ? (
                  <img src={data[h.objKey]} width="60"></img>
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
