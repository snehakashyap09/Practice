

function clearButton(){
    document.getElementById('display').value = "";
}

function appendValue(value){
    document.getElementById('display').value += value;
}

function calculate(){
    try{
        let result = eval(document.getElementById('display').value)

        document.getElementById('display').value = result;
    }
    catch(err){
        alert("Invlid Expression");
        clearButton();
    }
}