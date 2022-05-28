import axios from "axios";
import { useQuery } from "react-query";
import SpinnerComp from "../COMPONENTS/SHARED/Spinner";

const useHomeTools = () => {
  const {
    data: homeTools,
    isLoading,
    refetch: homeToolsFetch,
  } = useQuery("tools", () => {
    const func = async () => {
      const url = `https://enigmatic-crag-73288.herokuapp.com/tools`;
      const { data } = await axios.get(url);
      return data;
    };
    return func();
  });

  if (isLoading || !homeTools) {
    return;
  }

  return { homeTools, homeToolsFetch };
};

export default useHomeTools;
