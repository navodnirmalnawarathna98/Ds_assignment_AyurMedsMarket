import Layout from "../components/Layout";
import classes from "./ProductDashboard.module.css";

const ProductDashboard = (props) => {
  return (
    <Layout>
      <div className={classes.dashBoardPage}>
        <h1>This is Product Dashboard page</h1>
        <div className={classes.dashBoardPageLeft}>
          <div className={classes.dashBoardPageLeftFirst}>

          </div>
          <div className={classes.dashBoardPageLeftSecond}>

          </div>
          <div className={classes.dashBoardPageLeftThird}>

          </div>
        </div>
        <div className={classes.dashBoardPageRight}>
          <div className={classes.dashBoardPageRightFirst}>

          </div>
          <div className={classes.dashBoardPageRightSecond}>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDashboard;
