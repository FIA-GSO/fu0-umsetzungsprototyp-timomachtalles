// async function login() {
//     let user = document.getElementById("email").value;
//     let pass = document.getElementById("password").value;
//     const url = 'http://localhost:8000/login';
//     const data = {
//         username: "user",
//         password: "pass"
//     };
//
//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         });
//
//         if (!response.ok) {
//             throw new Error(`HTTP-Fehler! Status: ${response.status}`);
//         }
//
//         const result = await response.json();
//         alert('Erfolgreich eingeloggt:' + result);
//         return result;
//     } catch (error) {
//         console.error('Fehler beim Login:', error);
//     }
//
// }

document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite

    // Hole die Formulardaten
    const username = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Sende die Anfrage
    try {
        const response = await fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();

        if(result.status_code === 200) {
            alert("Login successful")
        } else {
            alert(result.detail)
        }
    } catch (error) {
        console.error("Error:", error);
    }
});