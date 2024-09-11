import React from "react";

function Footer() {
  return (
    <footer class="bg-gray-900 flex flex-col items-center justify-between px-4 py-12 mx-auto w-full md:flex-row">
      <p class="mb-8 text-sm text-center text-white md:text-left md:mb-0">
        © Copyright 2024 Alaska Group. All Rights Reserved.
      </p>
      <div class="flex text-gray-300 items-center space-x-6">
        <a className="hover:text-white duration-150 hover:scale-105" href="#">
          <i class="bi bi-instagram"></i>
        </a>
        <a className="hover:text-white duration-150 hover:scale-105" href="#">
          <i class="bi bi-linkedin"></i>
        </a>
        <a className="hover:text-white duration-150 hover:scale-105" href="#">
          <i class="bi bi-twitter-x"></i>
        </a>
        <a className="hover:text-white duration-150 hover:scale-105" href="#">
          <i class="bi bi-facebook"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
