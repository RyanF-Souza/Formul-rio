var nomeCorreto=0, sobreCorreto=0, cpfCorreto=0
var letrasNome=0, letrasSobre=0, cpfCaracteres=0

document.getElementById('nome').onkeydown=function(){
    if(event.key!='Backspace'){
        letrasNome++
    }else{
        letrasNome--
        if(document.getElementById('nome').value==''){
            letrasNome=0
        }
    }
}
document.getElementById('sobrenome').onkeydown=function(){
    if(event.key!='Backspace'){
        letrasSobre++
    }else{
        letrasSobre--
        if(document.getElementById('sobrenome').value==''){
            letrasSobre=0
        }
    }
}
document.getElementById('cpf').onkeydown=function(){
    if(event.key!='Backspace'){
        cpfCaracteres++
    }else{
        cpfCaracteres--
        if(document.getElementById('cpf').value==''){
            cpfCaracteres=0
        }
    }
}

document.getElementById('proximo').onclick=function(){
    if(isNaN(parseFloat(document.getElementById('nome').value))){
        if(letrasNome>3){
            nomeCorreto=2
        }else{
            alert('O campo "Nome" deve conter no mínimo 3 caracteres')
            nomeCorreto=0
        }
    }else{
        alert('O campo "Nome" não deve ser composto apenas por números')
        nomeCorreto=0
    }
    if(isNaN(parseFloat(document.getElementById('sobrenome').value))){
        if(letrasSobre>3){
            sobreCorreto=2
        }else{
            alert('O campo "Sobrenome" deve conter no mínimo 3 caracteres')
            sobreCorreto=0
        }
    }else{
        alert('O campo "Sobrenome" não deve ser composto apenas por números')
        sobreCorreto=0
    }
    if(isNaN(parseFloat(document.getElementById('cpf').value))){
        alert('O campo "CPF" não deve conter letras')
    }else{
        if(cpfCaracteres==11){
            for(i=1;i<=11;i++){
                let y=i.toString()
                y=y+y+y+y+y+y+y+y+y+y+y
    
                if(document.getElementById('cpf').value==y){
                    alert('O campo "CPF" não deve ser preenchido uma série de números repetidos')
                    cpfCorreto=1
                }else if(document.getElementById('cpf').value=='01234567890'||document.getElementById('cpf').value=='12345678901'||document.getElementById('cpf').value=='12345678910'||document.getElementById('cpf').value=='01234567891'){
                    alert('O campo "CPF" não deve ser preenchido uma sequencia de números')
                    cpfCorreto=1
                }else{
                }
            }

            if(cpfCorreto==0){
                cpfCorreto=2
            }
        }else{
            alert('O campo "CPF" deve conter no exatos 11 caracteres')
            cpfCorreto=0
        }
    }

    console.log(nomeCorreto)
    console.log(sobreCorreto)
    console.log(cpfCorreto)
    
    if(nomeCorreto==2&&sobreCorreto==2&&cpfCorreto==2){
        document.getElementById('caixaDeFormularios1').style.display='none'
        document.getElementById('caixaDeFormularios2').style.display='block'
    }
}

// --------------------------------------------------------------------------------------------------------

var cidadeCorreto=0, bairroCorreto=0
var letrasCidade=0, letrasBairro=0

document.getElementById('bairro').onkeydown=function(){
    if(event.key!='Backspace'){
        letrasBairro++
    }else{
        letrasBairro--
        if(document.getElementById('bairro').value==''){
            letrasBairro=0
        }
    }
}
document.getElementById('cidade').onkeydown=function(){
    if(event.key!='Backspace'){
        letrasCidade++
    }else{
        letrasCidade--
        if(document.getElementById('cidade').value==''){
            letrasCidade=0
        }
    }
}

document.getElementById('proximo2').onclick=function(){
    if(isNaN(parseFloat(document.getElementById('cidade').value))){
        if(letrasCidade>3){
            cidadeCorreto=2
        }else{
            alert('O campo "Cidade" deve conter no mínimo 3 caracteres')
            cidadeCorreto=0
        }
    }else{
        alert('O campo "Cidade" não deve ser composto apenas por números')
        cidadeCorreto=0
    }
    if(isNaN(parseFloat(document.getElementById('bairro').value))){
        if(letrasBairro>3){
            bairroCorreto=2
        }else{
            alert('O campo "Bairro" deve conter no mínimo 3 caracteres')
            bairroCorreto=0
        }
    }else{
        alert('O campo "Bairro" não deve ser composto apenas por números')
        bairroCorreto=0
    }

    if(bairroCorreto==2&&cidadeCorreto==2){
        document.getElementById('caixaDeFormularios2').style.display='none'
        document.getElementById('caixaDeFormularios3').style.display='block'
    }
}
document.getElementById('voltar').onclick=function(){
    document.getElementById('caixaDeFormularios2').style.display='none'
    document.getElementById('caixaDeFormularios1').style.display='block'
}

// -----------------------------------------------------------------------------------------------