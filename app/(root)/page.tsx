import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Fueling Big Ideas, <br /> One startup at a time
        </h1>
        <p className="sub-heading !max-w-3xl">
          Connect with Innovators, Gain Insights, and Turn Ideas into Impact.
        </p>
        <SearchForm />
      </section>
    </>
  );
}
