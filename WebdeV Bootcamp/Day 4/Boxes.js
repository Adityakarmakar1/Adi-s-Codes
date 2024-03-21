const container = document.getElementById('container');

 
    for (let i = 0; i < 4; i++) {
        
        const box = document.createElement('div');
        
       
        box.style.width = '75px';
        box.style.height = '75px';
        box.style.backgroundColor = 'palevioletred';
        
       
        container.appendChild(box);
    }