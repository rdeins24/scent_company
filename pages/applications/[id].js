// pages/applications/[id].js
import { useRouter } from "next/router";
import applications from "../../data/applicationsData";
import ApplicationTemplate from "../../components/ApplicationTemplate";

const ApplicationPage = ({ application }) => {
  const router = useRouter();
  const { id } = router.query;

  if (!application) {
    return <div>Application not found</div>;
  }

  return <ApplicationTemplate application={application} />;
};

export async function getStaticPaths() {
  const paths = applications.map((application) => ({
    params: { id: application.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const application = applications.find((app) => app.id === params.id);

  return { props: { application } };
}

export default ApplicationPage;
