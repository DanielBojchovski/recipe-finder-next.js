"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname().replace("/", "");
  const currentArea = pathname.split("/")[1];
  const recipeID = pathname.split("/")[2];
  return (
    <div className="py-5 px-2 sm:px-10 bg-zinc-800 flex items-center justify-between">
      <div>
        <Link href="/">
          <h1 className="text-amber-200 font-bold text-2xl sm:text-5xl text-center">
            Recipe finder
          </h1>
        </Link>
        <p className="text-amber-200 mt-2">Github repo -&gt; <a className="text-cyan-500" href="https://github.com/DanielBojchovski/recipe-finder-next.js">here</a></p>
      </div>
      {pathname && currentArea && (
        <div>
          <Link
            className="bg-zinc-800 text-amber-200 p-4 text-xs sm:text-lg rounded font-bold"
            href={recipeID ? `/types/${currentArea}` : "/types"}
          >
            Back to {recipeID ? `${currentArea} recipes` : "recipe types"}
          </Link>
        </div>
      )}
    </div>
  );
}
