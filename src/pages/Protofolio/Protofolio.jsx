import React from "react";

export default function Protofolio() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalImage, setModalImage] = React.useState("");

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
          <header className="text-center">
            <h2 className="text-6xl my-5 text-gray-500 font-bold ">
              Product Collection
            </h2>
            <div className="flex items-center justify-center my-2">
              <div className="line-g"></div>
              <div className="mb-2">
                <i className="fa-solid fa-star fa-xl text-gray-500"></i>{" "}
              </div>
              <div className="line-g text-gray-500"></div>
            </div>
          </header>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <a
                href="#"
                className="group relative block bg-black"
                onClick={() => openModal("https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80")}
              >
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                    Developer
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Tony Wayne
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Omnis perferendis hic asperiores quibusdam quidem
                        voluptates doloremque reiciendis nostrum harum.
                        Repudiandae?
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group relative block bg-black"
                onClick={() => openModal("https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80")}
              >
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                    Developer
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Tony Wayne
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Omnis perferendis hic asperiores quibusdam quidem
                        voluptates doloremque reiciendis nostrum harum.
                        Repudiandae?
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group relative block bg-black"
                onClick={() => openModal("https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80")}
              >
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                    Developer
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Tony Wayne
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Omnis perferendis hic asperiores quibusdam quidem
                        voluptates doloremque reiciendis nostrum harum.
                        Repudiandae?
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group relative block bg-black"
                onClick={() => openModal("https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80")}
              >
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                    Developer
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Tony Wayne
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Omnis perferendis hic asperiores quibusdam quidem
                        voluptates doloremque reiciendis nostrum harum.
                        Repudiandae?
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group relative block bg-black"
                onClick={() => openModal("https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80")}
              >
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                    Developer
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Tony Wayne
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Omnis perferendis hic asperiores quibusdam quidem
                        voluptates doloremque reiciendis nostrum harum.
                        Repudiandae?
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group relative block bg-black"
                onClick={() => openModal("https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80")}
              >
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                    Developer
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Tony Wayne
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Omnis perferendis hic asperiores quibusdam quidem
                        voluptates doloremque reiciendis nostrum harum.
                        Repudiandae?
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {isOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <img
                  src={modalImage}
                  alt="Modal"
                  className="w-full h-auto mb-4"
                />

              </div>

              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

