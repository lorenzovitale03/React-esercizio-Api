import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Contacts = ({page}) => {
    return(
        <>
            <Header/>
            <Main page={page}/>
            <Footer/>
        </>
    )
}

export default Contacts