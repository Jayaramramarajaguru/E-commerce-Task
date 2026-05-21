
import { useState } from "react";
import axios from "axios";

const AdminProductForm = () => {
  const [image, setImage] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    discount: "",
    clothType: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    data.append("image", image);

    await axios.post(
      "http://localhost:4000/api/products",
      data
    );

    alert("Product Created");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input type="text" name="title" placeholder="Title" className="border p-2 w-full" onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" className="border p-2 w-full" onChange={handleChange} />
      <input type="number" name="price" placeholder="Price" className="border p-2 w-full" onChange={handleChange} />
      <input type="number" name="discount" placeholder="Discount" className="border p-2 w-full" onChange={handleChange} />
      <input type="text" name="clothType" placeholder="Cloth Type" className="border p-2 w-full" onChange={handleChange} />
      <label style={{color:"red"}}>iMAGE</label>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />

      <button className="bg-black text-white px-4 py-2 rounded">
        Create Product
      </button>
    </form>
  );
};

export default AdminProductForm;
