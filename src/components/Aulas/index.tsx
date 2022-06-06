import './Aulas.css'
import CardsAula from './CardsAula'
import * as React from 'react';
import { Box } from '@mui/material';


export default function Aulas() {
    const vinyasaTexto = <p></p>,

    hathaTexto = <p> Aulas online e ao vivo através da plataforma zoom. <br/> <br/> 
    Benefícios: <br/>
    Aula completa de yoga, com pranayamas, bandhas, mudras, asanas e meditações. <br/><br/>
    Alinhamentos ao vivo para prevenção de lesões.</p>,

    lunarTexto = <p>Aulas online e ao vivo através da plataforma zoom. <br/><br/>
    Benefícios:<br/>
    No lunar, as aulas variam de acordo com os ciclos da lua. Na lua nova, equilíbrio. Na lua crescente, asanas de guerreiros. Na lua cheia, vinyasa krama. Na minguante, meditações profundas.</p>,

    personalTexto = <p>Presencial ou Online<br/><br/>
    Benefícios:<br/>
    Aulas personalizadas de acordo com suas necessidades e objetivos. Dedicação exclusiva da professora.</p>,

    modalVinyasa =  <p></p>,

    modalHatha =  <p>Aulas online e ao vivo através da plataforma zoom. <br/><br/>
    Benefícios:<br/>
    Aula completa de yoga, com pranayamas, bandhas, mudras, asanas e meditações.<br/>
    Alinhamentos ao vivo para prevenção de lesões.<br/><br/>
    Nesse plano, as aulas ficam gravadas e disponíveis por uma semana no Drive,<br/>
    para o(a) aluno(a) que deseja repetir a prática ou que não pode praticar ao vivo.<br/>
    Aqui ele também tem acesso as aulas gravadas do Lunar.<br/><br/>
    Quando?<br/> 
    Terças e Quintas, das 19:30h as 20:30h <br/><br/>
    Mensalidade: R$ 120</p>,

    modalLunar =  <p>Aulas online e ao vivo através da plataforma zoom. <br/><br/>
    Benefícios: <br/>
    No lunar, as aulas variam de acordo com os ciclos da lua.<br/>
    Na lua nova, prática de hatha yoga com foco em posturas de equilíbrio.<br/>
    Na lua crescente, prática de vinyasa com ênfase nos guerreiros.<br/>
    Na lua cheia, prática de vinyasa krama para postura da Deusa.<br/>
    Na minguante, prática de restaurativa voltada para meditações profundas.<br/><br/>
    Nesse plano, as aulas ficam gravadas e disponíveis por uma semana no Drive,<br/>
    para o(a) aluno(a) que deseja repetir a prática ou que não pode praticar ao vivo.<br/><br/>
    Quando?<br/>
    Segundas-feiras, das 20h as 21h<br/><br/>    
    Mensalidade: R$ 40</p>,

    modalPersonal =  <p>Presencial ou Online<br/><br/>
    Benefícios:<br/>
    Aulas personalizadas de acordo com suas necessidades e objetivos.<br/>
    Dedicação exclusiva da professora.<br/><br/>
    Alunos de personal tem acesso as aulas gravadas do Hatha yoga e do Lunar.<br/><br/>
    Quando?<br/>
    Em horários agendados e acordados entre aluno(a) e professora.<br/><br/>
    Hora/aula: R$ 50</p>

    return (
        <Box className='Aulas' id='titulo'>
            <h2 className='aulas__h2' >AULAS</h2>

            <div className='conteudo__aulas'>
                <CardsAula id={'Vinyasa'} titulo={'Vinyasa'} texto={vinyasaTexto} modalTexto={modalVinyasa} />
                <CardsAula id={'hathayoga'} titulo={'Hatha Yoga'} texto={hathaTexto} modalTexto={modalHatha}/>
                <CardsAula id={'Lunar'} titulo={'Yoga Lunar'} texto={lunarTexto} modalTexto={modalLunar}/>
                <CardsAula id={'Personal'} titulo={'Personal Yoga'} texto={personalTexto} modalTexto={modalPersonal}/>
            </div>
        </Box>
    )
}