import "./styles.scss";

const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main id="main">
      <div className="main-wrapper">{children}</div>
    </main>
  );
};

export default Main;
