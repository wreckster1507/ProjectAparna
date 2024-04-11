

const PageContentFive = () => {
  const accountants = [
    {
      title: "Club House",
      description: "Club House is the best place to enjoy with your family and friends.",

    },
    {
      title: "Swimming Pool",
      description: "Swimming Pool is the best place to enjoy with your family and friends.",


    },
    {
      title: "Gym",
      description: "Gym is the best place to enjoy with your family and friends.",
    },
    {
      title: "Super Market",
      description: "super Market is the best place to enjoy with your family and friends.",
    },
    {
      title: "Sports Area",
      description: "Sports Area is the best place to enjoy with your family and friends.",
    },
  ];



  return (
    <>
      <div>
        <section>
          <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
              <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                <h2 className="text-3xl font-bold sm:text-4xl">Facilities</h2>

                <p className="mt-4 text-gray-600 text-xl">
                  In Aparna Lot of Facilities available for Residents to Enjoy
                  with thier Family and for shopping p Grocery Shop is operating
                  inside the complex and also p Leading School “Maharishi Senior
                  Secondary School” Functioning inside the Complex. Best
                  Facilities in around Sriperumbudur is one of the biggest
                  attaraction for Families.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {accountants.map((accountant, index) => (
                  <div
                    key={index}
                    className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  >
                    <span className="inline-block rounded-lg bg-gray-50 p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                      </svg>


                    </span>

                    <h2 className="mt-2 font-bold">{accountant.title}</h2>

                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                      {accountant.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PageContentFive;
