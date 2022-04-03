// ==UserScript==
// @name         Hammerwatch Place
// @namespace    https://discord.gg/PACR5YTW
// @version      0.6.1
// @description  Try to take over r/place!
// @author       Trullo#9717
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-camera")[0].shadowRoot.children[0].children[0].children[0].appendChild(
        (function () {
            const div = document.createElement("div");
            div.className = "Template";
            div.id = "HammerWatch";
            div.style = "height:2500px; width:3000px; position: absolute; inset: 0px; transform: translateX(19950px) translateY(68700px);     background-size: cover; image-rendering: pixelated;" +
    "background-image: url('https://i.imgur.com/OgyFGkf.png'); opacity: 0.3;";
            return div;
        })())
              document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-camera")[0].shadowRoot.children[0].children[0].children[0].appendChild(
        (function () {
            const div = document.createElement("div");
            div.className = "Template";
            div.id = "Radiance";
            div.style = "height:5250px; width:4700px; position: absolute; inset: 0px; transform: translateX(12350px) translateY(66950px);     background-size: cover; image-rendering: pixelated;" +
    "background-image: url('https://github.com/onyx-4977/onyx-4977/raw/main/RadianceTemplate.png'); opacity: 0.3;";
            return div;
        })())
      
        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByClassName("bottom-controls")[0].appendChild(
        (function () {
            const slider = document.createElement("div");
            slider.style = "height: 36px; width: 200px; position: absolute;  right: 100px; top: 0;  background-color: #FFF;pointer-events: all;border-radius: 26px;";
            const input = document.createElement("input");
            input.type = 'range';
            input.min = '0';
            input.max = '1';
            input.step = '0.1';
            input.value = '0.3';
            input.style = "margin: 10px;left: 0;right: 0;top: 0;bottom: 0;box-sizing: border-box;position: absolute;";
            input.addEventListener('input', (event) => {
                document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-camera")[0].shadowRoot.children[0].children[0].children[0].querySelectorAll(".Template").forEach(element => {element.style.opacity = event.currentTarget.value});
            });
            slider.appendChild(input);
            return slider;
        })()
        );

    }, false);
}
