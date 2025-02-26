const { default: MicroFrontendC } = await import(import.meta.env.DEV ? "http://localhost:7300/bundle.js" : "https://astro-app-c.davyvong.com/bundle.js");

function App() {
  return (
    <>
      <MicroFrontendC />
    </>
  );
}

export default App;
