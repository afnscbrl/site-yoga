import * as React from 'react';
import foto from './sobre.jpg';
import './About.css'
// import Drawer from '../Drawer'




export default function About() {


        
        return (
            <div id='titulo'>
               
            <section className="conteudo__sobre">
                <h2 id="sobremim">SOBRE MIM</h2>
                <img src={foto} className="conteudo__fotosobre" alt="raquel" />
                <p>Yoga, a experiência do uno<br /><br />
                    Sou professora de yoga especializada em Tantra, Hatha Yoga e Vinyasa. Percebo minhas aulas como momentos de compartilhamento e troca de saberes que nos ajudam a reconhecermos a potência da vida, do sagrado e do divino dentro de nós.  Reconhecer, afinal, os recursos que já temos para sermos verdadeiramente felizes.
                    <br /><br />
                    Minha jornada no yoga iniciou-se no ano de 2020, em uma período difícil da minha vida, em que estava enfrentando crises de pânico e ansiedade. O yoga, especialmente o pranayama, mostrou-se para mim como uma excelente terapia e passei a praticar todos os dias. Um dia, meio a uma prática em que senti conexão profunda com todo o universo, transpondo todas as barreiras que faziam sentir-me isolada do mundo, percebi que eu deveria compartilhar dessa experiência revolucionária com outras pessoas.
                    <br /><br />
                    Passei por altos e baixos nessa jornada, tive muitas dificuldades financeiras, físicas e mentais que me impediram de lecionar mais jovem.

                    No início do ano de 2021 pude me inscrever em curso de formação de instrutores e começar a colocar em prática meu sonho. Atualmente, estou me formando em curso de 200h certificado pelo Yoga Alliance e através do Gurukula Instituto de Yoga de São Paulo. Ao longo desse ano, fiz diversos cursos de curta duração, tais como:
                    <br /><br />
                    Anatomia da coluna vertebral, com professor Cristiano Collier (10h) <br />

                    Yoga e lesões no aparelho locomotor, com professor Cristiano Collier (10h)<br />

                    Laboratório de Asanas, com Marina de Moraes (32h)<br />

                    Workshop Anatomia e Prática do Yoga com foco em Bandhas (4h)

                    <br /><br />

                    Ofereço aulas online e presenciais, no Guajiru, uma vila ao lado da praia de Flecheiras, litoral Oeste do Ceará.

                    <br /><br />

                    <b>Vem praticar comigo e descobrir a potência do yoga!</b>

                </p>
            </section>
        </div>

    )
}
