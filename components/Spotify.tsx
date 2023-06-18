import React from "react";

function Spotify() {
  return (
    <div className="mt-10 w-full">
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/2PkZ4bG0xoUkKiqYGGCDUV?utm_source=generator"
        width={760}
        height={152}
        allowFullScreen={false}
        allow="autoplay"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Spotify;
