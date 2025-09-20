
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';



const MainLayout = () => {
      return (
            <div className=''>
                  <Navbar></Navbar>
                <div className='w-10/12 mx-auto min-h-[calc(100vh-270px)]'>
                    <Outlet></Outlet>
                   
                </div>
                <div>
                  <Footer></Footer>
                </div>
            </div>
      );
};

export default MainLayout;