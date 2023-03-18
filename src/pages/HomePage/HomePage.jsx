import css from "../HomePage/homePage.module.css"
import { Loader } from "shared/Loader/Loader";

const HomePage = () => {
    
    return (
      <>
        <Loader />
        <p className={css.text}>
          Please, press register or login for using phonebook.
        </p>
      </>
    );
}

export default HomePage;