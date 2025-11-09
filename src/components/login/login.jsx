"use client"

import './login.css';

import Logo from '../../assets/logotipo.jpg'

import Iconcloseeye from '../../assets/iconcloseeye.png'

import Iconuser from '../../assets/iconuser.png'

import Iconopeneye from '../../assets/iconopeneye.png'

import { useState } from 'react';




function Login() {  

  const [showPassword, setShowPassword] = useState(false);


  const handleShowPassword = () => {

    setShowPassword(!showPassword);    

  };
    
  return (
   
      <div className='Container'>

        <img className='img' src= {Logo} alt="" />

         <h4>ACESSO AO SISTEMA</h4>        

        <form className='Form'>          

          <div className='Container-user'>

            <input className='Email' type= "email" placeholder='Digite seu e-mail de usuário'/>

            <img className='img-user' src= {Iconuser}></img>


          </div>

          <div className='Container-password' >

           <input className='Password'  type= {showPassword ? 'text': 'password'} placeholder='Digite sua senha de usuário'/>

           
           <img className='img-closeeye' src= {showPassword ? Iconcloseeye : Iconopeneye}  onClick={handleShowPassword} ></img> 
          
            

          </div>

          <button className='Button'>ENTRAR</button>

        </form>

        <div className='Container2'>

        <a href=''> Clique aqui para redefinir sua senha</a>

        <a href=''> Clique aqui para se cadastrar</a>
          
        </div>  

        <footer className='Footer'> 
          
          <h5>©TERA SYSTEMS</h5>
        
        </footer>
       
      </div>
 
  );
 
};

export default Login

// ATIVIDADES RESTANTES:

// AJEITAR O TEXTO PARA NÃO FICAR AGARRADO NA BORDA DO INPUT

// AJEITAR "REDEFINIR SENHA" E "CLIQUE AQUI PARA SE CADASTRAR" USAR TAG  "LINK TO"?




