
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "./apiServices";

const Signup = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    username: "",
    password: "",
    securityquestion: "What is Your Pet Name?",
    securityanswer: "",
    propic: "",
  });

  const navigateMe = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // Accept image files only
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      e.target.value = "";
      return;
    }

    // Limit image size to 1 MB for this demo
    if (file.size > 1024 * 1024) {
      alert("Please select an image smaller than 1 MB.");
      e.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setForm((prev) => ({
        ...prev,
        propic: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/users", form);

      alert("Signup successful!");
      navigateMe("/");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          value={form.firstname}
          onChange={handleChange}
          placeholder="Enter firstname"
          required
        />
        <br /><br />

        <input
          type="text"
          name="lastname"
          value={form.lastname}
          onChange={handleChange}
          placeholder="Enter lastname"
          required
        />
        <br /><br />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
          required
        />
        <br /><br />

        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Enter username"
          required
        />
        <br /><br />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
          required
        />
        <br /><br />

        <input
          type="text"
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          placeholder="Enter mobile"
          required
        />
        <br /><br />

        <select
          name="securityquestion"
          value={form.securityquestion}
          onChange={handleChange}
          required
        >
          <option value="What is Your Pet Name?">
            What is Your Pet Name?
          </option>
          <option value="What is Your Best Friend Name?">
            What is Your Best Friend Name?
          </option>
          <option value="What is Your Teacher Name?">
            What is Your Teacher Name?
          </option>
          <option value="What is Your Hobby?">
            What is Your Hobby?
          </option>
        </select>
        <br /><br />

        <input
          type="text"
          name="securityanswer"
          value={form.securityanswer}
          onChange={handleChange}
          placeholder="Enter security answer"
          required
        />
        <br /><br />

        <label>Upload Profile Picture:</label>
        <br />

        <input
          type="file"
          name="propic"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        <br /><br />

        {form.propic && (
          <img
            src={form.propic}
            alt="Profile Preview"
            width="100"
            height="100"
            style={{
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        )}

        <br /><br />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
