import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";

const Seminaria = () => {
  return (
    <Layout>
      <SubMenu submenuItems={NAVIGATION[3].subpages} />
    </Layout>
  );
};

export default Seminaria;
