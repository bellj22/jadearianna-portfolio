document.addEventListener("DOMContentLoaded", () => {

    const aboutMeBtn = document.getElementById("about-me-btn")
    const aboutSkillsBtn = document.getElementById("about-skills-btn")
    const aboutCertBtn = document.getElementById("about-cert-btn")

    const aboutText = document.getElementById("about-text-placeholder")
    const aboutExtra = document.getElementById("about-me-extra")
    const skillsContainer = document.getElementById("skills-container")
    const allButtons = [aboutMeBtn, aboutSkillsBtn, aboutCertBtn]

    const activeColor = "#F5EBE0"
    const inactiveColor = "rgba(245, 235, 224, 0.6)"


    const certContent = `
        <div class="cert-cards-container">
        <a href="https://www.freecodecamp.org/certification/bellj22/responsive-web-design" target="_blank" class="cert-card">
            <img src="assets/certificates/web_develop.png" alt="Legacy Responsive Web Design Certificate" class="cert-image">
            <h4 class="cert-title left-align">Legacy Responsive Web Design</h4>
            <p class="cert-issuer">freeCodeCamp</p>
        </a>
        <a href="https://learn.nvidia.com/certificates?id=o16YtqYHSlas4RCor0WnSQ" target="_blank" class="cert-card">
            <img src="assets/certificates/ai_deeplearning.png" alt="AI: Fundamentals of Deep Learning" class="cert-image">
            <h4 class="cert-title">AI: Fundamentals of Deep Learning</h4>
            <p class="cert-issuer">NVIDIA</p>
        </a>
        </div>
    `
    const aboutMeContent = `
            I'm a Computer Science graduate from Northern Kentucky University, passionate about building intuitive, user-focused 
            software and web applications. With hands-on experience in machine learning and responsive front-end development, 
            I enjoy turning ideas into practical, impactful solutions.
            <br><br>
            I thrive in collaborative environments where I can contribute, learn, and grow alongside a team. From designing interactive 
            web interfaces to exploring AI-powered applications, I'm driven by curiosity, problem-solving, and the joy of creating.
        `

    function swapMain(content, showSkills = false) {
        aboutText.style.opacity = 0
        skillsContainer.style.display = showSkills ? "block" : "none"
        setTimeout(() => {
            aboutText.innerHTML = content
            aboutText.style.opacity = 1
        }, 200)
    }

    function toggleExtra(show) {
        if (show) {
            aboutExtra.style.maxHeight = aboutExtra.scrollHeight + "px"
            aboutExtra.style.opacity = 1
        } else {
            aboutExtra.style.maxHeight = 0
            aboutExtra.style.opacity = 0
        }
    }

    function setActive(btn) {
        allButtons.forEach((b) => {
            b.style.color = b === btn ? activeColor : inactiveColor
            b.style.backgroundColor = b === btn ? "rgba(255, 255, 255, 0.1)" : "transparent"
        })
    }

    aboutMeBtn.onclick = () => {
        setActive(aboutMeBtn)
        swapMain(aboutMeContent, false)
        toggleExtra(true)
    }

    aboutSkillsBtn.onclick = () => {
        setActive(aboutSkillsBtn)
        swapMain("", true)
        toggleExtra(false)
    }

    aboutCertBtn.onclick = () => {
        setActive(aboutCertBtn)
        swapMain(certContent, false)
        toggleExtra(false)
    }

    setActive(aboutMeBtn)
    toggleExtra(true)

    const options = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    }

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.target.classList.contains("filter-hidden")) return

            if (entry.isIntersecting) {
            entry.target.classList.add("show")
            } else {
            entry.target.classList.remove("show")
            }
        })
    }, options)

    document.querySelectorAll(".hidden").forEach((el) => revealObserver.observe(el))
})

