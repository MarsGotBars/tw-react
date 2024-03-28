function App() {
  return (
    <>
      <header></header>
      <main className="bg-slate-800 h-full grid place-items-center text-red-400 font-bold">
        <div className="grid gap-2 bg-slate-500/30 rounded-md p-4 border border-white/35">
          <p>
            De styling <span className="text-lime-200">(in de classnames)</span>{" "}
            mag je weghalen
          </p>
          <p>
            wel raad ik aan de documentatie van{" "}
            <a
              className="text-blue-500 underline underline-offset-2 hover:text-orange-400 duration-300 ease"
              href="https://tailwindcss.com/docs/aspect-ratio"
            >
              tailwind
            </a>{" "}
            erbij te halen
          </p>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
