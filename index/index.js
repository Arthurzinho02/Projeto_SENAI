const App = () => {
    return(
        <div>
            <nav class="cabecalho navbar navbar-expand-lg">
                <div class="container m-3">
                    <a class="navbar-brand" href="index.html"><img class="img-fluid w-50 p-3" src="../img/Logo.png"></img></a>
                    <h3>Olá, Beatriz</h3>
                </div>
            </nav>

            <div class="container">
                <div class="star d-flex justify-content-center container">
                    <a href="../Desejo/desejo.html" class="star4 nav-link">S.T.A.R.</a>T✩
                </div>
            </div>            
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
    )