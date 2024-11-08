import { FaChalkboardTeacher } from "react-icons/fa";

function Category() {
  return (
    <div className="flex flex-wrap gap-7 w-full h-max py-28 md-px-16 px-7">
      <div className="flex flex-wrap justify-between gap-5 w-full">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">Explore courses by category</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, fuga?
          </p>
        </div>
        <button className="border border-[#f89f2a] py-2 px-3 w-max h-max rounded text-[#f89f2a] font-bold">
          All category
        </button>
      </div>

      <div className="flex flex-wrap justify-between gap-10 w-full">

        <div className="flex items-center gap-5 max-md:w-full py-5 px-7 rounded-lg shadow-lg">
          <div className="flex items-center justify-center py-5 px-7 text-3xl bg-sky-200/40 h-full shadow rounded-lg">
            <FaChalkboardTeacher className="text-sky-500" />
          </div>

          <div className="flex flex-col justify-between h-full">
            <div className="font-bold text-xl">Design & <br /> Development</div>
            <div>250+ course available</div>
          </div>
        </div>

        <div className="flex items-center gap-5 max-md:w-full py-5 px-7 rounded-lg shadow-lg">
          <div className="flex items-center justify-center py-5 px-7 text-3xl bg-orange-400 h-full shadow rounded-lg">
            <FaChalkboardTeacher className="text-white" />
          </div>

          <div className="flex flex-col justify-between h-full">
            <div className="font-bold text-xl">Marketing & <br /> Development</div>
            <div>300+ course available</div>
          </div>
        </div>


        <div className="flex items-center gap-5 max-md:w-full py-5 px-7 rounded-lg shadow-lg">
          <div className="flex items-center justify-center py-5 px-7 text-3xl bg-emerald-200/40 h-full shadow rounded-lg">
            <FaChalkboardTeacher className="text-emerald-500" />
          </div>

          <div className="flex flex-col justify-between h-full">
            <div className="font-bold text-xl">Digital <br /> Marketing</div>
            <div>150+ course available</div>
          </div>
        </div>

        <div className="flex items-center gap-5 max-md:w-full py-5 px-7 rounded-lg shadow-lg">
          <div className="flex items-center justify-center py-5 px-7 text-3xl bg-orange-800/30 h-full shadow rounded-lg">
            <FaChalkboardTeacher className="text-orange-800" />
          </div>

          <div className="flex flex-col justify-between h-full">
            <div className="font-bold text-xl">Design & <br /> Development</div>
            <div>250+ course available</div>
          </div>
        </div>

        <div className="flex items-center gap-5 max-md:w-full py-5 px-7 rounded-lg shadow-lg">
          <div className="flex items-center justify-center py-5 px-7 text-3xl bg-purple-200 h-full shadow rounded-lg">
            <FaChalkboardTeacher className="text-purple-400" />
          </div>

          <div className="flex flex-col justify-between h-full">
            <div className="font-bold text-xl">Marketing & <br /> Development</div>
            <div>300+ course available</div>
          </div>
        </div>


        <div className="flex items-center gap-5 max-md:w-full py-5 px-7 rounded-lg shadow-lg">
          <div className="flex items-center justify-center py-5 px-7 text-3xl bg-blue-200/40 h-full shadow rounded-lg">
            <FaChalkboardTeacher className="text-blue-500" />
          </div>

          <div className="flex flex-col justify-between h-full">
            <div className="font-bold text-xl">Digital <br /> Marketing</div>
            <div>150+ course available</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Category;
