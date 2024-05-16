import {React, useState, useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import "./styles.css";
import api from '../../services/api';
import logoCadastro from "../../assets/Cadastro.png"
import { FiEdit, FiXCircle, FiUserX} from "react-icons/fi";

export default function Alunos(){

    const [nome, setNome] = useState('');
    const [alunos, setAlunos] = useState([]);

    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");

    const navigate = useNavigate();

    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(()=> {
        api.get("api/Alunos", authorization).then(
            response=>{setAlunos(response.data);      
            }, token)
    });

    async function logout(){
        try {
            localStorage.clear();
            localStorage.setItem("token", "");
            authorization.headers = "";
            navigate("/");
        } catch (error) {
            alert("Não foi possível fazer o logout" + error);
        }
    }

    async function editAluno(id){
        try {
            navigate(`/aluno/novo/${id}`)
        } catch (error) {
            alert("Não foi possível editar o aluno");
        }
    }

    return(
        <div className="aluno-container">
            <header>
                <img src={logoCadastro} alt="Cadastro"className="logo"/>
                <span>Bem-Vindo(a), <strong>{email}</strong>!</span>
                <Link className="button" to={`/aluno/novo/0`}>Novo Aluno</Link>
                <button onClick={logout} type="button">
                    <FiXCircle size={35} color="#17202a"></FiXCircle>
                </button>
            </header>
            <form>
                <input type="text" placeholder="Nome" />
                <button type="button" className="button">
                    Filtrar aluno por nome (parcial)
                </button>
            </form>
            <h1>Relação de Alunos</h1>
            <ul>
                {alunos.map(({alunoId, nome, email, idade})=>
                 <li key={alunoId}>
                    <b>Nome: </b>{nome}<br/><br/>
                    <b>Email: </b>{email}<br/><br/>
                    <b>Idade: </b>{idade}<br/><br/>

                    <button onClick={()=> editAluno(alunoId)}type="button" >
                    <FiEdit size={25} color="#17202a"></FiEdit>
                    </button>
                    <button type="button">
                    <FiUserX size={25} color="#17202a"></FiUserX>
                    </button>
                </li>
                )}

            </ul>
        </div>
    );
}