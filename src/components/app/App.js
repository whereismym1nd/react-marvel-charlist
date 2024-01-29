import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage, ComicsPage, SingleComicPage } from "../pages";

import AppHeader from "../appHeader/AppHeader";






const App = () => {




    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Routes>
                        <Route index path="/" element={<MainPage />} />
                        <Route end path="/comics" element={<ComicsPage />} />
                        <Route end path="/comics/:comicId" element={<SingleComicPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;