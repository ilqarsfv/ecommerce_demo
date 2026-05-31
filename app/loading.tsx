import Loader from "@/assets/loader.gif";
import Image from "next/image";
const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image src={Loader} alt="Loading..." height={100} width={100} />
    </div>
  );
};

export default LoadingPage;
