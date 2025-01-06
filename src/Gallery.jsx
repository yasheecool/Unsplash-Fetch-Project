import { useQuery } from "@tanstack/react-query";
import customFetch from "./utils";
import { useGlobalContext } from "./context";

const Gallery = () => {
  const { searchValue } = useGlobalContext();

  const result = useQuery({
    queryKey: ["images", searchValue],
    queryFn: () =>
      customFetch.get(`/search/photos?query=${searchValue}&per_page=12`),
  });

  console.log(result);

  if (result?.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (result?.isError) {
    return <h1>Error...</h1>;
  }

  if (result?.data.data.results.length === 0) {
    return <h1>No images found</h1>;
  }

  return (
    <section>
      <div className="image-container">
        {result?.data?.data?.results?.map((img) => {
          const {
            alt_description,
            urls: { regular },
          } = img;
          return (
            <img
              className="img"
              key={regular}
              alt={alt_description}
              src={regular}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Gallery;
