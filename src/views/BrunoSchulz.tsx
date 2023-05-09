import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";

const BrunoSchulz = () => {
  return (
    <Layout>
      <SubMenu submenuItems={NAVIGATION[2].subpages} />
    </Layout>
  );
};

export default BrunoSchulz;
