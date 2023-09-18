import React from "react";
import { App } from "./app";
import { createRoot } from "react-dom/client"; 

const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
