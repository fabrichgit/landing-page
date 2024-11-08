function Subscribe() {

  const submit = async () => {}

  return (
    <div className="flex flex-col items-center justify-center gap-10 w-full h-max py-28 px-16">
        <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl font-bold text-center">Subscribe Newsletter</h1>
            <p className="text-center w-[72%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit inventore corrupti ipsam unde fuga cumque tempora tempore sunt doloribus.
            </p>
        </div>

        <form action="" onSubmit={submit} className="flex w-max sm:w-[30rem] h-12 border rounded-lg shadow-xl overflow-hidden">
            <input type="text" placeholder="Enter You Email Address" className="w-full px-4" required/>
            <button className="font-bold px-3 text-white bg-orange-500">Subscribe</button>
        </form>
    </div>
  )
}

export default Subscribe
