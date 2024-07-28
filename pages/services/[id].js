import { useRouter } from 'next/router';
import services from '../../data/servicesData';
import ServiceTemplate from '../../components/ServiceTemplate';

const Service = ({ service }) => {
  const router = useRouter();
  const { id } = router.query;

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <ServiceTemplate 
      title={service.name} 
      heroImage={service.heroImage} 
      sections={service.sections} 
    />
  );
};

export async function getStaticPaths() {
  const paths = services.map((service) => ({
    params: { id: service.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const service = services.find((service) => service.id === params.id);

  return { props: { service } };
}

export default Service;
