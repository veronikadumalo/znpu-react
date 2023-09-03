import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";

const HistoriaZalozenia = () => {
  return (
    <Layout>
      <SubMenu submenuItems={NAVIGATION[0].subpages} />
    </Layout>
  );
};

export default HistoriaZalozenia;
