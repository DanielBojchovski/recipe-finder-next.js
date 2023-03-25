import Link from "next/link";

async function fetchRecipeAreas() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  const response = await res.json();
  return response.meals.map((area) => area.strArea);
}

export default async function page() {
  const areas = await fetchRecipeAreas();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
      {areas.map((area, index) => (
        <Link
          key={index}
          className="shadow-gray-50 hover:shadow-gray-100 hover:shadow-md bg-gray-300 capitalize text-center rounded text-2xl py-10 cursor-pointer font-bold hover:bg-cyan-300 hover:text-white"
          href={`/types/${area}`}
        >
          {area}
        </Link>
      ))}
    </div>
  );
}
