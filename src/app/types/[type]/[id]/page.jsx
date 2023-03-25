import Image from "next/image";

async function getRecipeDetails(id) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return res.json();
}

export default async function page({ params }) {
  const recipeDetails = await getRecipeDetails(params.id);
  const details = recipeDetails.meals[0];
  const ingredients = Object.keys(details)
    .filter((key) => key.indexOf("Ingredient") > 0)
    .map((ingKey) => (details[ingKey]?.length ? details[ingKey] : undefined))
    .filter(Boolean);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <Image
          alt="Recipe"
          width={500}
          height={500}
          src={details.strMealThumb}
          className="w-full"
        />
      </div>
      <div className="p-5 text-amber-200">
        <h1>
          Recipe Name:{" "}
          <span className="font-bold text-2xl">{details.strMeal}</span>
        </h1>

        <div className="tags mt-3">
          <p className="mb-3">Ingredients List:</p>
          {ingredients.map((tag, i) => (
            <span
              key={i}
              className="bg-cyan-500 text-white text-bold px-2 py-1 inline-block rounded mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
