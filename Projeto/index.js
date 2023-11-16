const App = () => {
    return(
        <div>
            <nav class="cabecalho navbar navbar-expand-lg">
                <div class="container-fluid">
                <a class="navbar-brand" href="#"><img class="img-fluid w-50 p-3" src="./img/Logo.png"></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sobre</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Compre</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contate-nos</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        

        
            <div class="d-flex justify-content-around gap-3 p-3 ">
                <div class="plano1 container p-0 rounded">
                    <h2 class="border border-bottom-2 border-dark rounded">Empresas Pequenas</h2>
                    <ul>
                        <li>1-15 máquinas</li>
                        <li>Relatório no final do mês</li>
                        <li>CheckList</li>
                        <li>Entre outras opções...</li>
                    </ul>
                    <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-secondary rounded">R$249,99</button>
                    </div>
                </div>
                <div class="plano2 container p-0 rounded ">
                    <h2 class="border border-bottom-2 border-dark rounded" >Empresas Médias</h2>
                    <ul>
                        <li>16-50 máquinas</li>
                        <li>Relatório no final do mês</li>
                        <li>CheckList</li>
                        <li>Entre outras opções...</li>
                    </ul>
                    <button type="button" class="btn btn-secondary rounded">R$179,99</button>
                </div>
                <div class="plano3 container p-0 rounded">
                    <h2 class="border border-bottom-2 border-dark rounded" >Empresas Grandes</h2>
                    <ul>
                        <li>Mais de 50 máquinas</li>
                        <li>Relatório no final do mês</li>
                        <li>CheckList</li>
                        <li>Entre outras opções...</li>
                    </ul>
                    <button type="button" class="btn btn-secondary rounded">R$149,99</button>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
  )