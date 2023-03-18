import css from "../HomePage/homePage.module.css"
import { Loader } from "shared/Loader/Loader";

const HomePage = () => {
    
    return (
      <>
        <Loader />
        <p className={css.text}>
          Please register or login for using phonebook. Waiting for your
          action...
        </p>
      </>
    );
}

export default HomePage;