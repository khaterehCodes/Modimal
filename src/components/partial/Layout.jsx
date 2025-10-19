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
                footer
            </div>
        </>
    );
}

export default Layout;