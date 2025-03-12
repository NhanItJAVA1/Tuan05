import React from "react";
import myDog from '../../assets/my_dog.jpg';
const MyHeader = () => {
  return (
    <div className="flex items-center my-2 justify-between border-b-1 border-gray-500/50 py-3">
      <div className="flex gap-3 items-center ml-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-10 text-[#ed4e86]"
        >
          <path
            fill-rule="evenodd"
            d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
            clip-rule="evenodd"
          />
        </svg>
        <h2 className="font-bold text-2xl text-[#ed4e86]">Chefify</h2>
        <div className="flex bg-[#f3f4f6] items-center rounded-xl px-3 focus-within:outline-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-5"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clip-rule="evenodd"
            />
          </svg>
          <input type="text" className="gap-3 border-none focus:outline-0" />
        </div>
      </div>

      <div className="flex items-center gap-5 text-gray-600/50">
        <a href="">What to cook</a>
        <a href="">Recipes</a>
        <a href="">Ingredients</a>
        <a href="">Occasions</a>
        <a href="">About us</a>
      </div>
      <div className="flex items-center mr-4">
        <button className="mx-10 flex items-center gap-2 bg-[#ffeff5] px-3 py-2 rounded-xl cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6 text-[#ed4e86]"
          >
            <path
              fill-rule="evenodd"
              d="M1.5 9.832v1.793c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875V9.832a3 3 0 0 0-.722-1.952l-3.285-3.832A3 3 0 0 0 16.215 3h-8.43a3 3 0 0 0-2.278 1.048L2.222 7.88A3 3 0 0 0 1.5 9.832ZM7.785 4.5a1.5 1.5 0 0 0-1.139.524L3.881 8.25h3.165a3 3 0 0 1 2.496 1.336l.164.246a1.5 1.5 0 0 0 1.248.668h2.092a1.5 1.5 0 0 0 1.248-.668l.164-.246a3 3 0 0 1 2.496-1.336h3.165l-2.765-3.226a1.5 1.5 0 0 0-1.139-.524h-8.43Z"
              clip-rule="evenodd"
            />
            <path d="M2.813 15c-.725 0-1.313.588-1.313 1.313V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-1.688c0-.724-.588-1.312-1.313-1.312h-4.233a3 3 0 0 0-2.496 1.336l-.164.246a1.5 1.5 0 0 1-1.248.668h-2.092a1.5 1.5 0 0 1-1.248-.668l-.164-.246A3 3 0 0 0 7.046 15H2.812Z" />
          </svg>

          <h3 className="text-[#ed4e86]">Your Recipe Box</h3>
        </button>
        <img src="" alt="" />
        <img
          className="max-h-12 rounded-full object-cover "
          src="../src/assets/my_dog.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default MyHeader;
