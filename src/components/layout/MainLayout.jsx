import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ mode, toggleMode }) {
  return (
    <>
      <Header mode={mode} toggleMode={toggleMode} />

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px" }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}