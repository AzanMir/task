import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Pencil, SquarePlus, Trash2 } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
} from "../../ui/table";
import { Button } from "../../ui/Button";

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
          pauseOnHover: True,
          draggable: True,
          TableHeademe: "colored",
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
      <div className="p-8">
        <Button
          className="bg-gray-500 p-1 px-3 rounded-2xl text-white hover:bg-green-600 cursor-pointer"
          onClick={() => navigate("/form")}
        >
          <SquarePlus />
          Add New
        </Button>
        <div className="p-4">
          <Table className="cursor-default">
            <TableRow className="text-2xl">
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>

            <TableBody>
              {apiData.map((tabon) => (
                <TableRow key={tabon.id}>
                  <TableCell>{tabon.name}</TableCell>
                  <TableCell>{tabon.email}</TableCell>
                  <TableCell>{tabon.phone}</TableCell>
                  <TableCell>
                    <Button
                      className="bg-gray-500 p-1 px-3 rounded-2xl text-white hover:bg-lime-600 cursor-pointer"
                      onClick={() => handleEdit(tabon.id)}
                    >
                      <Pencil />
                    </Button>
                    <Button
                      className="bg-gray-500 p-1 px-3 rounded-2xl text-white ml-2 hover:bg-red-600 cursor-pointer"
                      onClick={() => handleDel(tabon.id)}
                    >
                      <Trash2 />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
