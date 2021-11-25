import React from 'react';
import './login.css';

function Login() { 
    return(
        
        <div className="login-content d-flex align-item-center">
        <form className="form-signin mx-auto">
        <div className="text-center mb-4"      >
            
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        </div>
        
        
          <input type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />
              
          <input type="password" class="form-control my-2" id="floatingPassword texy-white" placeholder="Password" />
          
        
    
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Lembrar me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted">&copy; Lucas Technology Services</p>
      </form>
      </div>

    )

}

export default Login;