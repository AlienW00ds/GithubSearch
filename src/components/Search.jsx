import { useState } from 'react';
import '../styles/search.css'
import { MdSearch } from 'react-icons/md';
import { useGlobalContext } from '../hooks/useGlobalContext';

const Search = () =>{
    const {errors, requests, isLoading, searchUser } = useGlobalContext();
    const [users, setUsers] = useState('');
   

   const handleSubmit = (e) =>{
    e.preventDefault();
    searchUser(users)
   }
  return (
  <section className="section">
    <div className="section-center search-card">
        {errors.show && <div className="error-wrapper"> <p> {errors.msg} </p> </div>}
        <form onSubmit={handleSubmit}>
            {/* <p>{error}</p> */}
            <div className='form-control'>
<MdSearch/>
<input type="text" placeholder='Enter Github user' value={users} onChange={(e) => setUsers(e.target.value)} />
{requests > 0 && !isLoading && ( <button type='submit'>
    Search
</button>)}

            </div>
            <h3 className='req'> Requests:{`${requests}`} / 60 </h3>
        </form>

    </div>
  </section>
    );
}

export default Search;
