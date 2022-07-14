import { Box } from '@mui/material';
import CardDepo from './CardDepo'
import * as React from 'react';
import './Depo.css'

export default function Depo() {

    const alunas = { 'Cristiane Rodrigues': 'Lunar e Vinyasa', 'Kezia Almeida': 'Hatha Yoga', 'Janilly Sena': 'Personal Yoga'},
        depoimentos  = {
            'Cristiane Rodrigues': 'As aulas de yoga oportunizam autoconhecimento, confiança e bem estar. Mesmo sendo on-line a Raquel consegue proporcionar uma conexão e vínculo comigo. Uma excelente profissional, que vai além das práticas, nos oferecendo conhecimento e reflexão sobre ações que realizamos ao longo da prática.',
            
            'Kezia Almeida': 'Quando penso na Raquel, professora de Yoga, lembro do adjetivo: "olhar atento". Conheci a prática através dela. Era totalmente leiga sobre o assunto. Hoje, após o primeiro ano de yoga, posso dizer que, apesar do estado constante de evolução e aprendizado, já conto com um desenvolvimento mental e físico em mais sintonia com as propostas do Yoga. E tudo isso, através de aulas online, sob o olhar atento da Raquel. Esta nos corrige com sabedoria e nos repassa os comandos de forma clara, didática e individualizada (nos levando a evoluir sempre e ao mesmo tempo, respeitando nossas limitações). Gratidão, Raquel!!! Foi você quem me apresentou essa experiência de vida que me revela tanta sabedoria e integração.',

            'Janilly Sena': 'A Yoga pra mim é a melhor parte do meu dia, é a onde eu sinto que estou me cuidando, me amando. Sinto uma enorme diferença na minha mobilidade, onde eu vejo que tenho capacidade de fazer várias posturas que jamais acreditei fazer. Adoro!'
        }
    
    return (
        <Box className='conteudo__depos'>
            <h2 className='depos__h2'> Depoimentos </h2>
            <div className='cards_depo'>
                <CardDepo aluna={Object.keys(alunas)[0] + ' - ' + Object.values(alunas)[0]} previa={Object.values(depoimentos)[0].substring(0,90)+'...'} depoimento={Object.values(depoimentos)[0]}/>
                <CardDepo aluna={Object.keys(alunas)[1] + ' - ' + Object.values(alunas)[1]} previa={Object.values(depoimentos)[1].substring(0,98)+'...'} depoimento={Object.values(depoimentos)[1]}/>
                <CardDepo aluna={Object.keys(alunas)[2] + ' - ' + Object.values(alunas)[2]} previa={Object.values(depoimentos)[2].substring(0,96)+'...'} depoimento={Object.values(depoimentos)[2]}/>
            </div>
        </Box>
    )
}