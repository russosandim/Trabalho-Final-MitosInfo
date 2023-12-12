import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Pages.module.css'

export default function Home() {
  return (
    <div  className={styles.body}>
      <Head>
        <title> MitosInfo </title>
      </Head>
      <Header/>
      <Navbar/>
      <div className={styles.home}>
        <main className={styles.main}>
          <h1>O que é o MitosInfo?</h1>
            <p>
              O MitosInfo é uma página focada em falar um pouco sobre nosso folclore, que muitas vezes é ignorado e subestimado, já que muitas outras culturas possuem mitologias tão chamativa. O folclore brasileiro possui diversos seres, mitos e histórias incríveis, não ficando para trás de nenhuma mitologia. Com base nas informações disponibilizadas pelo BocaWeb, o MitosInfo busca mostrar um pouco sobre as criaturas mais interessantes e conhecidas do nosso querido folclore! 
            </p>
          <h1> O Folclore Brasileiro</h1> 
            <p>O folclore brasileiro é um rico conjunto de tradições, lendas, mitos, rituais e manifestações culturais que refletem a diversidade étnica e regional do Brasil. Essa herança cultural é resultado da fusão de influências indígenas, africanas e europeias ao longo dos séculos. O folclore abrange uma vasta gama de personagens lendários, como o Saci-Pererê, a Iara, o Curupira, entre outros, além de festas populares, danças, cantigas e práticas religiosas. Essas expressões folclóricas desempenham um papel importante na identidade nacional, preservando tradições e transmitindo valores ao longo das gerações. O folclore brasileiro é uma parte fundamental da rica tapeçaria cultural do país, contribuindo para a construção da sua identidade única e plural. Duas lendas emblemáticas do folclore brasileiro são o Saci-Pererê e a Iara. O Saci, originário da cultura indígena, é um ser travesso com uma perna só que costuma aprontar travessuras em florestas e sítios. Já a Iara, uma sereia da mitologia indígena, seduz pescadores com sua beleza, levando-os para as profundezas dos rios. Essas lendas não apenas encantam, mas também refletem a rica diversidade cultural e a fusão de influências presentes no Brasil.</p>
          <h1>BocaWeb: O que é e para que serve?</h1>
          <p>
          O BocaWeb é um portal inovador desenvolvido como resultado da pesquisa de doutorado de Ricardo Nascimento, no Programa de Pós-Graduação em Educação da UFGD (Universidade Federal da Grande Dourados). Este projeto, em parceria com o IFMS (Instituto Federal do Mato Grosso do Sul), visa proporcionar acessibilidade a pessoas com deficiência visual. O BocaWeb funciona como um repositório de Objetos Digitais em Audiodescrição (ODAs), permitindo que usuários tenham acesso a informações contidas em imagens por meio de audiodescrição.
          Ele tem um propósito fundamental: tornar as informações visuais disponíveis na internet acessíveis para pessoas com deficiência visual. Os Objetos Digitais em Audiodescrição (ODAs) consistem em imagens estáticas, textos descritivos e arquivos de áudio que oferecem uma experiência completa para os usuários que dependem de audiodescrição. Além de ser uma fonte gratuita para consulta de ODAs, o BocaWeb incentiva a colaboração da comunidade, permitindo que usuários se envolvam no projeto, avaliando, cadastrando ou revisando ODAs.
          </p>
          <p className={styles.link}><a href="/objetos"> Ver elementos do nosso folclore ➡ </a></p>
        </main>
        </div>
      <Footer/>
    </div>
  )
}
