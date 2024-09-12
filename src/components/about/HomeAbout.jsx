import React from "react";
import { Link } from "react-router-dom";

function HomeAbout() {
  return (
    <div className="bg-gray-900 w-full overflow-hidden">
      <div className="w-full p-5 sm:p-10 flex flex-col justify-center items-center">
        <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
          About Us
        </h1>
        <div className="mb-8 lg:mb-16 font-light text-center text-gray-400 font-roboto lg:w-3/5 text-sm sm:text-xl sm:leading-7">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          necessitatibus, iure assumenda similique unde voluptas veritatis
          consequuntur recusandae fuga quod modi ducimus porro aspernatur
          adipisci consectetur quibusdam sapiente quasi cum! Sapiente
          consequatur, dicta laboriosam inventore maxime necessitatibus
          perspiciatis laudantium reprehenderit
        </div>
        <div className="w-fit mt-4">
          <Link to={"/about"}>
            <button
              type="submit"
              class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Know More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
