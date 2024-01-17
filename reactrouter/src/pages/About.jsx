import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const About = ({page}) => {
    return(
        <>
            <Header/>
            <Main page={page}/>
            <Footer/>
        </>
    )
}

export default About