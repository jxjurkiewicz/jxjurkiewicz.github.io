import NotFound from "@/components/NotFound";

const CatchAll = ({ params: { lng } }) => {
  return <NotFound lng={lng} />;
};

export default CatchAll;
