import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://68554dfe6a6ef0ed66320ddd.mockapi.io/playground"
      );

      const data = await response.json();
      setApiData(data);
    };

    fetchData();
  }, []);

  const handleDel = async (id) => {
    const response = await fetch(
      `https://68554dfe6a6ef0ed66320ddd.mockapi.io/playground/${id}`,
      {
        method: "DELETE",
      }
    );
    setApiData(apiData.filter((item) => item.id !== id));
  };

  const handleEdit = async (id) => {
    navigate(`/form/${id}`); // Navigate to form with the ID
  };

  return (
    <div>
      <div>
        <h1>Table</h1>
        <table
          style={{
            padding: "45px",
            border: "2px solid",
          }}
        >
          <tr>
            <th
              style={{
                padding: "25px",
                border: "2px solid",
              }}
              className="headers"
            >
              Name
            </th>
            <th
              style={{
                padding: "25px",
                border: "2px solid",
              }}
              className="headers"
            >
              Email
            </th>
            <th
              style={{
                padding: "25px",
                border: "2px solid",
              }}
              className="headers"
            >
              Phone
            </th>
            <th
              style={{
                padding: "25px",
                border: "2px solid",
              }}
              className="headers"
            >
              Action 1
            </th>
            <th
              style={{
                padding: "25px",
                border: "2px solid",
              }}
              className="headers"
            >
              Action 2
            </th>
          </tr>

          {apiData.map((tabon) => (
            <tr key={tabon.id}>
              <td
                style={{
                  padding: "5px",
                  border: "2px solid",
                }}
              >
                {tabon.name}
              </td>
              <td
                style={{
                  padding: "5px",
                  border: "2px solid",
                }}
              >
                {tabon.email}
              </td>
              <td
                style={{
                  padding: "5px",
                  border: "2px solid",
                }}
              >
                {tabon.phone}
              </td>
              <td
                style={{
                  padding: "5px",
                  border: "2px solid",
                }}
              >
                <button
                  onClick={() => handleEdit(tabon.id)}
                  style={{
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>
              </td>
              <td
                style={{
                  padding: "5px",
                  border: "2px solid",
                }}
              >
                <button
                  onClick={() => handleDel(tabon.id)}
                  style={{
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
