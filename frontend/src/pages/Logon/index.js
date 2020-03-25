import React from 'react';
import './styles.css'
import herosImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

import {FiLogIn} from 'react-icons/fi';


export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="bethehero"/>
                <form>
                    <h1>Faça seu Login</h1>
                    <input placeholder="Sua ID"></input>
                    <button className="button" type="submit">Entrar</button>

                    <a href="/register">
                    <FiLogIn size={16} color="dd62be"/>
                    Não tenho cadastro
                    </a>
                </form>
            </section>

            <img src={ herosImg } alt="heroes"/>
        </div>
        
    )
}

