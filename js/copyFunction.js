function myFunction() {
    var copyText = document.getElementById("ticketCode");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copiado! ✔";
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copiar";
}