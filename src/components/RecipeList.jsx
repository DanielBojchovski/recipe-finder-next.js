import Image from "next/image";
import Link from "next/link";

export default function RecipeList({ recipes, type }) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5 overflow-y-auto">
      {recipes?.map((recipe, index) => {
        return (
          <div
            className="rounded bg-zinc-800 overflow-hidden"
            key={index}
          >
            <Image
              alt="Recipe"
              width={500}
              height={500}
              src={recipe.strMealThumb}
              className="w-full"
            />
            <div className="p-5">
              <h2 className="font-bold text-2xl text-amber-500">{recipe.strMeal}</h2>
              <div className="flex justify-between">
                <Link href={`/types/${type}/${recipe.idMeal}`}>
                  <button className="text-white text-bold bg-cyan-500 rounded-lg py-1 px-3 mt-5 hover:bg-cyan-600">
                    Get Recipe Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
