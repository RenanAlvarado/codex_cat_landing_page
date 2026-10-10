import { useState } from 'react'
import { breeds, heroBreed } from './data/breeds'
import { BreedCard } from './components/BreedCard'
import { CatImage } from './components/CatImage'
import { SiteHeader } from './components/SiteHeader'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((open) => !open)} onNavigate={closeMenu} />

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> UM GUIA FEITO COM CARINHO</p>
            <h1 id="hero-title">Cada gato tem<br />seu <em>jeito de ser.</em></h1>
            <p className="hero-description">Descubra as histórias, os temperamentos e os pequenos detalhes que fazem cada raça ser única.</p>
            <a className="button button-dark" href="#explorar">Explorar raças <span aria-hidden="true">↓</span></a>
            <div className="hero-note"><span className="note-avatars" aria-hidden="true">●●●</span><span>Um guia para quem ama<br />gatos de todos os jeitos.</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-frame"><CatImage breed={heroBreed} className="hero-image" loading="eager" /></div>
            <div className="hero-sticker" aria-hidden="true"><span>um universo</span><strong>de ronrons</strong><span>te espera ✳</span></div>
            <span className="hero-image-caption">01 — curiosidade em cada olhar</span>
          </div>
          <span className="hero-side-note" aria-hidden="true">feito para quem ama gatos</span>
        </section>

        <section className="explore section-wrap" id="explorar" aria-labelledby="explore-title">
          <div className="section-heading">
            <div><p className="eyebrow">UM BOM COMEÇO</p><h2 id="explore-title">Pequenos grandes<br /><em>personalidades.</em></h2></div>
            <p className="section-intro">Seis raças, seis mundos diferentes. Encontre uma que combine com o seu ritmo — ou apaixone-se por todas.</p>
          </div>
          <div className="breed-grid">
            {breeds.map((breed, index) => <BreedCard breed={breed} index={index} key={breed.id} />)}
          </div>
        </section>

        <section className="details" aria-label="Conheça as raças em detalhes">
          <div className="details-top section-wrap"><p className="eyebrow">CONHEÇA DE PERTO</p><span>Uma boa companhia começa com curiosidade.</span></div>
          {breeds.map((breed, index) => (
            <article className={`breed-detail section-wrap${index % 2 ? ' detail-reverse' : ''}`} id={breed.id} key={breed.id}>
              <div className="detail-photo"><CatImage breed={breed} className="detail-image" /><span className="photo-label">{breed.name} <span>·</span> {breed.origin}</span></div>
              <div className="detail-copy"><span className="detail-index">0{index + 1} / 06</span><p className="eyebrow">{breed.kind}</p><h2>{breed.name}<span>.</span></h2><p className="detail-description">{breed.description}</p><div className="detail-facts"><div><span>JEITO DE SER</span><p>{breed.personality}</p></div><div><span>CARACTERÍSTICAS</span><p>{breed.features}</p></div><div><span>CUIDADOS GERAIS</span><p>{breed.care}</p></div></div><a className="text-link" href="#comparar">Comparar características <span aria-hidden="true">↗</span></a></div>
            </article>
          ))}
        </section>

        <section className="compare section-wrap" id="comparar" aria-labelledby="compare-title">
          <div className="compare-heading"><div><p className="eyebrow">UM OLHAR LADO A LADO</p><h2 id="compare-title">Qual combina<br />com <em>você?</em></h2></div><p>Não existe raça perfeita — existe a que faz sentido para a sua rotina. Use este guia como ponto de partida.</p></div>
          <div className="table-scroll" role="region" aria-label="Comparação entre raças; deslize horizontalmente em telas pequenas" tabIndex={0}>
            <table><thead><tr><th scope="col">RAÇA</th><th scope="col">PORTE</th><th scope="col">PELAGEM</th><th scope="col">TEMPERAMENTO</th><th scope="col">ROTINA DE CUIDADOS</th></tr></thead><tbody>
              {breeds.map((breed) => <tr key={breed.id}><th scope="row"><a href={`#${breed.id}`}>{breed.name}<span aria-hidden="true"> ↗</span></a></th><td>{breed.size}</td><td>{breed.coat}</td><td>{breed.shortPersonality}</td><td>{breed.shortCare}</td></tr>)}
            </tbody></table>
          </div>
          <p className="compare-note">Cada gato é único. Características variam entre indivíduos e não substituem orientação de profissionais que conheçam o animal.</p>
        </section>

        <section className="about" id="sobre" aria-labelledby="about-title"><div className="about-inner"><span className="about-flower" aria-hidden="true">✳</span><p className="eyebrow">MAIS CURIOSIDADE, MAIS CUIDADO</p><h2 id="about-title">Conhecer é uma forma<br />de <em>cuidar melhor.</em></h2><p>O Focinho nasceu para aproximar pessoas do universo felino. Aqui, cada raça é um convite à descoberta — sempre lembrando que adoção responsável, respeito e carinho vêm antes de qualquer pedigree.</p><a className="button button-light" href="#explorar">Continue explorando <span aria-hidden="true">↑</span></a></div></section>
      </main>

      <footer className="site-footer"><a className="wordmark footer-mark" href="#inicio"><span className="wordmark-icon" aria-hidden="true">✳</span> focinho<span className="wordmark-period">.</span></a><p>Um guia para descobrir com carinho.</p><a className="credits-link" href="#creditos">Créditos das fotografias</a><span>© 2026 Focinho</span></footer>
      <aside className="credits" id="creditos" aria-label="Créditos das fotografias"><p>Fotografias: <a href="https://commons.wikimedia.org/wiki/File:Siamese_Cat_ACAS-SI-1.jpg" target="_blank" rel="noreferrer">Siamês — Shadowmeld Photography (CC BY-SA 4.0)</a>; <a href="https://commons.wikimedia.org/wiki/File:Maine_Coon_Cat_Atticus.jpg" target="_blank" rel="noreferrer">Maine Coon — Hollakr (domínio público)</a>; <a href="https://commons.wikimedia.org/wiki/File:Siamese_cat,_female.jpg" target="_blank" rel="noreferrer">Siamês — Felinlove (CC BY-SA 4.0)</a>; <a href="https://commons.wikimedia.org/wiki/File:Persian_Cat_by_Pouria_Afkhami_pixoos.jpg" target="_blank" rel="noreferrer">Persa — Pixoos (CC BY-SA 4.0)</a>; <a href="https://commons.wikimedia.org/wiki/File:Blue_point_and_white_Ragdoll_cat.jpg" target="_blank" rel="noreferrer">Ragdoll — kishjar? (CC BY 2.0)</a>; <a href="https://commons.wikimedia.org/wiki/File:Bengal_Cat.jpg" target="_blank" rel="noreferrer">Bengal — Gabel (domínio público)</a>; <a href="https://commons.wikimedia.org/wiki/File:British_Shorthair_cat.jpg" target="_blank" rel="noreferrer">British Shorthair — George E. Koronaios (CC BY-SA 4.0)</a>. Licenças: <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA 4.0</a> · <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noreferrer">CC BY 2.0</a>. Imagens carregadas de links externos; disponibilidade sujeita ao Wikimedia Commons.</p></aside>
    </>
  )
}

export default App
