import './login.css';

import Logo from '../../assets/logotipo.jpg'




function Login() {  
    
  return (
   
      <div className='Container'>

        <img className='img' src= {Logo} alt="" />

         <h4>ACESSO AO SISTEMA</h4>        

        <form className='Form'>          

          <div>

            <input className='Email' type= "email" placeholder='Digite seu e-mail de usuário'/>


          </div>

          <div >

           <input className='Password'  type= "password" placeholder='Digite sua senha de usuário'/>
            

          </div>

          <button className='Button'>ENTRAR</button>

        </form>  

        <footer className='Footer'> 
          
          <h5>©TERA SYSTEMS</h5>
        
        </footer>
       
      </div>
 
  );
 
};

export default Login
