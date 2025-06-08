import React, { useState } from "react";
import UploadForm from "./UploadForm";
import Gallery from "./Gallery";

function App() {
  const [media, setMedia] = useState([]);

  const addMedia = (item) => {
    setMedia([item, ...media]);
  };

  return (
    <div className="app">
      <h1>Markhus Byggmester Kvalitet</h1>
      <UploadForm addMedia={addMedia} />
      <Gallery media={media} />
    </div>
  );
}

export default App;
