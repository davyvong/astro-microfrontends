import React from "react";

const { default: MicroFrontendA } = await import(import.meta.env.DEV ? "http://localhost:7100/bundle.js" : "https://astro-app-a.davyvong.com/bundle.js");
const { default: MicroFrontendB } = await import(import.meta.env.DEV ? "http://localhost:7200/bundle.js" : "https://astro-app-b.davyvong.com/bundle.js");

const ReactComponent = () => (
  <>
    <MicroFrontendA />
    <MicroFrontendB />
  </>
);

export default ReactComponent;
