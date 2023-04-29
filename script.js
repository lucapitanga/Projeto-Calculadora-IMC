const firstStep = document.getElementById('first-step');

const secondStep = document.getElementById('second-step');

const thirdStep = document.getElementById('third-step');

function go(currentStep, nextStep) {
    let dNone, dBlock;

    if(currentStep === 1) {
        dNone = firstStep;
    } else if(currentStep === 2) {
        dNone = secondStep;
    } else {
        dNone = thirdStep;
    }

    dNone.style.display = 'none';

    if(nextStep === 1) {
        dBlock = firstStep;
    } else if(nextStep === 2) {
        dBlock = secondStep;
    } else {
        dBlock = thirdStep;
    }

    dBlock.style.display = 'block';
}

const buttonFirst = document.getElementById('button-first');

buttonFirst.addEventListener('click', () => {
    go(1, 2);
});

function validate() {
    const peso = document.getElementById('peso');

    const altura = document.getElementById('altura');

    peso.style.border = 'none';
    altura.style.border = 'none';

    if(!peso.value || !altura.value) {

       if(!peso.value && !altura.value) {
            peso.style.border = '1px solid red';
            altura.style.border = '1px solid red';
        } else if(!peso.value) {
            peso.style.border = '1px solid red';
        } else {
            altura.style.border = '1px solid red';
        }

    } else {
       let imc = peso.value / (altura.value * altura.value);
       const result = document.getElementById('resultado');
       if(imc < 18.5) {
        console.log('Magreza | Obesidade: 0');
        result.style.color = 'yellow';
        result.innerHTML = 'Magreza | Obesidade: 0';

       } else if(imc >= 18.5 && imc < 25) {
        console.log('Normal | Obesidade: 0');
        result.style.color = 'green';
        result.innerHTML = 'Normal | Obesidade: 0';

       } else if(imc >= 25 && imc < 30) {
        console.log('Sobrepeso | Obesidade: I');
        result.style.color = 'yellow';
        result.innerHTML = 'Sobrepeso | Obesidade: I';

       } else if(imc >= 30 && imc < 40) {
        console.log('Obesidade | Obesidade: II ');
        result.style.color = 'orange';
        result.innerHTML = 'Obesidade | Obesidade: II ';

       } else {
        console.log('Obesidade grave | Obesidade III');
        result.style.color = 'red';
        result.innerHTML = 'Obesidade grave | Obesidade III';

       }
        go(2, 3);

    };

};

const calcular = document.getElementById('calcular');

calcular.addEventListener('click', () => {
    validate();
})

const calcularNovamente = document.getElementById('calcular-novamente');

calcularNovamente.addEventListener('click', () => {
    go(3, 2);
})

const finalizar = document.getElementById('finalizar');

finalizar.addEventListener('click', () => {
    go(3, 1);
})

