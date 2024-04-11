
import { TestimonialCard } from "../../TestimonialCard";

const PageContentSix = () => {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:p</div>x-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-4xl font-bold tracking-tight bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text sm:text-5xl">
            Read trusted reviews from our Tenants and Owners
          </h2>



          <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8 m-3">
            <div className="mb-8 sm:break-inside-avoid">
              <TestimonialCard />
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <TestimonialCard />
            </div>
            <div className="mb-8 sm:break-inside-avoid">
              <TestimonialCard />
            </div>
            <div className="mb-8 sm:break-inside-avoid">
              <TestimonialCard />
            </div>
            <div className="mb-8 sm:break-inside-avoid">
              <TestimonialCard />
            </div>
            <div className="mb-8 sm:break-inside-avoid">
              <TestimonialCard />
            </div>
            <div className="mb-8 sm:break-inside-avoid">
              <TestimonialCard />
            </div>



          </div>
        </div>
      </section>
    </>
  );
};

export default PageContentSix;
