// pages/index.js (หรือหน้าที่คุณต้องการใช้ Navbar)

import Sidebar from '@/components/Sidebar';
import Spinner from '@/components/Spinner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const Home = () => {
  return (
    <>
      <Spinner />
      <Sidebar /> {/* นำคอมโพเนนต์ Navbar มาแสดงที่นี่ */}
      <div className="content">
        <Navbar />
        <div className="container-fluid pt-4 px-4">
          <div className="row vh-100 bg-secondary rounded align-items-center justify-content-center mx-0">
            <div className="col-md-6 text-center">
              <h3>This is blank page</h3>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      

    </>
  );
};

export default Home;
