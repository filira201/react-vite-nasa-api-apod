import Main from "./components/Main";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    let ignore = false;

    const fetchAPI = async () => {
      const KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${KEY}`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        const jsonData = JSON.parse(localStorage.getItem(localKey));
        setData(jsonData);
        return;
      }
      localStorage.clear();

      try {
        const res = await fetch(url);
        const jsonData = await res.json();
        if (!ignore) {
          localStorage.setItem(localKey, JSON.stringify(jsonData));
          setData(jsonData);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchAPI();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loading-state">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && <SideBar data={data} closeModal={handleToggleModal} />}
      {data && <Footer data={data} openModal={handleToggleModal} />}
    </>
  );
}

export default App;
