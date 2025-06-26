import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Input } from "../../ui/Input";
import { Textarea } from "../../ui/TextArea";
import { Button } from "../../ui/Button";
import { Send, TimerReset, Ban } from "lucide-react";
import {
  fetchFormSuccess,
  submitFormSuccess,
  updateForm,
  resetForm,
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

  const handleReset = () => {
    dispatch(resetForm());
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
    <div className="p-8 flex items-center justify-center flex-col">
      <h1 className="text-5xl font-medium">
        {id ? "Edit Details" : "  Login"}
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          width: "300px",
          padding: "30px",
          gap: 30,
        }}
      >
        <Input
          className="w-[300px]"
          onChange={handleChange}
          value={formData.name || ""}
          name="name"
          placeholder="name"
          type="text"
        />
        <Input
          className="w-[300px]"
          onChange={handleChange}
          value={formData.email || ""}
          name="email"
          placeholder="email"
          type="email"
        />
        <Input
          className="w-[300px]"
          onChange={handleChange}
          value={formData.phone || ""}
          name="phone"
          placeholder="number"
          type="number"
        />
        <Textarea
          className="w-[300px]"
          onChange={handleChange}
          value={formData.description || ""}
          name="description"
          placeholder="Description"
        ></Textarea>
        <Button
          className="cursor-pointer w-[300px] hover:bg-black hover:text-amber-50 border-1"
          type="submit"
        >
          <Send />
          {id ? "Update" : "Submit"}
        </Button>
        <Button
          className="cursor-pointer w-[300px] hover:bg-black hover:text-amber-50 border-1"
          type="button"
          onClick={handleReset}
        >
          <TimerReset />
          Reset
        </Button>
        <Button
          className="cursor-pointer w-[300px] hover:bg-black hover:text-amber-50 border-1"
          type="button"
          onClick={() => navigate("/")}
        >
          <Ban />
          Cancel
        </Button>
      </form>
    </div>
  );
}
