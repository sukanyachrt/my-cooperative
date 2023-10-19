
import Layout from "@/components/layouts/Layout";
import History from "./student/history";
import Uploadfile from "./student/uploadfile"; 
const Home = () => {
  return (
    <>
      <Layout>
        <Uploadfile/>
        <History />

      </Layout>
      

    </>
  );
};

export default Home;
