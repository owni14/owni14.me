import Footer from "@/components/elements/Footer";
import Header from "@/components/elements/Header";
import "./styles.scss";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Readonly<Props>) => {
  return (
    <div id="root">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
