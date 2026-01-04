const storyElement = document.getElementById('story');
const imageElement = document.getElementById('story-image');
const itemElement = document.getElementById('item');

let hasMagicSword = false;
let hasTalkedToWizard = false;

function choosePath(path) {
    if (path === 'left') {
        storyElement.innerHTML = "Du klatrer opp den bratte fjellstien og finner en glemt smie. Inne ligger et glødende sverd!<br>Tar du sverdet eller lar du det ligge?";
        imageElement.src = "https://thumbs.dreamstime.com/b/image-depicts-glowing-magical-sword-fiery-anvil-dark-forge-surrounded-other-swords-magical-sword-rests-368657484.jpg";
        updateButtons("Ta sverdet", "chooseSword('take')", "La det ligge", "chooseSword('leave')", "Gå tilbake", "goBack()");
    }
    else if (path === 'center') {
        storyElement.innerHTML = "Du går inn i den mystiske skogen. Plutselig står en gammel trollmann foran deg.<br>Vil du snakke med ham eller gå forbi?";
        imageElement.src = "https://images.stockcake.com/public/3/c/d/3cd09258-eefa-4ee2-8f07-4010e9872a5b_large/mystical-forest-wizard-stockcake.jpg";
        updateButtons("Snakk med trollmannen", "talkToWizard('talk')", "Gå forbi", "talkToWizard('ignore')", "Gå tilbake", "goBack()");
    }
    else if (path === 'right') {
        storyElement.innerHTML = "Du krysser den gamle broen og kommer til dragens hule! Den sover... men vil snart våkne.<br>Vil du snike deg inn eller angripe direkte?";
        imageElement.src = "https://images.alphacoders.com/884/thumb-1920-884828.jpg";
        updateButtons("Snik deg inn", "enterCave('sneak')", "Angrip direkte", "enterCave('attack')", "Gå tilbake", "goBack()");
    }
}

function chooseSword(choice) {
    if (choice === 'take') {
        hasMagicSword = true;
        itemElement.textContent = "Magisk sverd x1";
        storyElement.innerHTML = "Du tar det magiske sverdet! Det føles kraftfullt i hånden din.<br>Du føler deg klar til å møte dragen!";
        imageElement.src = "https://thumbs.dreamstime.com/b/ancient-glowing-sword-lies-rocky-terrain-mysterious-energy-emanates-weapon-possible-scene-fantasy-adventure-hero-358204347.jpg";
        updateButtons("Gå videre mot dragen", "goToDragon()", "Gå tilbake til starten", "goBack()");
    } else {
        storyElement.innerHTML = "Du lar sverdet ligge og går videre uten våpen...";
        updateButtons("Gå videre", "goToDragon()", "Gå tilbake", "goBack()");
    }
}

function talkToWizard(choice) {
    if (choice === 'talk') {
        hasTalkedToWizard = true;
        storyElement.innerHTML = "Trollmannen smiler og sier: 'Du har et godt hjerte. Her er en beskyttelsesformel som vil hjelpe deg mot dragens ild.'<br>Du lærer en magisk beskyttelse!";
        imageElement.src = "https://www.shutterstock.com/image-vector/cheerful-cartoon-wizard-long-white-260nw-2704310669.jpg";
        updateButtons("Takk trollmannen og gå videre", "goToDragon()", "Gå tilbake", "goBack()");
    } else {
        storyElement.innerHTML = "Du går forbi trollmannen. Han sukker og forsvinner i tåke...";
        updateButtons("Gå videre mot dragen", "goToDragon()", "Gå tilbake", "goBack()");
    }
}

function enterCave(choice) {
    if (choice === 'sneak') {
        storyElement.innerHTML = "Du sniker deg inn i hulen... men dragen våkner likevel!<br>Nå må du kjempe!";
        imageElement.src = "https://images.playground.com/495f8409-60e2-4412-ad96-b7c17c4123ca.jpeg";
        fightDragon();
    } else {
        storyElement.innerHTML = "Du stormer inn og angriper dragen med en gang!";
        imageElement.src = "https://thumbs.dreamstime.com/b/knight-fighting-dragon-depicting-fantasy-battle-mythical-creatures-versus-scene-representing-knights-dragons-battles-stock-371249438.jpg";
        fightDragon();
    }
}

