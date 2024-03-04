import React from "react";
import { RiCustomerService2Full, RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className=" max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-6">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LUXURY INCLUDED VACCATIONS FOR TWO PEOPLES</h2>
          <p className="PY-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            molestias veritatis assumenda cumque dolorem quasi culpa non nobis,
            consequatur corporis veniam a rem dignissimos praesentium? Impedit,
            atque autem aperiam corrupti deserunt culpa cumque vel. Molestias
            omnis, voluptatum culpa voluptates velit ex ad iusto autem quas
            doloremque tempore sequi impedit quasi laborum placeat? Officiis
            officia expedita assumenda? Nemo optio ea iure modi earum, impedit
            doloribus vitae at commodi necessitatibus nisi magnam esse
            voluptatem, illum rerum! Soluta labore dolorum nesciunt ipsam.
            Asperiores animi vero, eveniet cumque eaque expedita quae quisquam
            quidem consequuntur culpa tempora dolorum minus voluptatem,
            perspiciatis quam exercitationem atque rerum?
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="PY-2">LEADING SERVICE</h3>
              <p className="PY-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="PY-2">LEADING SERVICE</h3>
              <p className="PY-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border text-center">
          <p className="pt-2">GET AN ADDITIONAL 10% </p>
          <p className="py-4">OFF 12 HOURS LEFT </p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form className="w-full">
            <div className="flex flex-col my-2 ">
                <label>Destination</label>
                <select className="border rounded-md p-2">
                    <option>Grande Antigua</option>
                    <option>Key West</option>
                    <option>Maldives</option>
                    <option>Cozumel</option>
                    <option>Rome</option>
                    <option>Mecca</option>
                    <option>Thanjavur</option>
                </select>
            </div>
            <div className="flex flex-col my-4 ">
               <label>Check-in</label>
               <input className="border rounded-md p-2" type="date" />
            </div>
            <div className="flex flex-col my-2 ">
              <label>Check-out</label>
              <input className="border rounded-md p-2" type="date" />
            </div>
            <button className="w-full my-4">Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
