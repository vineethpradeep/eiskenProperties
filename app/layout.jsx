import "@/assets/styles/globals.css";
import { ToastContainer } from "react-toastify";
import { GlobalProvider } from "@/context/GlobalContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import "photoswipe/dist/photoswipe.css";

export const metadata = {
  title: "Eisken Properties | Your Ideal Rental & Home Buying Destination",
  description:
    "Discover the perfect rental property for students, new home buyers, or lease agreements. Eisken Properties offers a wide range of properties and services to meet your housing needs.",
  keywords:
    "rental, student rental, buy a house, properties, lease, contract, housing, real estate, student housing, property management, rental agreements, home buying, Eisken Properties",
};

const MainLayout = ({ children }) => {
  return (
    <GlobalProvider>
      <AuthProvider>
        <html lang="eng">
          <head>
            <link rel="icon" href="/logo.png" type="image/x-icon" />
          </head>
          <body>
            <main>
              <Navbar />
              {children}
            </main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  );
};

export default MainLayout;
