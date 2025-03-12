import React from "react";

const MyBody = () => {
  return (
    <div className="grid grid-cols-3 mt-10">
      <div className="col-span-1">
        <div className="rounded-xl border-1 border-gray-400/50 p-4 w-4/5 m-auto">
          <h1 className="font-bold flex text-[22px] gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
            </svg>{" "}
            FILTERS
          </h1>
          {/* Type nè */}
          <div className="mt-6 border-b-1 border-gray-400/50">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-xl">Type</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-[#d86c91]"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="grid grid-cols-2 mt-2 mb-3">
              <div className="">
                <div className="flex items-center">
                  <input type="checkbox" className="m-0 max-w-4" />
                  <span>Pan-fried</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="m-0 max-w-4" />
                  <span>Grilled</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="m-0 max-w-4" />
                  <span>Sauteed</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="m-0 max-w-4" />
                  <span>Steamed</span>
                </div>
              </div>
              <div className="">
                <div className="flex items-center">
                  <input type="checkbox" className="m-0 max-w-4" />
                  <span>Stir-fried</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="m-0 max-w-4" />
                  <span>Roasted</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="m-0 max-w-4" />
                  <span>Baked</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="m-0 max-w-4" />
                  <span>Stewed</span>
                </div>
              </div>
            </div>
          </div>
          {/* Time nè */}
          <div className="mt-6 border-b-1 border-gray-400/50 w-full">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-xl">Time</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-[#d86c91]"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="w-full my-3">
              <input type="range" className="min-w-11/12 accent-[#f44a86]" />
            </div>
          </div>
          {/* Rating nè */}
          <div className="mt-6 border-b-1 border-gray-400/50 w-full">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-xl">Rating</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-[#d86c91]"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="w-full my-3">
              <div className="flex items-center gap-4 my-1">
                <input type="checkbox" className="max-w-5" />

                <div className="flex items-center gap-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6 text-yellow-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 my-1">
                <input type="checkbox" className="max-w-5" />

                <div className="flex items-center gap-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`size-6 ${
                        i !== 4 ? "text-yellow-500" : "text-gray-500"
                      }`}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 my-1">
                <input type="checkbox" className="max-w-5" />

                <div className="flex items-center gap-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`size-6 ${
                        i <= 2 ? "text-yellow-500" : "text-gray-500"
                      }`}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 my-1">
                <input type="checkbox" className="max-w-5" />

                <div className="flex items-center gap-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`size-6 ${
                        i <= 1 ? "text-yellow-500" : "text-gray-500"
                      }`}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 my-1">
                <input type="checkbox" className="max-w-5" />

                <div className="flex items-center gap-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`size-6 ${
                        i <= 0 ? "text-yellow-500" : "text-gray-500"
                      }`}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Apply nè */}
          <div className="mt-6 w-full my-2 flex items-center justify-center">
            <button className="w-10/12 bg-[#f44b86] p-1 text-white rounded-sm">
              Apply
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-2 mr-4 px-10 p-16 flex flex-col items-center">
        <h1 className="font-bold text-3xl">
          Sorry, no results were found for "cakescascas"
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-40 text-[#f44b86]"
        >
          <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
          <path
            fill-rule="evenodd"
            d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          />
        </svg>
        <h1>We have all your Independence Day sweets covered</h1>
        <div className="flex gap-3 my-6">
          <button className="rounded-2xl bg-[#fef0f5] px-2 py-1 text-[#e2b3c4]">
            Sweet Cake
          </button>
          <button className="rounded-2xl bg-[#f4f0fe] px-2 py-1 text-[#9a7cc4]">
            Sweet Cake
          </button>
          <button className="rounded-2xl bg-[#fef0f5] px-2 py-1 text-[#e2b3c4]">
            Sweet Cake
          </button>
          <button className="rounded-2xl bg-[#edfcfc] px-2 py-1 text-[#6099a1]">
            Sweet Cake
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyBody;
