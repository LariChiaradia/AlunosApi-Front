import React from "react";
import {Link} from "react-router-dom";
import "./styles.css";
import logoCadastro from "../../assets/Cadastro.png"
import { FiEdit, FiXCircle, FiUserX} from "react-icons/fi";

export default function Alunos(){
    return(
        <div className="aluno-container">
            <header>
                <img src={logoCadastro} alt="Cadastro"className="logo"/>
                <span>Bem-Vindo(a), <strong>Larissa</strong>!</span>
                <Link className="button" to="aluno/novo">Novo Aluno</Link>
                <button type="button">
                    <FiXCircle size={35} color="#17202a"></FiXCircle>
                </button>
            </header>
            <form>
                <input type="text" placeholder="Nome" />
                <button type="button" class="button">
                    Filtrar aluno por nome (parcial)
                </button>
            </form>
            <h1>Relação de Alunos</h1>
            <ul>
                <li>
                    <b>Nome: </b>Paulo<br/><br/>
                    <b>Email: </b>paulo@gmail.com<br/><br/>
                    <b>Idade: </b>22<br/><br/>
                    <button type="button">
                        <FiEdit size={25} color="#17202a"></FiEdit>
                    </button>
                    <button type="button">
                        <FiUserX size={25} color="#17202a"></FiUserX>
                    </button>
                </li>
                <li>
                    <b>Nome: </b>Paulo<br/><br/>
                    <b>Email: </b>paulo@gmail.com<br/><br/>
                    <b>Idade: </b>22<br/><br/>
                    <button type="button">
                        <FiEdit size={25} color="#17202a"></FiEdit>
                    </button>
                    <button type="button">
                        <FiUserX size={25} color="#17202a"></FiUserX>
                    </button>
                </li>
            </ul>
        </div>
    );
}