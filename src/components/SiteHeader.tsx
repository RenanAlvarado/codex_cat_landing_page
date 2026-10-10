type SiteHeaderProps = {
  menuOpen: boolean
  onMenuToggle: () => void
  onNavigate: () => void
}

export function SiteHeader({ menuOpen, onMenuToggle, onNavigate }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <a className="wordmark" href="#inicio" aria-label="Focinho, início" onClick={onNavigate}>
        <span className="wordmark-icon" aria-hidden="true">✳</span> focinho<span className="wordmark-period">.</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={onMenuToggle}
      >
        <span /><span />
      </button>
      <nav id="main-navigation" className={`main-navigation${menuOpen ? ' is-open' : ''}`} aria-label="Navegação principal">
        <a href="#explorar" onClick={onNavigate}>Raças</a>
        <a href="#comparar" onClick={onNavigate}>Guia rápido</a>
        <a href="#sobre" onClick={onNavigate}>Sobre</a>
        <a className="nav-cta" href="#explorar" onClick={onNavigate}>Encontrar meu match <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  )
}
