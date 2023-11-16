const App = () => {
    return(
        <div>
            <nav class="cabecalho navbar navbar-expand-lg">
                <div class="container m-3">
                    <a class="navbar-brand " href="./index/index.html"><img class="img-fluid w-50 p-3 " src="../img/Logo.png"></img></a>
                </div>
            </nav>
                
            <div>
                <h1 class="d-flex justify-content-center" >O que você deseja realizar?</h1>
                
                
                <div class="pastas d-flex justify-content-center flex-column p-0 container">
                    <a class="nav-link" href="">💼 Checklist</a>
                    <a class="nav-link" href="">💼 Canal de incidentes</a>
                    <a class="nav-link" href="">💼 Informações técnicas</a>
                    <a class="nav-link" href="">💼 Central de ajuda</a>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
    )