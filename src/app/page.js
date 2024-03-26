import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center bg-black">
      <div
        className="flex flex-col items-center justify-between p-4 pt-8"
        style={{
          backgroundImage: `url('/Rectangle 2bg.png')`,
          height: "100vh",
          width: "93vw",
        }}
      >
        <div className="flex justify-between items-center w-[1110px]">
          <div>
            <Image
              src="/Logologo.svg"
              alt="Kreed Logo"
              width={107}
              height={33}
              priority
            />
          </div>
          <div className="flex gap-8">
            <ul className="flex gap-4 text-white  items-center">
              <li className="hover:text-amber-800 cursor-pointer">Home</li>
              <li className="hover:text-amber-800 cursor-pointer">About us</li>
              <li className="hover:text-amber-800 cursor-pointer">
                How it works
              </li>
              <li className="hover:text-amber-800 cursor-pointer">Services</li>
              <li className="hover:text-amber-800 cursor-pointer">Contact</li>
            </ul>
            <button className="text-white btn rounded-3xl border-2 border-white w-32 h-10 hover:bg-orange-700">
              Login
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-[260px] items-center">
          <Image
            className="cursor-pointer"
            src="/left.svg"
            alt="left"
            width={80}
            height={80}
            priority
          />
          <div className="flex flex-col items-center">
            <Image src="/text.png" alt="bg" width={800} height={176} priority />

            <p className="text-white text-center mt-4">
              Quickly integrate our solution and start processing more sales
              with <b>Kreed</b>
            </p>
            <button className="btn bg-white text-black px-8 py-2 mt-10 rounded-3xl hover:bg-orange-700">
              Get Started
            </button>
          </div>
          <Image
            className="cursor-pointer"
            src="/right.svg"
            alt="left"
            width={80}
            height={80}
            priority
          />
        </div>
        <div>
          <Image
            className="cursor-pointer"
            src="/bottom.svg"
            alt="bg"
            width={80}
            height={80}
            priority
          />
        </div>
      </div>
    </main>
  );
}
