import "./style/index.css";
import App from "./component/App";
import {Root, createRoot} from "react-dom/client";

const root: Root = createRoot(document.getElementById("root") as HTMLDivElement);
root.render(
    <>
        <App/>
    </>
)