const btn = document.querySelector('#gen');
const radioButtons = document.querySelectorAll('input[name="shape"]');
btn.addEventListener("click", () => {
    let selectedShape;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedShape = radioButton.value;
            break;
        }
    }
    const clr = document.getElementById("color").value;
    if(selectedShape=='c'){
        var num = parseInt(document.getElementById("count").value);
        for(var i=parseInt(0); i<num;i++)
        {
            const head = document.querySelector("#cr");
            const first_tag = document.createElement('div');
            head.classList.add('first_tag');
            head.appendChild(first_tag);
            first_tag.style.backgroundColor = document.getElementById("color").value;
            first_tag.className="get_stylec";
        }
    }
    else if(selectedShape=='r'){
        var num = parseInt(document.getElementById("count").value);
        for(var i=parseInt(0); i<num;i++)
        {
            const head = document.querySelector("#cr");
            const first_tag = document.createElement('div');
            head.classList.add('first_tag');
            head.appendChild(first_tag);
            first_tag.style.backgroundColor = document.getElementById("color").value;
            first_tag.className="get_styler";
        }
    }
    else
    {
        var num = parseInt(document.getElementById("count").value);
        for(var i=parseInt(0); i<num;i++)
        {
            const head = document.querySelector("#cr");
            const first_tag = document.createElement('div');
            head.classList.add('first_tag');
            head.appendChild(first_tag);
            first_tag.style.backgroundColor = document.getElementById("color").value;
            first_tag.className="get_styles";
        }
    }
});