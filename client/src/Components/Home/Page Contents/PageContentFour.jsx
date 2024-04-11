
import React from "react";

const PageContentFour = () => {
  return (
    <>
      <div>
        <section>
          <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="absolute inset-0 h-full w-full object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="relative flex items-center bg-gray-100 rounded-tr-xl rounded-br-xl">
                <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                <div className="p-8 sm:p-16 lg:p-24 rounded-tr-xl rounded-br-xl">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    Want to Rent your apartment @VGN Brixton? – Use the Rental
                    Assistance service provided by the Rental Agencies approved
                    by VBOWA.
                  </h2>

                  <p className="mt-4 text-gray-600">
                    <ol className="list-decimal list-inside space-y-2 text-lg font-normal text-gray-700">
                      <li>Simple, Safe, and Transparent process.</li>
                      <li>
                        List your available apartment with the Rental Assistance
                        Service for free.
                      </li>
                      <li>
                        Deposit your apartment keys with Rental Assistance for
                        prospective tenant’s visits.
                      </li>
                    </ol>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PageContentFour;
