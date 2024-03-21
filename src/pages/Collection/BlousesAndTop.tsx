
import Footer from "../../components/layout/Footer/Footer";
export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/products");
  const data = await response.json();
  return {
    props: { products: data },
  };
};
const BlousesAndTop = () => {
  return (
    <section className="collection">
      <div className="container">
        блузки
      </div>
      <Footer></Footer>
    </section>
  );
};

export default BlousesAndTop;