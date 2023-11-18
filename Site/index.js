const App = () => {
    return(
        <div>
            <nav class="cabecalho navbar navbar-expand-lg">
                <div class="container-fluid">
                <a class="navbar-brand" href="#"><img class="img-fluid w-25" src="../img/Logo.png"></img></a>
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
        
            <div class="text-wrap text-center">A Security and Transmission Administration Resource veio para transformar o mercado industrial, melhorando a comunicação dos funcionários no detalhamento de falhas das máquinas dentro da empresa, otimizando a resolução dos problemas e criando um relatório técnico ao final de cada mes com os maiores incidentes em cada equipamento, dando abertura para uma manutenção mais objetiva, poupando gastos.</div>


            <div class="d-flex justify-content-center">
                <div class="plano1 container p-0 rounded w-25">
                    <h2 class="d-flex justify-content-center rounded shadow">Plano único</h2>
                    <ul>
                        <li>1 máquina</li>
                        <li>Relatório no final do mês</li>
                        <li>CheckList</li>
                        <li>Entre outras opções...</li>
                    </ul>
                    <div class="d-flex justify-content-center m-3">
                        <button type="button" class="btn btn-secondary rounded">R$149,99 por mês</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
  )