import {React, useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from "react-router-dom";
import './styles.css';
import api from '../../services/api';
import { FiCornerDownLeft, FiUserPlus } from 'react-icons/fi';

export default function NovoAluno(){

    const [id, setId] = useState(null);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState(0);

    const {alunoId} = useParams();
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(()=>{
        if(alunoId === '0')
            return;
        else
        loadAluno();
    }, [alunoId]);

    async function loadAluno(){
        try {
            const response = await api.get(`api/Alunos/${alunoId}`, authorization);

            const {id, nome, email, idade} = response.data;
            setId(id);
            setNome(nome);
            setEmail(email);
            setIdade(idade);

        } catch (error) {
            alert("Erro ao recuperar o aluno" + error);
            navigate("/alunos");
        }
    }

    async function saveOrUpdate(event){
        event.preventDefault();

        const data = {nome, email, idade}

        try {
            if(alunoId === "0"){
                await api.post("api/Alunos", data, authorization)
            }
            else{
                data.alunoId = alunoId;
                await api.put(`api/Alunos/${alunoId}`, data, authorization)
            }
               
        } catch (error) {
            alert("Erro ao gravar aluno" + error);
        }

        navigate("/Alunos")
    }

    return(
        <div className='novo-aluno-container'>
            <div className='content'>
                <section className='form'>
                    <FiUserPlus size="105" color="#1720a" />
                    <h1>{alunoId ==="0" ? "Cadastrar Novo Aluno" : "Atualizar Aluno"}</h1>
                    <Link className="back-link" to="/alunos">
                        <FiCornerDownLeft size="25" color="#1720a" />
                        Retornar
                    </Link>
                </section>
                <form onSubmit={saveOrUpdate}>
                    <input 
                    placeholder='Nome'
                    value={nome}
                    onChange={e=> setNome(e.target.value)}
                    />
                    <input 
                    placeholder='Email'
                    value={email}
                    onChange={e=> setEmail(e.target.value)}
                    />
                    <input 
                    placeholder='Idade'
                    value={idade}
                    onChange={e=> setIdade(e.target.value)}
                    />
                    <button className='button' type='submit'>{alunoId ==="0" ? "Cadastrar" : "Atualizar"}</button>
                </form>
            </div>
        </div>
    );
}