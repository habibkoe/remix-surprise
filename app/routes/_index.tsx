import type { V2_MetaFunction } from "@remix-run/node";
import Layout from "~/components/Layouts/layout";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Remix Surprice" }];
};

const IndexPage = () => {
  return (
    <Layout>
      <h1>Welcome to Remix</h1>
    </Layout>
  );
};

export default IndexPage;
