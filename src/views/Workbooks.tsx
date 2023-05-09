import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";

const Workbooks = () => {
  return (
    <Layout>
      <SubMenu submenuItems={NAVIGATION[5].subpages} />
    </Layout>
  );
};

export default Workbooks;
