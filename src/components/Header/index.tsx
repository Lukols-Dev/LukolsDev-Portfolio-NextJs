import Container from "../Container";
import Magnetic from "../common/Magnetic";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="w-full bg-gray-500">
      <Container>
        <div className="flex justify-between">
          <Magnetic>
            <Logo />
          </Magnetic>
          <Menu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
