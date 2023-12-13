import '../styles/users.css'
import Card from './Card';
import Followers from './Followers';

const Users = () =>{
  return (
  <div>
   <section className='section'>
    <div className="section-center user-wrapper">
<Card/>
<Followers/>
    </div>
   </section>
    </div>
    );
}

export default Users;
