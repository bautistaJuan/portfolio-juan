async function presentationContent(htmlContainer) {
    const presentation = document.createElement("section");
    presentation.className = "section-2-presentation_about-me"

    presentation.innerHTML = `
    <div class="about-me_h2-p">
        <h2 class="soy-juan">Soy Bautista</h2>
        <p class="about-me_p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
        odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Curabitur tempus urna at turpis condimentum lobortis....
        </p>
    </div>
    <div class="about-me_img">
        <img src="" alt="img-juan" class="img"/>
    </div>
    `
    htmlContainer.appendChild(presentation);

    const data = await contenfulApi();
    const presentationImg = document.querySelector(".img");
    console.log(data);
    presentationImg.src = data.includes.Asset[0].fields.file.url
}