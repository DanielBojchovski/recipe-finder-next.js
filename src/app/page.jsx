import Link from "next/link";

export default async function Home() {
  return (
    <div className="h-screen w-full">
      <div className="text-center w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-5xl my-8 text-amber-200">Explore foods from around the world</h1>
        <Link
          className="shadow-slate-100 shadow-md hover:shadow-slate-200 hover:shadow-lg bg-cyan-300 rounded text-xl py-2 px-4 cursor-pointer hover:bg-cyan-500 hover:text-white"
          href="/types"
        >
          List of Cuisines
        </Link>
      </div>
    </div>
  )
}
