import { ActionBtns, Container } from "./styles.tsx";
import Button from "../../common/components/button";
import { Outlet, useLocation, useNavigate } from "react-router";

export default function OnBoardingPageLayout() {
  const location = useLocation();
  const navigate = useNavigate()

  function handleClick() {
    if (location.pathname === "/login") {
      navigate("/register");
    } else {
      navigate('/login')
    }
  }

  return (
    <>
      <ActionBtns>
        <Button onClick={handleClick}>{ location.pathname === "/login"? "Register" : "Login" }</Button>
      </ActionBtns>
      <Container>
        <Outlet />
      </Container>
    </>
  )
}
