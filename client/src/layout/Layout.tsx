import Header from "../sections/Header"
import Footer from "../sections/Footer"
import ErrorBoundary from "../components/ErrorBoundary"

const Layout: React.FC<ChildrenOnlyProps> = (props) => {
    return (
        <div className="w-full font-poppins">
            <ErrorBoundary>
                <Header />
            </ErrorBoundary>
            <main>
                { props.children }
            </main>
            <ErrorBoundary>
                <Footer />
            </ErrorBoundary>
        </div>
    )
}

export default Layout