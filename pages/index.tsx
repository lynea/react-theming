import type { NextPage } from "next";
import { Button } from "../components/atoms/button/Button.styles";

const Home: NextPage = () => {
  return (
    <>
      <Button variant="ghost"> herro</Button>
      <Button variant="cta"> herro</Button>
      <Button variant="primary"> herro</Button>
    </>
  );
};

export default Home;
