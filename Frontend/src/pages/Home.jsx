import { Header } from "./Movies/Header";
import { MoviesContainerPage } from "./Movies/MoviesContainerPage";
export const Home = () => {
  return (
    <>
      <Header />
      <section className="mt-[10rem]">
        <MoviesContainerPage />
      </section>
    </>
  );
};
