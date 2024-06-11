import { useRouter } from "next/navigation";
import { PreviousPageIcon } from "./Icons";

const PreviousPageButton = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center">
      <button className="previous-page-button" onClick={() => router.back()}>
        <PreviousPageIcon />
      </button>
    </div>
  );
};

export default PreviousPageButton;
