import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";

const Konferencje = () => {
  return (
    <Layout>
      <SubMenu submenuItems={NAVIGATION[3].subpages} />
    </Layout>
  );
};

export default Konferencje;
