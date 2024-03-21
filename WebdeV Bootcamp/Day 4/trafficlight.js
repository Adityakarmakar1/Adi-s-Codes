const lightBox = document.getElementById('light-box');
    const lightOne = document.getElementById('light-one');
    const lightTwo = document.getElementById('light-two');
    const lightThree = document.getElementById('light-three');

    
    function swapColors(element1, element2) {
        const tempColor = window.getComputedStyle(element1).backgroundColor;
        element1.style.backgroundColor = window.getComputedStyle(element2).backgroundColor;
        element2.style.backgroundColor = tempColor;
    }

    
    if (window.getComputedStyle(lightOne).backgroundColor !== 'rgb(255, 0, 0)') {
        swapColors(lightOne, lightThree);
    }

    if (window.getComputedStyle(lightTwo).backgroundColor !== 'rgb(255, 255, 0)') {
        swapColors(lightTwo, lightThree);
    }