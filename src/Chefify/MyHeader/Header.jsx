import React, { useEffect, useState } from "react";

const Header = () => {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://67d0f74e825945773eb276c8.mockapi.io/Header")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error("Lỗi API:", error));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Ảnh thứ 5 và 8</h1>

      <div className="grid grid-cols-2 gap-5">
        {images.map((image) => (
          <div key={image.id} className="border p-3 rounded-lg shadow-md">
            <img src={image.img} alt={image.name} className="w-full h-40 object-cover rounded" />
            <h2 className="font-semibold mt-2">ID: {image.id} - {image.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
