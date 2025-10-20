import Footer from "../footer/Footer";
import Header from "../header/Header";

function Layout({ children }) {
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                {children}
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Layout;