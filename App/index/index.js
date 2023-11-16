const App = () => {
    return(
        <div>
            <nav class="cabecalho navbar navbar-expand-lg">
                <div class="container m-3">
                    <a class="navbar-brand" href="#"><img class="img-fluid w-50 p-3" src="../img/Logo.png"></img></a>
                    <h3>Olá, Beatriz</h3>
                </div>
            </nav>

            <div class="container">
                <div class="star d-flex justify-content-center container">
                    <spam class="star4">S.T.A.R.</spam>T✩
                </div>
            </div>            
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
    )