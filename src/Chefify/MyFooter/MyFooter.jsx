import React from "react";

const MyFooter = () => {
  return (
    <div className="bg-black mt-20 grid grid-cols-4 p-6 rounded-t-lg text-white">
      <div className="col-span-2 content-between flex flex-col justify-between">
        <div>
          <h3 className="font-bold">About us</h3>
          <h3 className="my-4">
            Welcome to our website, a wonderful place to explore and learn how
            to cook like a pro
          </h3>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-white text-black p-4 rounded-lg min-w-80"
            />{" "}
            <button className="bg-pink-600 px-2 py-1 rounded-lg">Send</button>
          </div>
        </div>
        <div className="mt-20 flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-10 text-white"
          >
            <path
              fill-rule="evenodd"
              d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
              clip-rule="evenodd"
            />
          </svg>
          <h2 className="font-bold text-3xl text-white">Chefify</h2>
          <h6 className="mx-4 text-xs">2023 Chefify Company</h6>
          <h6 className=" text-xs">Terms of Service|Privacy Policy</h6>
        </div>
      </div>
      <div className="col-span-1 leading-8 px-20">
        <div className="flex flex-col text-white/50">
          <h1 className="font-bold text-white">Learn More</h1>
          <h6>Our cooks</h6>
          <h6>See our features</h6>
          <h6>FAQ</h6>
        </div>
        <div className="flex flex-col text-white/50 mt-12">
          <h1 className="font-bold text-white">Shop</h1>
          <h6>Gift Subscription</h6>
          <h6>Send us feedback</h6>
        </div>
      </div>

      <div className="col-span-1 leading-8 px-20">
        <div className="flex flex-col text-white/50">
          <h1 className="font-bold text-white">Recipes</h1>
          <h6>What to cook this week</h6>
          <h6>Pasta</h6>
          <h6>Dinner</h6>
          <h6>Healthy</h6>
          <h6>Vegetable</h6>
          <h6>Vegan</h6>
          <h6>Christmas</h6>
        </div>
      </div>
    </div>
  );
};

export default MyFooter;
