window.onload = () => {
console.log('hello world....');
    addBtnFunc();
    addcopyFunc();
    addTextBoxFunc();
}

function addBtnFunc() {
     document.getElementById('btn1').addEventListener('click', ()=> {
        getValue.call(this);
     });   
}

function addTextBoxFunc() {
    document.getElementById('addBtn').addEventListener('click', ()=> {
        console.log('adding the boxes');
        var input = document.createElement('input'); 
        input.setAttribute("type", "text");
        input.setAttribute("value", "");
        input.setAttribute("class", "search");
        input.setAttribute('style', 'top:25%');
        document.getElementById("place").appendChild(input);
    })
}

 function generateit()
    {
        return'<input type="text"><button onclick="removeit(this)"> - </button>';  
    }
    
    function removeit(input)
    {
        document.getElementById("place").removeChild(input.parentNode);
    }


function addTextBoxFunc() {
    document.getElementById('addBtn').addEventListener('click', ()=> {
        console.log('adding the boxes');
        var input = document.createElement('input'); 
        input.setAttribute("type", "text");
        input.setAttribute("value", "");
        input.setAttribute("class", "search");
        input.setAttribute('style', 'top:25%');
        document.getElementById("place").appendChild(input);
    })
}

function addcopyFunc() {
    document.getElementById('btn2').addEventListener('click', () => {
        var final = document.getElementById('txtbox1').value
        if(final) {
            navigator.clipboard.writeText(final).then(function() {
                alert('Copying to clipboard was successful!');
            }, function(err) {
                alert('Could not Copy URL: ');
            });
        } else {
            alert('Could not Copy URL: ');
        }
    });
}

function getValue() {
var textValue = document.getElementById('txtbox');
    if(textValue && textValue.value) {
        console.log('value', textValue.value);
        appendToTxtBox.call(this, textValue.value);        
    } else {
        console.log('It has empty value');
        appendToTxtBox.call(this, '');
    }
}

function appendToTxtBox(value) {
    if(true) {
        document.getElementById('txtbox1').value = value;
        
    }
}