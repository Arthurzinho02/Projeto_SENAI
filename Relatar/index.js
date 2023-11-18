const App = () => {
    return(
        <div>
            <nav class="cabecalho navbar navbar-expand-lg">
                <div class="container m-3">
                    <a class="navbar-brand " href="./index/index.html"><img class="img-fluid w-25 " src="../img/Logo.png"></img></a>
                </div>
            </nav>

            <h3 class="ms-5">Relatar problema</h3>
            <form class="ms-5">
            <div class="mb-5">
            <label class="form-label"  for="exampleFormControlTextarea1" >O que aconteceu?</label>
            <input class="formulario form-control" id="exampleFormControlTextarea1" aria-describedby="emailHelp"></input>
            </div>
            <div class="mb-3">
            <label class="form-label"  for="exampleFormControlTextarea1" >Como o problema foi resolvido?</label>
            <div id="emailHelp" class="form-text">Caso não tenha sido solucionado ainda, informe e justifique.</div>
            <input class="formulario form-control" id="exampleFormControlTextarea1" aria-describedby="emailHelp"></input>
            </div>
            </form>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
    )