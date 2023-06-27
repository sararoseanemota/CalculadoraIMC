const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault(); //para não atualizar a página

    //valores do input    
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    //calular o imc
    const bmi = (weight / (height * height)).toFixed(2);

    //adicionar os valores na descricao
    const value = document.getElementById('value');
    let description = '';

    //classe da cor vermelha 
    value.classList.add('attention');

    //remover o hidden 
    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!';
    }else if (bmi >= 18.5 && bmi <= 25){
        description = 'Você está no peso ideal!';
        value.classList.remove('attention');
        value.classList.add('normal');
        //removendo a classe atenção e adicionando a classe normal
    }else if (bmi > 25 && bmi <= 30){
        description = 'Cuidado! Você está com sobrepeso!';  
    }else if (bmi > 30 && bmi <= 35){
        description = 'Cuidado! Você está com obesidade moderada!';
    }else if (bmi > 35 && bmi <= 40){
        description = 'Cuidado! Você está com obesidade severa!';
    }else{
        description = 'Cuidado! Você está com obesidade mórbida!';
    }

    value.textContent = bmi.replace('.', ','); //formatando ponto para virgula
    document.getElementById('description').textContent = description; //adionando a descrição 


})