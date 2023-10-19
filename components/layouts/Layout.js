
import Sidebar from '../sidebar/Sidebar';
import Spinner from '@/components/layouts/Spinner';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
const Layout = ({ children }) => {
    return (

        <div>
            <header>
                <title>สหกิจคณะวิทยาศาสตร์</title>
            </header>
            <Spinner />
            <Sidebar />
            <div className="content">
                <Navbar />
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
