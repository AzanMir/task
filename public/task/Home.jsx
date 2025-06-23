import { useEffect, useState } from "react";

export default function Home() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://68554dfe6a6ef0ed66320ddd.mockapi.io/playground"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
