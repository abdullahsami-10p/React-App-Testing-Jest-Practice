import Navbar from "react-bootstrap/Navbar";
import list from "../assets/images/list.png";

const AppHeader = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={list}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Todo List
        </Navbar.Brand>
      </Navbar>
    </>
  );
};
export default AppHeader;
