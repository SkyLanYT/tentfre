import { Outlet } from 'react-router-dom';

// Components
// import Footer from '../../components/footer/Footer';
// import Navigate from '../../components/navigate/Navigate';

const MainLayout = () => {
  return (
    <>
      <main className="container">
        {/* <Navigate /> */}
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
