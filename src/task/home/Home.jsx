import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://68554dfe6a6ef0ed66320ddd.mockapi.io/playground"
      );
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDel = async (id) => {
    try {
      const response = await fetch(
        `https://68554dfe6a6ef0ed66320ddd.mockapi.io/playground/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        toast.success("Data Deleted successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        setApiData(apiData.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/form/${id}`);
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
          <thead>
            <tr>
              <th
                style={{
                  padding: "25px",
                  border: "2px solid",
                }}
              >
                Name
              </th>
              <th
                style={{
                  padding: "25px",
                  border: "2px solid",
                }}
              >
                Email
              </th>
              <th
                style={{
                  padding: "25px",
                  border: "2px solid",
                }}
              >
                Phone
              </th>
              <th
                style={{
                  padding: "25px",
                  border: "2px solid",
                }}
              >
                Action 1
              </th>
              <th
                style={{
                  padding: "25px",
                  border: "2px solid",
                }}
              >
                Action 2
              </th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}
