import axios from 'axios';
import { useQuery } from 'react-query';

const useHomeTools = () => {

  const {data: homeTools, isLoading, refetch: homeToolsFetch} = useQuery('tools', () => {
    const func = async() => {
      const url = `http://localhost:5000/tools`;
      const { data } = await axios.get(url);
      return data;
    }
    return func()
  })

  if(isLoading || !homeTools){
    return;
  }

  return { homeTools, homeToolsFetch }

};

export default useHomeTools;