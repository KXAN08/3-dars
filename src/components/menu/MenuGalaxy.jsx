import React from "react";

const MenuGalaxy = ({ categories, image, title, description, buttons, textColor = "white" }) => {
  const textClass = textColor === "black" ? "text-black" : "text-white";

  return (
    <div className="w-full text-center px-4 py-10">
      <div
        className="w-full mx-auto min-h-[800px] bg-center bg-cover bg-no-repeat rounded-lg flex flex-col items-center justify-start gap-6"
        style={{
          backgroundImage: `url(${image})`,
        }}>

        <div className={`flex flex-wrap justify-center gap-10 font-semibold text-sm mt-10 ${textClass}`}>
          {categories.map((item, index) => (
            <span
              key={index}
              className="hover:underline cursor-pointer border-b pb-1"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-[300px] text-center px-4">
          <h2 className={`text-3xl md:text-5xl font-extrabold mb-2 ${textClass}`}>{title}</h2>
          <p className={`text-base md:text-lg max-w-xl mx-auto ${textClass}`}>{description}</p>
          <div className="flex justify-center gap-4 flex-wrap mt-8">
            {buttons.map((btn, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition duration-200 ${
                  btn.style === "fill"
                    ? `bg-white text-black hover:opacity-90`
                    : `bg-transparent border border-white text-white hover:bg-white hover:text-black`
                }`}>
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuGalaxy;
