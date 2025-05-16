import { useSearchParams } from "react-router";

const headphones = [
  {
    id: 1,
    name: "red Headphone",
  },
  {
    id: 2,
    name: "white Headphone",
  },
  {
    id: 3,
    name: "black Headphone",
  },
];

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search");
  const count = parseInt(searchParams.get("count")) || 0;
  searchParams.forEach((value, key) => console.log({ [key]: value }));
  return (
    <div>
      {count} {searchValue}
      <div className="flex gap-3">
        {headphones.map((headphone) => {
          return (
            <div
              onClick={() => {
                setSearchParams({
                  count: count,
                  search: headphone.name,
                });
              }}
              className={
                "p-5 border " +
                (headphone.name === searchValue &&
                  "border-amber-500 text-amber-500")
              }
              key={headphone.id}
            >
              {headphone.name}
            </div>
          );
        })}
      </div>
      {/* <button onClick={()=>{setSearchParams({search:data.title})}}>Add to cart +</button> */}
      <div className="flex gap-3 mt-3">
        <button
          onClick={() => {
            setSearchParams({ count: count - 1, search: searchValue });
          }}
          className="ml-2 p-2 border rounded-full"
        >
          -
        </button>
        {count}
        <button
          onClick={() => {
            setSearchParams({ count: count + 1, search: searchValue });
          }}
          className="p-2 border rounded-full"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Home;
