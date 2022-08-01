import './Aulas.css'
import CardsAula from './CardsAula'
import * as React from 'react';
import { Box } from '@mui/material';
import { vinyasaImg, hathaImg, lunarImg, personalImg } from './Images/images'

export default function Aulas() {

    const backgroundStyle = {
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        transition: 1000
    }

    const vinyasaTexto = <p>
        <b>Nyasa é "colocar" e Vi significa "de uma maneira geral".</b> <br /><br />
        Nessa prática, utilizamos o Surya Namaskar (Saudação ao sol) como sequência de base.
        Dentro dela, são inseridos outros ásanas, tornando a prática diversa a cada aula.
        A respiração guia o rítmo dos movimentos, que são executados a cada inalação ou exalação. <br />
        Na turma de "Fundamentos", vocẽ aprenderá a encontrar o seu ritmo respiratório e a se movimentar de acordo com ele, conquistando também mobilidade, resistência e condicionamento, além disso, introduzimos alinhamentos e bandhas (contrações) fundamentais para a prática. <br /><br />
    </p>,

        hathaTexto = <p>
            <b>"Hatha" quer dizer Força </b><br /><br />
            Nos Asanas (posturas) dessa modalidade, você executará permanência desafiadoras, que podem se estender ao longo de várias respirações. <br />
            É uma modalidade fundamental para quem deseja conhecer a diversidade de práticas dentro da tradição do yoga, como pranayamas, mudras, yoganidra etc. <br /><br />
        </p>,

        lunarTexto = <p>Nesa turma, te convido a experimentar posturas psicofísicas que remetem as características dos arquétipos de cada lua.<br />
            Na lua nova você praticará Hatha yoga com asanas de equilíbrio e enraizamento, além de yoganidra (sono do yoga) voltado para desnevolver o teu sankalpa (propósito) do ciclo lunar.<br />
            Na lua crescente, praticaremos vinyasa com foco nas variações da postura do guerreiro Virabhadra (Shiva em sua forma herói).<br />
            Na lua cheia, vinyasa krama para a postura da deusa Shakti e variações. <br />
            E na minguante, praticamos yoga restaurativo, com meditações e yoganidras voltados para encerramento do ciclo, tendo como foco postural o shavasana (postura do cadáver).

        </p>,

        personalTexto = <p>
            Aulas personalizadas de acordo com suas necessidades e objetivos pessoais. Ideal para quem deseja ou precisa da minha atenção exclusiva ou tem horários muito difíceis de serem usados em turma. <br />
            Também é excelente para quem tem necesidades especiais decorrentes de lesões, dores crônicas, etc.
        </p>,

        modalVinyasa = <p>
            Aulas online e ao vivo através da plataforma zoom. <br /> <br />
            <b>Benefícios:</b> <br />
            Aula completa de yoga, com pranayamas, bandhas, mudras, asanas e meditações. <br />
            Alinhamentos ao vivo para prevenção de lesões. <br /><br />
            <b>Para Quem:</b><br />
            Quem nunca praticou yoga e deseja iniciar sua jornada; <br />
            Quem tem vontade de começar essa modalidade de yoga mais dinamica; <br />
            Quem já pratica mas deseja aperfeiçoar os fundamentos.<br /><br />


            <b>Quando?</b> <br />
            Quintas-feiras, das 19:30h as 20:30h<br /><br />
            <b>Mensalidade: R$ 80</b>
        </p>,

        modalHatha = <p>
            Aulas online e ao vivo através da plataforma zoom. <br /> <br />
            <b>Benefícios:</b> <br />
            Aula completa de yoga, com pranayamas, bandhas, mudras, asanas e meditações. <br />
            Alinhamentos ao vivo para prevenção de lesões. <br /><br />
            <b>Para Quem:</b><br />
            Quem nunca praticou yoga e deseja inicar sua jornada; <br />
            Quem quer conhecer a tradição do yoga; <br />
            Quem já pratica e deseja manter seu sadhana. <br /><br />

            <b>Quando?</b><br />
            Quartas-feiras, das 19:30h as 20:30h <br /><br />
            <b>Mensalidade: R$ 60</b></p>,

        modalLunar = <p>Aulas online e ao vivo através da plataforma zoom. <br /><br />
            <b>Benefícios:</b> <br />
            Aula completa de yoga, com pranayamas, bandhas, mudras, asanas e meditações. <br />
            Alinhamentos ao vivo para prevenção de lesões. <br />
            Nesse plano, as aulas ficam gravadas e disponíveis por uma semana no Drive,<br />
            para o(a) aluno(a) que deseja repetir a prática ou que não pode praticar ao vivo.<br /><br />
            <b>Para Quem:</b><br />
            Quem nunca praticou yoga e deseja iniciar sua jornada;<br />
            Quem deseja perceber, respeitar e apreciar os ciclos naturais da vida;<br />
            Quem tem vontando de desenvolver uma percepção mais positiva sobre a impermanência da vida<br /><br />

            <b>Quando?</b><br />
            Segundas-feiras, das 20h as 21h<br /><br />
            <b>Mensalidade: R$ 50</b></p>,

        modalPersonal = <p>Presencial ou Online<br /><br />
            <b>Benefícios:</b><br />
            Aulas personalizadas de acordo com suas necessidades e objetivos.<br />
            Dedicação exclusiva da professora.<br /><br />
            Alunos de personal tem acesso as aulas gravadas do Hatha yoga e do Lunar.<br /><br />
            <b>Quando?</b><br />
            Em horários agendados e acordados entre aluno(a) e professora.<br /><br />
            <b>Online: R$ 40 hora/aula<br />
                Presencial: R$ 50 hora/aula</b>
        </p>
        
    React.useEffect(() => {
        OnLoad()

    })

    function OnLoad() {
        window.scrollTo({ top: window.screen.height, behavior: 'smooth' })
    }


    return (
        <Box className='Aulas' id='titulo'>
            <h2 className='aulas__h2' >AULAS</h2>

            <div className='conteudo__aulas'>
                <CardsAula sx={{
                    backgroundImage: `url(${vinyasaImg})`,
                    ...backgroundStyle
                }} id={'Vinyasa'} titulo={'Vinyasa'} texto={vinyasaTexto} modalTexto={modalVinyasa} />
                <CardsAula sx={{
                    backgroundImage: `url(${hathaImg})`,
                    ...backgroundStyle
                }}
                    id={'hathayoga'} titulo={'Hatha Yoga'} texto={hathaTexto} modalTexto={modalHatha} />
                <CardsAula sx={{
                    backgroundImage: `url(${lunarImg})`,
                    ...backgroundStyle
                }} id={'Lunar'} titulo={'Yoga Lunar'} texto={lunarTexto} modalTexto={modalLunar} />
                <CardsAula sx={{
                    backgroundImage: `url(${personalImg})`,
                    ...backgroundStyle
                }} id={'Personal'} titulo={'Personal Yoga'} texto={personalTexto} modalTexto={modalPersonal} />
            </div>
        </Box>
    )
}