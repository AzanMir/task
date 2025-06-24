import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the ID from URL parameters
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  // Fetch existing data when editing
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const response = await fetch(
          `https://68554dfe6a6ef0ed66320ddd.mockapi.io/playground/${id}`
        );
        const data = await response.json();
        setFormData(data);
      };
      fetchData();
    }
  }, [id]);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if we're editing (id exists) or creating new
    const url = id
      ? `https://68554dfe6a6ef0ed66320ddd.mockapi.io/playground/${id}`
      : "https://68554dfe6a6ef0ed66320ddd.mockapi.io/playground";

    const method = id ? "PUT" : "POST";

    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log("Response:", data);

    // Navigate back to home after successful submission
    navigate("/");
  };

  return (
    <div>
      <h1>{id ? "Edit Form" : "Form"}</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          padding: "30px",
          gap: 30,
        }}
      >
        <input
          onChange={handleChange}
          value={formData.name}
          name="name"
          placeholder="name"
          type="text"
        />
        <input
          onChange={handleChange}
          value={formData.email}
          name="email"
          placeholder="email"
          type="email"
        />
        <input
          onChange={handleChange}
          value={formData.phone}
          name="phone"
          placeholder="number"
          type="number"
        />
        <textarea
          onChange={handleChange}
          value={formData.description}
          name="description"
          placeholder="Description"
        ></textarea>
        <input type="submit" value={id ? "Update" : "Submit"} />
        <button type="button" onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
    </div>
  );
}
