import { FaBookOpen, FaChalkboardTeacher, FaUsers } from "react-icons/fa"

function Rate() {

  return (
    <div className="flex max-md:flex-col flex-wrap justify-between gap-10 w-full h-max bg-[#f7e7d396] p-6 rounded-lg">
      <div className="flex items-center gap-5">
        <div className="flex items-center justify-center p-5 text-3xl bg-white h-full shadow-lg rounded-lg">
            <FaBookOpen className="text-sky-500"/>
        </div>

        <div className="flex flex-col justify-between h-full">
            <div className="font-bold font-mono text-4xl text-[#]">10K+</div>
            <div>TOTAL COURSE</div>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center justify-center p-5 text-3xl bg-white h-full shadow-lg rounded-lg">
            <FaChalkboardTeacher className="text-emerald-500"/>
        </div>

        <div className="flex flex-col justify-between h-full">
            <div className="font-bold font-mono text-4xl text-[#]">500+</div>
            <div>EXPERT MENTORS</div>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center justify-center p-5 text-3xl bg-white h-full shadow-lg rounded-lg">
            <FaUsers  className="text-violet-500"/>
        </div>

        <div className="flex flex-col justify-between h-full">
            <div className="font-bold font-mono text-4xl text-[#]">300K+</div>
            <div>STUDENTS GLOBALLY</div>
        </div>
      </div>
    </div>
  )
}

export default Rate
