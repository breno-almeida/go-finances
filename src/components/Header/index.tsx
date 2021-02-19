import { Container } from "./styles";

type HeaderProps = {
    title?: string | number
}
  
function Header({ title = 'Go Finances' }: HeaderProps) {
    return (
    <Container>
        <header>
        <span>{ title }</span>
        <nav>
            <a href="/list">Listagem</a>
            <a href="/create">Cadastro</a>
        </nav>
        </header>
    </Container>
    )
}

export default Header