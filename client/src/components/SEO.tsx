import { Helmet } from "react-helmet-async";
import appleTouchIcon from "../images/apple-touch-icon.png";
import favicon32 from "../images/favicon-32x32.png";
import favicon16 from "../images/favicon-16x16.png";
import manifest from "../images/site.webmanifest";

const SEO: React.FC<PropsOnlyType<Partial<SEOPropsType>>> = ({ properties }) => {
    const { title = "BuyaScale", description = "The number one e-commerce website in the galaxy" } = properties
    return (
        <Helmet>
            <meta name="description" content={ description } />
            <link rel="apple-touch-icon" sizes="180x180" href={ appleTouchIcon } />
            <link rel="icon" type="image/png" sizes="32x32" href={ favicon32 } />
            <link rel="icon" type="image/png" sizes="16x16" href={ favicon16 } />
            <link rel="manifest" href={ manifest } />
            <title>{ title }</title>
        </Helmet>
    )
}

export default SEO