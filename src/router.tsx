import { Routes, Route } from "react-router-dom";
import { Quiz } from "./pages/quiz";
import { Creative } from "./pages/creative";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Quiz />} />
            <Route path="/creative" element={<Creative />} />
        </Routes>
    );
}