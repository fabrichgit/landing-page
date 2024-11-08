import { FaCoins, FaStar, FaUserAlt } from "react-icons/fa";

function Course() {
  return (
    <div className="flex flex-wrap gap-7 w-full h-max py-24 bg-neutral-200/70 md-px-16 px-7">
      <div className="flex flex-wrap justify-between gap-5 w-full">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">Popular courses for you</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, fuga?
          </p>
        </div>
        <button className="bg-white border py-2 px-3 w-max h-max rounded text-[#f89f2a] font-bold">
          See all Jobs
        </button>
      </div>

      <div className="flex flex-wrap justify-between gap-10 w-full">

        <article className="flex flex-col gap-4 max-md:w-full w-[20rem] h-max p-2 pb-4 border rounded-lg bg-white shadow-md">
            <div className="w-full h-[10rem] bg-neutral-500 rounded-lg bg-[url('/htmlcssjs.jpg')] bg-cover bg-center"></div>
            <div className="flex flex-col justify-between gap-7 w-full h-max">
                <div className="flex flex-col gap-2">
                    <div className="font-bold text-sm w-max py-1 px-2 rounded-lg text-[#f89f2a] bg-[#f5d6b196]">Web design</div>
                    <p className="font-bold text-xl">Advance course for you</p>
                </div>

                <div className="flex gap-4 w-full">
                    <div className="flex items-center gap-2">
                        <div className="text-sm p-2 rounded-xl bg-blue-200/30 text-blue-500">
                            <FaUserAlt/>
                        </div>
                        <span className="text-sm font-bold font-mono">500k+</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="text-sm p-2 rounded-xl bg-orange-200/30 text-orange-500">
                            <FaStar/>
                        </div>
                        <span className="text-sm font-bold font-mono">4.9</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="text-sm p-2 rounded-xl bg-fuchsia-200/30 text-fuchsia-500">
                            <FaCoins/>
                        </div>
                        <span className="text-sm font-bold font-mono">500k+</span>
                    </div>
                </div>
            </div>
        </article>


        <article className="flex flex-col gap-4 max-md:w-full w-[20rem] h-max p-2 pb-4 border rounded-lg bg-white shadow-md">
            <div className="w-full h-[10rem] bg-neutral-500 rounded-lg bg-[url('/html-css.png')] bg-cover bg-center"></div>
            <div className="flex flex-col justify-between gap-7 w-full h-max">
                <div className="flex flex-col gap-2">
                    <div className="font-bold text-sm w-max py-1 px-2 rounded-lg text-[#f89f2a] bg-[#f5d6b196]">Web design</div>
                    <p className="font-bold text-xl">Advance course for you</p>
                </div>

                <div className="flex gap-4 w-full">
                    <div className="flex items-center gap-2">
                        <div className="text-sm p-2 rounded-xl bg-blue-200/30 text-blue-500">
                            <FaUserAlt/>
                        </div>
                        <span className="text-sm font-bold font-mono">500k+</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="text-sm p-2 rounded-xl bg-orange-200/30 text-orange-500">
                            <FaStar/>
                        </div>
                        <span className="text-sm font-bold font-mono">4.9</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="text-sm p-2 rounded-xl bg-fuchsia-200/30 text-fuchsia-500">
                            <FaCoins/>
                        </div>
                        <span className="text-sm font-bold font-mono">500k+</span>
                    </div>
                </div>
            </div>
        </article>


        <article className="flex flex-col gap-4 max-md:w-full w-[20rem] h-max p-2 pb-4 border rounded-lg bg-white shadow-md">
            <div className="w-full h-[10rem] bg-neutral-500 rounded-lg bg-[url('/sys.jpg')] bg-cover bg-center"></div>
            <div className="flex flex-col justify-between gap-7 w-full h-max">
                <div className="flex flex-col gap-2">
                    <div className="font-bold text-sm w-max py-1 px-2 rounded-lg text-[#f89f2a] bg-[#f5d6b196]">Web design</div>
                    <p className="font-bold text-xl">Advance course for you</p>
                </div>

                <div className="flex gap-4 w-full">
                    <div className="flex items-center gap-2">
                        <div className="text-sm p-2 rounded-xl bg-blue-200/30 text-blue-500">
                            <FaUserAlt/>
                        </div>
                        <span className="text-sm font-bold font-mono">500k+</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="text-sm p-2 rounded-xl bg-orange-200/30 text-orange-500">
                            <FaStar/>
                        </div>
                        <span className="text-sm font-bold font-mono">4.9</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="text-sm p-2 rounded-xl bg-fuchsia-200/30 text-fuchsia-500">
                            <FaCoins/>
                        </div>
                        <span className="text-sm font-bold font-mono">500k+</span>
                    </div>
                </div>
            </div>
        </article>

        <article className="flex flex-col gap-4 max-md:w-full w-[20rem] h-max p-2 pb-4 border rounded-lg bg-white shadow-md">
            <div className="w-full h-[10rem] bg-neutral-500 rounded-lg bg-[url('/htmlcssjs.jpg')] bg-cover bg-center"></div>
            <div className="flex flex-col justify-between gap-7 w-full h-max">
                <div className="flex flex-col gap-2">
                    <div className="font-bold text-sm w-max py-1 px-2 rounded-lg text-[#f89f2a] bg-[#f5d6b196]">Web design</div>
                    <p className="font-bold text-xl">Advance course for you</p>
                </div>

                <div className="flex gap-4 w-full">
                    <div className="flex items-center gap-2">
                        <div className="text-sm p-2 rounded-xl bg-blue-200/30 text-blue-500">
                            <FaUserAlt/>
                        </div>
                        <span className="text-sm font-bold font-mono">500k+</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="text-sm p-2 rounded-xl bg-orange-200/30 text-orange-500">
                            <FaStar/>
                        </div>
                        <span className="text-sm font-bold font-mono">4.9</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="text-sm p-2 rounded-xl bg-fuchsia-200/30 text-fuchsia-500">
                            <FaCoins/>
                        </div>
                        <span className="text-sm font-bold font-mono">500k+</span>
                    </div>
                </div>
            </div>
        </article>


        <article className="flex flex-col gap-4 max-md:w-full w-[20rem] h-max p-2 pb-4 border rounded-lg bg-white shadow-md">
            <div className="w-full h-[10rem] bg-neutral-500 rounded-lg bg-[url('/html-css.png')] bg-cover bg-center"></div>
            <div className="flex flex-col justify-between gap-7 w-full h-max">
                <div className="flex flex-col gap-2">
                    <div className="font-bold text-sm w-max py-1 px-2 rounded-lg text-[#f89f2a] bg-[#f5d6b196]">Web design</div>
                    <p className="font-bold text-xl">Advance course for you</p>
                </div>

                <div className="flex gap-4 w-full">
                    <div className="flex items-center gap-2">
                        <div className="text-sm p-2 rounded-xl bg-blue-200/30 text-blue-500">
                            <FaUserAlt/>
                        </div>
                        <span className="text-sm font-bold font-mono">500k+</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="text-sm p-2 rounded-xl bg-orange-200/30 text-orange-500">
                            <FaStar/>
                        </div>
                        <span className="text-sm font-bold font-mono">4.9</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="text-sm p-2 rounded-xl bg-fuchsia-200/30 text-fuchsia-500">
                            <FaCoins/>
                        </div>
                        <span className="text-sm font-bold font-mono">500k+</span>
                    </div>
                </div>
            </div>
        </article>


        <article className="flex flex-col gap-4 max-md:w-full w-[20rem] h-max p-2 pb-4 border rounded-lg bg-white shadow-md">
            <div className="w-full h-[10rem] bg-neutral-500 rounded-lg bg-[url('/sys.jpg')] bg-cover bg-center"></div>
            <div className="flex flex-col justify-between gap-7 w-full h-max">
                <div className="flex flex-col gap-2">
                    <div className="font-bold text-sm w-max py-1 px-2 rounded-lg text-[#f89f2a] bg-[#f5d6b196]">Web design</div>
                    <p className="font-bold text-xl">Advance course for you</p>
                </div>

                <div className="flex gap-4 w-full">
                    <div className="flex items-center gap-2">
                        <div className="text-sm p-2 rounded-xl bg-blue-200/30 text-blue-500">
                            <FaUserAlt/>
                        </div>
                        <span className="text-sm font-bold font-mono">500k+</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="text-sm p-2 rounded-xl bg-orange-200/30 text-orange-500">
                            <FaStar/>
                        </div>
                        <span className="text-sm font-bold font-mono">4.9</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="text-sm p-2 rounded-xl bg-fuchsia-200/30 text-fuchsia-500">
                            <FaCoins/>
                        </div>
                        <span className="text-sm font-bold font-mono">500k+</span>
                    </div>
                </div>
            </div>
        </article>
      </div>
    </div>
  );
}

export default Course;
