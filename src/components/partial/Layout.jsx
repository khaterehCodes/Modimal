import { useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

function Layout({ children }) {
    const location = useLocation()
    return (
        <>
            {location.pathname === '/filterRes' ? (
                <div>
                    {children}
                </div>
            ) : (
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
            )}
        </>
    );
}

export default Layout;