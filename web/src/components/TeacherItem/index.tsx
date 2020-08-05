import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/13419018?s=460&u=81e631c9f84e20289c4ba519237fde95360d772b&v=4" alt="Eu"/>
        <div>
          <strong>Leonardo Sposina</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Explica pro Product Onwer que a compilação final do programa corrigiu o bug da execução parelela de funções em multi-threads.
      </p>
      
      <footer>
        <p>
          Preço/Hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;