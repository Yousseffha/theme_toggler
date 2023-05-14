let toggler = document.getElementById("toggler")
let text = document.getElementById("text")
let quotes = document.getElementById("quotes")

function modeswitch() {
    toggler.classList.toggle("right")
    document.body.classList.toggle("dark")
    if(document.body.classList.contains("dark")) {
        text.textContent = "good night..."
        text.style.color = "var(--moon-color)"
        quotes.innerHTML = "“I like the night.<br> Without the dark, we'd never see the stars.”"
        quotes.style.color = "var(--moon-color)"
    } else {
        text.textContent = "good morning..."
        text.style.color = "var(--sun-color)"
        quotes.innerHTML = "“Smile in the mirror. Do that every morning <br> and you’ll start to see a big difference in your life.”"
        quotes.style.color = "var(--sun-color)"
    }
}

toggler.addEventListener("click", modeswitch)