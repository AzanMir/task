import { useState } from "react";
export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://68554dfe6a6ef0ed66320ddd.mockapi.io/playground",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();
    console.log("Response:", data);
  };

  return (
    <div>
      <h1>Form</h1>
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
        <input type="submit" />
      </form>
    </div>
  );
}
