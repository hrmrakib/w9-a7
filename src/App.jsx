import Header from "./components/Header";
import Hero from "./components/Hero";
import Recipe from "./components/Recipe";

function App() {
  return (
    <>
      <div className='w-[92%] lg:w-[80%] mx-auto'>
        <Header />
        <Hero />
        <Recipe />
      </div>
    </>
  );
}

export default App;
