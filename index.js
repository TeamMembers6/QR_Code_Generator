document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('text1');
    const output = document.getElementById('display');
    const btn = document.getElementById('button');
    let preinput = '';

    function resetOutput() {
        output.src = '';
        output.style.display = 'none';
    }

    btn.onclick = function() {
        const inputValue = input.value.trim();

        if (inputValue === '' || preinput === inputValue) {
            alert(inputValue === '' ? "Please enter the details" : "Already generated the QR code, please change the URL.");
             if (inputValue==='')    {resetOutput();}
            return;
        }

        preinput = inputValue;
        btn.textContent = "Generating QR Code...";

        const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(inputValue)}`;
        output.src = qrApiUrl;

        output.onload = () => {
            btn.textContent = "Generate QR Code";
            output.style.display = 'block';
        };
    };
});
