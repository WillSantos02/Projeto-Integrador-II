function myFunction() {
    var copyText = document.getElementById("ticketCode");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999); // Range de seleção para dispositivos moveis
  
    navigator.clipboard.writeText(copyText.value);
}