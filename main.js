const form = document.getElementById('form-campos');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const campoA = parseFloat(document.getElementById('campoA').value);
        const campoB = parseFloat(document.getElementById('campoB').value);
        const mensagemSucesso = document.querySelector('.success-message');
        const mensagemErro = document.querySelector('.error-message');

        const mensagemDeSucessoTexto = `Formulário VALIDO pois o ${campoB} é  maior do que o ${campoA}`;
        const mensagemDeErroTexto = `Formulário INVALIDO pois o ${campoB} é menor do que o ${campoA}`;

        if (campoB > campoA) {
            mensagemSucesso.innerHTML = mensagemDeSucessoTexto;
            mensagemSucesso.style.display = 'block';
            mensagemErro.style.display = 'none';
        } else {
            mensagemErro.innerHTML = mensagemDeErroTexto;
            mensagemErro.style.display = 'block';
            mensagemSucesso.style.display = 'none';
        }
    });