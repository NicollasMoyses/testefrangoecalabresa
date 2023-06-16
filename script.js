function verificar() {
    var nac = document.querySelector('input[name="txtnac"]:checked');
    var hobby = document.querySelector('input[name="txthob"]:checked');
    var img = document.createElement('img');
    var res = document.getElementById('res')

    if (nac && hobby && nac.id === 'nordico' && hobby.id === 'sexo') {
        img.setAttribute('src', 'alemao.png');
        res.innerHTML = `Você é o Alemão.`
        res.appendChild(img)
        
    } else if (nac && hobby && nac.id ==='nordico' && hobby.id ==='breja') {
        img.setAttribute('src', 'joao.png') ;
        res.innerHTML = `Você é o João`
        res.appendChild(img)
    } else if (nac && hobby && nac.id ==='brasileiro' && hobby.id ==='musica') {
        img.setAttribute('src', 'pedro.png')
        res.innerHTML = `Você é o Pedro`
        res.appendChild(img)
    } else if (nac && hobby && nac.id ==='brasileiro' && hobby.id ==='pacoca') {
        img.setAttribute('src', 'selfie.png')
        res.innerHTML = `Você é o selfie`
        res.appendChild(img)
    } else if (nac && hobby && nac.id ==='brasileiro' && hobby.id ==='fofocar') {
        img.setAttribute('src', 'caio.png')
        res.innerHTML = `Você é o Caio`
        res.appendChild(img)
    } else if (nac && hobby && nac.id ==='brasileiro' && hobby.id ==='engabelar') {
        img.setAttribute('src', 'nicollas.png')
        res.innerHTML = `Você é o Nicollas`
        res.appendChild(img)
    } else if (nac && hobby && nac.id ==='brasileiro' && hobby.id ==='breja') {
        img.setAttribute('src', 'pedro.png')
        res.innerHTML = `Você é o Pedro`
        res.appendChild(img)
    } else if (nac && hobby && nac.id === 'nordico' && (hobby.id === 'musica' || hobby.id === 'fofocar' || hobby.id === 'pacoca') ) {
        res.innerHTML = 'Você não é nada com porra nenhuma KKKKKKKKKKKKKKK. <br>Nórdicos não fazem isso.';
        img.setAttribute('src', 'kings.png')
        res.appendChild(img)
    } else if (nac && hobby && nac.id ==='nordico' && hobby.id ==='engabelar') {
        res.innerHTML = 'Você não é nada com porra nenhuma KKKKKKKKKKKKKKK. <br>Nórdicos não fazem isso.';
        img.setAttribute('src', 'kings.png')
        res.appendChild(img)
    } else if (nac && hobby && nac.id === 'brasileiro' && hobby.id === 'sexo') {
        res.innerHTML = 'Hell nah bruh wtf💀';
        img.setAttribute('src', 'jotalhao.png');
        res.appendChild(img);
    }
    
    
    
    
    
    

}






