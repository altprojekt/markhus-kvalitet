import React from "react";

const Gallery = ({ media }) => {
  const feil = media.filter((m) => m.type === "feil");
  const korrekt = media.filter((m) => m.type === "korrekt");

  const renderMedia = (items) =>
    items.map((item, idx) => (
      <div key={idx}>
        <p>{item.comment}</p>
        {item.url.match(/.(mp4|webm)$/) ? (
          <video controls width="250" src={item.url}></video>
        ) : (
          <img src={item.url} alt="upload" width="250" />
        )}
      </div>
    ));

  return (
    <div>
      <h2>Feil utførelse</h2>
      {renderMedia(feil)}
      <h2>Korrekt utførelse</h2>
      {renderMedia(korrekt)}
    </div>
  );
};

export default Gallery;
