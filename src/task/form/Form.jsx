import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  fetchFormSuccess,
  submitFormSuccess,
  updateForm,
} from "../../reducers/FormReducer";

export default function Form() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://68554dfe6a6ef0ed66320ddd.mockapi.io/playground/${id}`
          );
          const data = await response.json();
          dispatch(fetchFormSuccess(data));
        } catch (error) {
          console.error("Fetch error:", error);
        }
      };
      fetchData();
    }
  }, [id, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateForm({ [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = id
      ? `https://68554dfe6a6ef0ed66320ddd.mockapi.io/playground/${id}`
      : "https://68554dfe6a6ef0ed66320ddd.mockapi.io/playground";

    const method = id ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Response:", data);

      dispatch(submitFormSuccess(data));

      if (id) {
        toast.success("Data updated successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      } else {
        toast.success("Data Added successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      }
      navigate("/");
    } catch (error) {
      console.error("Submit error:", error);
    }
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
          value={formData.name || ""}
          name="name"
          placeholder="name"
          type="text"
        />
        <input
          onChange={handleChange}
          value={formData.email || ""}
          name="email"
          placeholder="email"
          type="email"
        />
        <input
          onChange={handleChange}
          value={formData.phone || ""}
          name="phone"
          placeholder="number"
          type="number"
        />
        <textarea
          onChange={handleChange}
          value={formData.description || ""}
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
