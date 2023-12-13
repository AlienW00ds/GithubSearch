import {Info, Users, Search} from '../components'
import Loading from '../components/Loading';
import { useGlobalContext } from '../hooks/useGlobalContext';


const Home = () =>{
  const {isLoading} = useGlobalContext();
  if(isLoading){
    return(
      <main>
        <Search />
        <Loading />
      </main>
    );
  }
  return (
  <div>
    <main>
        <Search />
        <Info />
        <Users />
    </main>

  </div>
  );
}

export default Home;
