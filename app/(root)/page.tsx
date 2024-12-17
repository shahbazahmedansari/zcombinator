import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Shahbaz" },
      _id: 1,
      description: "This is a description",
      category: "Robots",
      title: "We Robots",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5e/Tesla-optimus-bot-gen-2-scaled_%28cropped%29.jpg",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading rounded-md">
          Fueling Big Ideas, <br /> One startup at a time
        </h1>
        <p className="sub-heading !max-w-3xl">
          Connect with Innovators, Gain Insights, and Turn Ideas into Impact.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Results</p>
          )}
        </ul>
      </section>
    </>
  );
}
