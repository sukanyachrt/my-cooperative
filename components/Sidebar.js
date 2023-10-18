
import Image from 'next/image';
const Sidebar = () => {
    return (
        <div className="sidebar pe-4 pb-3">
            <nav className="navbar bg-secondary navbar-dark">
                <a href="index.html" className="navbar-brand mx-4 mb-3">
                    <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>สหกิจ</h3>
                </a>
                <div className="d-flex align-items-center ms-4 mb-4">
                    <div className="position-relative">
                    <Image className="rounded-circle" src="/img/user.jpg" alt="image" width={40} height={40} />
                        
                            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div className="ms-3">
                        <h6 className="mb-0">Jhon Doe</h6>
                        <span>นักศึกษา</span>
                       
                    </div>
                </div>
                <div className="navbar-nav w-100">
                    
                    <a href="chart.html" className="nav-item nav-link active"><i className="fa fa-file-alt me-2"></i>อัพโหลดไฟล์</a>
                    
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
