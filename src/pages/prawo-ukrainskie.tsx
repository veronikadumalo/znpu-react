import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";

const PrawoUkrainskie = () => {
  return (
    <Layout>
      <SubMenu submenuItems={NAVIGATION[0].subpages} />
    </Layout>
  );
};

export default PrawoUkrainskie;
