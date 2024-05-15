import React from "react";
import "./styles.css";

export default function Login() {
  const showPassword = () => {
    const passwordInput = document.getElementById("field-password");
    const eye = document.getElementById("eye");
    const eyeSlash = document.getElementById("eye-slash");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eye.style.display = "none";
      eyeSlash.style.display = "block";
    } else {
      passwordInput.type = "password";
      eye.style.display = "block";
      eyeSlash.style.display = "none";
    }
  };

  return (
    <div>
      <header>
        <h1>Cadastro de Alunos</h1>
      </header>
      <main>
        <form>
          <section className="inputs-container">
            <input type="email" placeholder="exemplo@gmail.com" required />
            <div className="password-container">
              <input
                type="password"
                id="field-password"
                className="field-password"
                placeholder="***********"
                required
              />
              <i
                className="fa-solid fa-eye"
                id="eye"
                onClick={showPassword}
              ></i>
              <i
                className="fa-solid fa-eye-slash"
                id="eye-slash"
                onClick={showPassword}
              ></i>
            </div>
          </section>
          <section className="password-infos">
            <div>
              <input type="checkbox" />
              <span>Lembrar senha?</span>
            </div>
            <a href="#"> Esqueceu a senha?</a>
          </section>

          <button id="btn-login" type="submit">
            Login
          </button>
          <footer>
            <hr />
            <span>
              Ainda não tem uma conta? <a href="#">Cadastre-se</a>
            </span>
          </footer>
        </form>
      </main>
    </div>
  );
}
