function updateBiodata() {
    const name = prompt("Enter your name:", "John Doe");
    const nim = prompt("Enter your NIM:", "25");
    const email = prompt("Enter your email:", "johndoe@example.com");
    const phone = prompt("Enter your phone number:", "123-456-7890");
    const hobbies = prompt("Enter your hobbies, separated by commas:", "Reading,Coding,Traveling");

    if (name) document.getElementById("name").textContent = name;
    if (nim) document.getElementById("nim").textContent = nim;
    if (email) document.getElementById("email").textContent = email;
    if (phone) document.getElementById("phone").textContent = phone;

    if (hobbies) {
        const hobbiesList = document.getElementById("hobbies");
        hobbiesList.innerHTML = "";
        hobbies.split(",").forEach(hobby => {
            const li = document.createElement("li");
            li.textContent = hobby.trim();
            hobbiesList.appendChild(li);
        });
    }
}
