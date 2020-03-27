import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function NewIncident(){
    const history = useHistory()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    

    async function handleIncident(e){
        e.preventDefault();

        console.log('teste')
        
        const data = {
            title,
            description, 
            value
        }

        
        const ong_id = localStorage.getItem('ongId');
        try {        
            await api.post('incidents', data, {
                headers:{
                    Authorization: ong_id
                }
            })
            history.push('/profile')
        } catch (error) {
            alert('Falha ao cadastrar caso')            
        }

    }


    return(
        <div className="newincident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro novo caso</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrem os casos da sua ONG :)</p>
                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleIncident}>
                    <input placeholder="Título do caso" type="text" value={title} onChange={e => setTitle(e.target.value) }/>
                    <textarea placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value) }/>
                    <input placeholder="Valor em reais" type="text" value={value} onChange={e => setValue(e.target.value) }/>
                    
                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    )

}