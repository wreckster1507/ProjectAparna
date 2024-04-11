
const PageContentTwo = () => {
  return (
    <>
      <div className="mt-5 ">
        <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center rounded-2xl">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">

              <h2 className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">
                Aparna</h2>

              <p className="hidden text-gray-500 md:mt-4 md:block text-xl">
                Welcome to Aparna, invariably one of the best livings in
                outskirts of chennai. We from residents association welcome
                you. We also would encourage you to go through all the sections
                of the website in detail so that you are aware of the
                facilities, services, rules & regulations and standard
                procedures made available for the residents.
              </p>

              {/* <div className="mt-4 md:mt-8"></div> */}
            </div>
          </div>

          <img
            alt=""
            src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
          />
        </section>
      </div>
    </>
  );
};

export default PageContentTwo;