function goToDragon() {
    storyElement.innerHTML = "Du står foran dragens hule. Den mektige besten reiser seg og brøler!<br>Hva gjør du nå?";
    imageElement.src = "https://m.media-amazon.com/images/I/61wfINTvX2L._AC_UF894,1000_QL80_.jpg";
    updateButtons("Angrip med sverd", "finalAttack('sword')", "Bruk trollmannens formel", "finalAttack('magic')", "Prøv å rømme", "finalAttack('run')");
}

function finalAttack(choice) {
    hideAllButtons();

    if (choice === 'sword' && hasMagicSword) {
        if (hasTalkedToWizard) {
            storyElement.innerHTML = "<strong>SEIER!</strong><br>Det magiske sverdet skjærer gjennom dragens skjell, og trollmannens beskyttelse redder deg fra ilden. Dragen faller, og landsbyen er reddet!<br><br>Gratulerer – du vant spillet!";
            imageElement.src = "https://media.istockphoto.com/id/1277834093/photo/medieval-knight-shouting-a-battle-cry-raising-up-the-sword-and-sitting-on-his-horse.jpg?s=612x612&w=0&k=20&c=-PC9u-kxbuAnB6oYlGFktaLsh5mqqLeBQljxV9WfOaY=";
        } else {
            storyElement.innerHTML = "<strong>Nesten...</strong><br>Du sårer dragen alvorlig med sverdet, men den spyr ild og du overlever ikke uten beskyttelse...<br>Du døde tappert.";
            imageElement.src = "https://media.craiyon.com/2025-11-07/u_Y7XFEQSFyL3FhdIJjm3g.webp";
        }
    }
    else if (choice === 'magic' && hasTalkedToWizard) {
        storyElement.innerHTML = "<strong>Tap...</strong><br>Trollmannens formel beskytter deg mot ilden, men uten et godt våpen klarer du ikke å beseire dragen.<br>Den knuser deg til slutt.";
        imageElement.src = "https://media.craiyon.com/2025-11-07/u_Y7XFEQSFyL3FhdIJjm3g.webp";
    }
    else if (choice === 'run') {
        storyElement.innerHTML = "<strong>Du rømte...</strong><br>Du løp så fort du kunne, men dragen fløy etter og brente hele dalen. Landsbyen ble ødelagt.<br>Du overlevde – men som en feiging.";
        imageElement.src = "https://thumbs.dreamstime.com/b/fierce-dragon-soars-above-village-engulfed-flames-scene-captures-chaos-destruction-mythical-battle-fire-image-399478259.jpg";
    }
    else {
        storyElement.innerHTML = "<strong>Du døde...</strong><br>Uten våpen eller beskyttelse hadde du ingen sjanse mot dragen.<br>Game over.";
        imageElement.src = "https://media.craiyon.com/2025-11-07/u_Y7XFEQSFyL3FhdIJjm3g.webp";
    }
}

function fightDragon() {
    updateButtons("Angrip dragen!", "goToDragon()", "", "", "Gå tilbake", "goBack()");
}

function goBack() {
    storyElement.innerHTML = "Du står ved inngangen til den mørke dalen. Landsbyen din har blitt angrepet av en ond drage. Tre stier ligger foran deg:<br>Venstre: En bratt fjellsti<br>Midten: En mystisk skog<br>Høyre: En gammel bro over elven";
    imageElement.src = "https://www.shutterstock.com/image-photo/outdoor-photo-ultra-realistic-3d-600nw-2666960253.jpg";
    itemElement.textContent = hasMagicSword ? "Magisk sverd x1" : "";
    updateButtons("Ta fjellstien", "choosePath('left')", "Gå inn i skogen", "choosePath('center')", "Kryss den gamle broen", "choosePath('right')");
}

function updateButtons(text1, onclick1, text2, onclick2, text3, onclick3) {
    const buttons = document.querySelectorAll('button');
    buttons[0].textContent = text1;
    buttons[0].setAttribute('onclick', onclick1);
    buttons[0].style.display = 'inline-block';

    buttons[1].textContent = text2 || " ";
    buttons[1].setAttribute('onclick', onclick2 || "");
    buttons[1].style.display = text2 ? 'inline-block' : 'none';

    buttons[2].textContent = text3 || " ";
    buttons[2].setAttribute('onclick', onclick3 || "");
    buttons[2].style.display = text3 ? 'inline-block' : 'none';
}

function hideAllButtons() {
    document.querySelectorAll('button').forEach(btn => btn.style.display = 'none');
}