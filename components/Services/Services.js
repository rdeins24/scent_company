import React from "react";
import Cards from "../Cards";

const Service = ({ category, title, description }) => (
  <div className="py-8 flex flex-wrap md:flex-nowrap mx-auto ">
    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
      <span className="title-font  text-4xl text-white bg-clip-text text-transparent ">
        {category}
      </span>
    </div>
    <div className="md:flex-grow">
      {/* <h2 className="text-2xl font-bold title-font mb-2">{title}</h2> */}
      {/* <p className="leading-relaxed text-gray-100">{description}</p> */}
    </div>
  </div>
);

const Services = () => (
  <section className="text-gray-600 body-font overflow-hidden min-w-[1280px]">
    <div className="container px-5 py-24 mx-auto">
      <div className="">
        <div className="flex">

        <Service
          category="Digital Marketing"
          title="Bitters hashtag waistcoat fashion axe chia unicorn"
          description="Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer."
          />
     <div>
      <Cards/>
      <Cards/>
     </div>
          </div>

        <Service
          category="SOCIAL MEDIA"
          title="Meditation bushwick direct trade taxidermy shaman"
          description="Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer."
        />
           <section className="text-gray-600 body-font">
          <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
            <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-300">
                Pitchfork Kickstarter Taxidermy
              </h1>
              <p className="leading-relaxed text-gray-300">
                Locavore cardigan small batch roof party blue bottle blog
                meggings sartorial jean shorts kickstarter migas sriracha
                church-key synth succulents. Actually taiyaki neutra, distillery
                gastropub pok pok ugh.
              </p>
            </div>
            <div className="flex flex-col md:w-1/2 md:pl-12">
              <h2 className="title-font font-semibold text-gray-200 tracking-wider text-sm mb-3 text-2xl">
               Suntem Experti in: 
              </h2>
              <nav className="flex flex-wrap list-none -mb-1 text-lg ">
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-300 hover:text-gray-100">PINTEREST</a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-300 hover:text-gray-100">INSTAGRAM</a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-300 hover:text-gray-100">FACEBOOK ADS</a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-300 hover:text-gray-100">GOOGLE ADS</a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-300 hover:text-gray-100">MONGO DB</a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-300 hover:text-gray-100">EMAIL MARKETING</a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-300 hover:text-gray-100">TIK TOK</a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-300 hover:text-gray-100"></a>
                </li>
              </nav>
            </div>
          </div>
        </section>
        <Service
          category="UI/UX"
          title="Woke master cleanse drinking vinegar salvia"
          description="Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer."
        />
        <Service
          category="MARKETING"
          title="Woke master cleanse drinking vinegar salvia"
          description="Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer."
        />
        <section className="text-gray-600 body-font">
          <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
            <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Pitchfork Kickstarter Taxidermy
              </h1>
              <p className="leading-relaxed text-base">
                Locavore cardigan small batch roof party blue bottle blog
                meggings sartorial jean shorts kickstarter migas sriracha
                church-key synth succulents. Actually taiyaki neutra, distillery
                gastropub pok pok ugh.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-4">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="flex flex-col md:w-1/2 md:pl-12">
              <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="flex flex-wrap list-none -mb-1">
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-600 hover:text-gray-800">
                    Fifth Link
                  </a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-600 hover:text-gray-800">
                    Sixth Link
                  </a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-600 hover:text-gray-800">
                    Seventh Link
                  </a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-600 hover:text-gray-800">
                    Eighth Link
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
);

export default Services;
