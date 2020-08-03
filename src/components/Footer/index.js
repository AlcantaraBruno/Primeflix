import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      
      <h2>Primeflix</h2>
     
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
