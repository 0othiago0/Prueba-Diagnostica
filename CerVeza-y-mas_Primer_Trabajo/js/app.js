

const checkData = (event) => {
    event.preventDefault();
    console.log("hola");
    let username = document.getElementById("username").value
    let facebook = document.getElementById("facebook").value
    let github = document.getElementById("github").value
    let linkedin = document.getElementById("linkedin").value

    manejarDom(username, facebook, github, linkedin)
}

const manejarDom = (username, facebook, github, linkedin) => {
    let navBar = document.getElementById("navBar")
    let footerName = document.getElementById("footerName");

    navBar.innerHTML = `           
            <li>
                <a href="./error404/error404.html">Gana un millon de dolares!</a>  
            </li>
            <li>
                <a href="${linkedin}" target="_blank">linkedin</a>
            </li>
            <li>
                <a href="${facebook}" target="_blank">Facebook</a>
            </li>
            <li>
                <a href="${github}" target="_blank">Github</a>
            </li>`
    footerName.innerHTML = `Bienvenido/a ${username} a la prueba diagnostica de Juan Souza y Thiago Viera`;

}




let form = document.getElementById("form").addEventListener("submit", checkData)
























// const miDiv = document.getElementById('mi-div');

// miDiv.innerHTML = `
//   <h1>${miVariable}</h1>
//   <p>Este es un ejemplo de plantilla literal con innerHTML.</p>
// `;