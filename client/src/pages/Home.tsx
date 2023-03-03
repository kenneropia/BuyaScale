import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Layout from "../layout/Layout";


// py-16 px-4 md:px-8 lg:px-10 xl:px-16
const Home: React.FC = () => {
    return (
        <Layout>
            <div className="text-red-500 [color:green]">
                <SEO properties={{}} />
                <Hero />
                <p>Hi, Galaxy</p>
            </div>
        </Layout>
    )
}

export default Home