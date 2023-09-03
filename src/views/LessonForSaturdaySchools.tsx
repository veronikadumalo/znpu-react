import Layout from "../components/Layout";
import { SubMenu } from "../components/SubMenu";
import { NAVIGATION } from "../data/navigation";

const LessonForSaturdaySchools = () => {
  return (
    <Layout>
      <SubMenu submenuItems={NAVIGATION[6].subpages} />
    </Layout>
  );
};

export default LessonForSaturdaySchools;
