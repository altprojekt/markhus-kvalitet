import React, { useState } from 'react';
import { CLOUDINARY_URL, UPLOAD_PRESET } from '../cloudinary';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useTranslation } from 'react-i18next';

export default function UploadForm({ category }) {
  const [file, setFile] = useState(null);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;
    setLoading(true);

    // 1. Upload to Cloudinary
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", UPLOAD_PRESET);

    const res = await fetch(CLOUDINARY_URL, { method: "POST", body: form });
    const data = await res.json();

    // 2. Save to Firestore
    await addDoc(collection(db, "uploads"), {
      url: data.secure_url,
      type: file.type,
      comment,
      category,
      timestamp: serverTimestamp()
    });

    setFile(null);
    setComment('');
    setLoading(false);
    alert(t("uploadSuccess"));
  };

  return (
    <form onSubmit={handleUpload} style={{ marginBottom: 32 }}>
      <input
        type="file"
        accept="image/*,video/*"
        onChange={e => setFile(e.target.files[0])}
        required
        style={{ display: "block", marginBottom: 8 }}
      />
      <textarea
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder={t("comment")}
        required
        style={{ width: "100%", minHeight: 48, marginBottom: 8 }}
      />
      <button type="submit" disabled={loading}>
        {loading ? t("uploading") : t("upload")}
      </button>
    </form>
  );
                    }
