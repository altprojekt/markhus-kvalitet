import React, { useState } from "react";
import axios from "axios";

const UploadForm = ({ addMedia }) => {
  const [file, setFile] = useState(null);
  const [comment, setComment] = useState("");
  const [type, setType] = useState("feil");

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/ddwwsu4es/auto/upload",
      formData
    );

    const uploaded = {
      url: response.data.secure_url,
      type,
      comment,
    };

    addMedia(uploaded);
    setFile(null);
    setComment("");
  };

  return (
    <form onSubmit={handleUpload}>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="feil">Feil utførelse</option>
        <option value="korrekt">Korrekt utførelse</option>
      </select>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Kommentar"
        required
      />
      <button type="submit">Last opp</button>
    </form>
  );
};

export default UploadForm;
