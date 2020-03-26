import React from 'react'
import {Link} from 'react-router-dom'
import {FiPower, FiTrash2, FiArrowLeft} from 'react-icons/fi'
import './styles.css'
import logoImg from '../../assets/logo.svg'

export default function NewIncident(){
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

                <form action="">
                    <input placeholder="Título do caso" type="text"/>
                    <textarea placeholder="Descrição"/>
                    <input placeholder="Valor em reais" type="text"/>
                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    )

}