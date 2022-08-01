import * as React from 'react';
import foto from './sobre.jpg';
import Box from '@mui/material/Box';
import Portal from '@mui/material/Portal';
import './About.css'
import { Button } from '@mui/material';
// import Drawer from '../Drawer'




export default function About() {

    const formacoes = <span>
        Anatomia da coluna vertebral, com professor Cristiano Collier (10h) <br />
        * * *<br />
        Yoga e lesões no aparelho locomotor, com professor Cristiano Collier (10h)<br />
        * * * <br />
        Laboratório de Asanas, com Marina de Moraes (32h)<br />
        * * * <br />
        Workshop Anatomia e Prática do Yoga com foco em Bandhas (4h)
    </span>

    const [show, setShow] = React.useState(false);
    const container = React.useRef(null);

    const handleClick = () => {
        setShow(!show);
    };

    React.useEffect(() => {
        OnLoad()

    })

    function OnLoad() {
        window.scrollTo({ top: window.screen.height, behavior: 'smooth' })
    }


    return (
        <div className="conteudo__sobre">

            <h2 id="titulo_sobre">SOBRE MIM</h2>
            <section className="tudo_sobre">
                <div className='foto_sobre'>
                    <h3 id="titulo_texto">
                        "YOGA, A EXPERIÊNCIA DO UNO"
                    </h3>
                </div>
                <div className='texto_sobre'>

                    <p>
                        Sou professora de yoga especializada em Tantra, Hatha Yoga e Vinyasa. Percebo minhas aulas como momentos de compartilhamento e troca de saberes que nos ajudam a reconhecermos a potência da vida, do sagrado e do divino dentro de nós.  Reconhecer, afinal, os recursos que já temos para sermos verdadeiramente felizes.
                        <br /><br />
                        Minha jornada no yoga iniciou-se no ano de 2020, em uma período difícil da minha vida, em que estava enfrentando crises de pânico e ansiedade. O yoga, especialmente o pranayama, mostrou-se para mim como uma excelente terapia e passei a praticar todos os dias. Um dia, meio a uma prática em que senti conexão profunda com todo o universo, transpondo todas as barreiras que faziam sentir-me isolada do mundo, percebi que eu deveria compartilhar dessa experiência revolucionária com outras pessoas.
                        <br /><br />
                        Passei por altos e baixos nessa jornada, tive muitas dificuldades financeiras, físicas e mentais que me impediram de lecionar mais jovem.

                        No início do ano de 2021 pude me inscrever em curso de formação de instrutores e começar a colocar em prática meu sonho. Atualmente, estou me formando em curso de 200h certificado pelo Yoga Alliance e através do Gurukula Instituto de Yoga de São Paulo. Ao longo desse ano, fiz diversos cursos para aprimorar e aprofundar meu conhecimento nesta área maravilhosa.
                        <br /><br />

                        <Button
                            variant="outlined"
                            onClick={handleClick}
                            size="small"
                            sx={{
                                fontWeight: 'bold',
                                fontFamily: 'Nunito Sans',
                                width: '60%',
                                height: '20px',
                                alignSelf: 'center',
                                p: 1.5
                            }}>
                            Formaçoes
                        </Button>
                        <Box sx={{ my: 1 }}>
                            {show ? (
                                <Portal container={container.current}>
                                    {formacoes}
                                </Portal>
                            ) : null}
                        </Box>
                        <Box
                            sx={{
                                my: 2,
                                border: (show ? '1px solid' : '0px'),
                                borderRadius: 1,
                                lineHeight: '30px',
                            }}
                            ref={container} />

                        Ofereço aulas online e presenciais, no Guajiru, uma vila ao lado da praia de Flecheiras, litoral Oeste do Ceará.

                        <br /><br />

                        <b>Vem praticar comigo e descobrir a potência do yoga!</b>

                    </p>
                    <Box className='footer_sobre'>

                    </Box>
                </div>
            </section>
        </div>

    )
}
