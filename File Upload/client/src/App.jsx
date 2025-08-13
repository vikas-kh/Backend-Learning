
import React, { useState } from 'react';
import axios from 'axios';
function App() {
  const [file, setFile] = useState(null);           // For selected file
  const [previewUrl, setPreviewUrl] = useState(''); // To show uploaded image

  // Triggered when file input changes
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Triggered when form is submitted
  const handleUpload = async (e) => {
    e.preventDefault();

    // Make sure a file is selected
    if (!file) return alert('Please select a file');

    const formData = new FormData();
    formData.append('file', file); // Must match field name in backend

    try {
      const res = await axios.post('http://localhost:5000/upload', formData);
      setPreviewUrl(res.data.filePath); // Save uploaded file URL
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Upload a File</h2>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>

      {previewUrl && (
        <div style={{ marginTop: '20px' }}>
          <h3>Uploaded File:</h3>
          <img src={previewUrl} alt="Uploaded" style={{ maxWidth: '300px' }} />
        </div>
      )}
    </div>
  );
}

export default App;
