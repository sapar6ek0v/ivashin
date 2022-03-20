import {Route, Routes} from "react-router-dom";
import Main from "./components/Main.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import {GlobalStyle, Wrapper} from "./App.styled.js";


const App = () => {

    return (
        <>
            <GlobalStyle/>
            <Wrapper>
                <div className='main'>
                    <Header/>
                    <Routes>
                        <Route path='/' element={<Main/>}/>
                    </Routes>
                </div>

                <Footer />
            </Wrapper>
        </>
    );
}

export default App;
