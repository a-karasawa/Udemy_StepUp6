import { Fooer } from "../atomes/layout/Footer";
import { Header } from "../atomes/layout/Header";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Fooer />
    </>
  );
};
