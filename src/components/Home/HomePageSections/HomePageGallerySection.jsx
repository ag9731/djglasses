import React, { useState } from "react";

const HomePageGallerySection = () => {
  const gallery = [
    "https://glasswerks.com/wp-content/uploads/2018/06/jumbo_stock-130_by_204.jpg",
    "https://glasswerks.com/wp-content/uploads/2018/06/jumbo_stock-130_by_204.jpg",
    "https://glasswerks.com/wp-content/uploads/2018/06/jumbo_stock-130_by_204.jpg",
    "https://glasswerks.com/wp-content/uploads/2018/06/jumbo_stock-130_by_204.jpg",
    "https://glasswerks.com/wp-content/uploads/2018/06/jumbo_stock-130_by_204.jpg",
    "https://glasswerks.com/wp-content/uploads/2018/06/jumbo_stock-130_by_204.jpg",
    "https://glasswerks.com/wp-content/uploads/2018/06/jumbo_stock-130_by_204.jpg",
    "https://glasswerks.com/wp-content/uploads/2018/06/jumbo_stock-130_by_204.jpg",
    "https://glasswerks.com/wp-content/uploads/2018/06/jumbo_stock-130_by_204.jpg",
    "https://glasswerks.com/wp-content/uploads/2018/06/jumbo_stock-130_by_204.jpg",
    "https://glasswerks.com/wp-content/uploads/2018/06/jumbo_stock-130_by_204.jpg",
    "https://glasswerks.com/wp-content/uploads/2018/06/jumbo_stock-130_by_204.jpg",
  ];

  const [singleImage, setSingleImage] = useState(false);
  const [image, setImage] = useState(gallery[0]);

  const handleImage = (id) => {
    setImage(image);
    setSingleImage(true);
    // console.log(image);
  };

  const handleImageToggle = () => {
    setSingleImage(false);
  };

  console.log(singleImage);
  return (
    <>
      <section className="container mx-auto relative">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-bold uppercase">Gallery</h1>
          <span className="bg-[#080F3B] w-1/12 h-[2px]"></span>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-5">
          {gallery.map((images) => {
            return (
              <div
                key={images}
                className="flex flex-col items-center justify-center"
              >
                <div>
                  <img
                    className="relative cursor-pointer"
                    src={images}
                    alt=""
                    onClick={() => handleImage(images)}
                  />
                </div>
                <div className="absolute">
                  <h1
                    className="text-3xl text-white cursor-pointer"
                    onClick={() => handleImage(images)}
                  >
                    +
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        {/* Enlarged Image Display */}
        {singleImage && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-black bg-opacity-50 z-10">
            <img src={image} className="w-[50%] max-w-full" alt="Selected" />
            <button
              className="absolute top-0 right-0 text-white font-bold p-2"
              onClick={handleImageToggle}
            >
              X
            </button>
          </div>
        )}

        {/* {gallery.find((images) =>{
            return(
                <div>
                    <img src={()=>handleImage(images)} alt="" />
                </div>
                
            )
        })} */}
        <div className="flex items-center justify-center mt-5">
          <button className="mt-5 md:block md:w-auto text-white font-medium bg-[#080F3B] px-8 md:px-14 py-3 md:py-4 hover:bg-[#e99015] transition-colors">
            Explore More
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePageGallerySection;
