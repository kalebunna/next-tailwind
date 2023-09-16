import React from "react";

export default function Home() {
  return (
    <div className="max-w-lg bg-gray-50 shadow-md  rounded-xl overflow-hidden">
      <div>
        <header className="py-2 px-6 flex items-center first-letter justify-between">
          <div>
            <h1 className=" font-medium text-orange-600">Card Title</h1>
            <span className=" text-gray-400">Lorem ipsum dolor sit amet.</span>
          </div>
          <a
            href="#"
            className=" bg-teal-600 py-2 px-3.5 font-semibold text-white rounded-md hover:bg-teal-700 transition duration-500 focus:outline-none focus:ring-4 focus:ring-teal-100"
          >
            Create New
          </a>
        </header>
        <section className=" text-justify py-4 px-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          tenetur repellat. Labore numquam atque, error dolore fuga consequatur,
          aliquid, voluptatem incidunt voluptas ipsa perspiciatis neque alias.
          Commodi, id adipisci! Ratione!
        </section>
        <footer className="border-t bg-red-500 py-2 px-6">
          Lorem, ipsum dolor.
        </footer>
      </div>
    </div>
  );
}
