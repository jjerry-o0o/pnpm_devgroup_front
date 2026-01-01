import { AppHeader, AppFooter } from "@/components";
import { Main, DetailInfo, Explorer } from "@/pages/index.ts";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    const toggleDark = () => {
        document.documentElement.classList.toggle("dark");
    }

    return (
        <div className="page">
            <BrowserRouter>
                <AppHeader toggleDark={toggleDark}/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/page/info/:id" element={<DetailInfo/>}/>
                    <Route path="/page/explorer" element={<Explorer/>}/>
                </Routes>
                <AppFooter/>
            </BrowserRouter>
        </div>
    );
}

export default App
