var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

setTimeout(function() {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

console.log(
  "%cYou hacked my password!😠",
  "color: #04ff00; font-weight: bold; font-size: 24px;"
);
console.log("%cPassword: '" + password + "' - I wonder what it does?🤔", "color: grey");

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (textarea.value === password) {
      pwd = true;
    }
    if (pwd && e.keyCode == 13) {
      loopLines(secret, "color2 margin", 120);
      command.innerHTML = "";
      textarea.value = "";
      pwd = false;
      pw = false;
      liner.classList.remove("password");
    } else if (e.keyCode == 13) {
      addLine("Wrong password", "error", 0);
      command.innerHTML = "";
      textarea.value = "";
      pw = false;
      liner.classList.remove("password");
    }hzelp
  } else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine("visitor@portfolio:~$ " + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

function changeTheme(newThemeFilename) {
  var themeLink = document.getElementById("theme-stylesheet");
  if(themeLink) {
      themeLink.href = './css/' + newThemeFilename;
  }
}

function commander(cmd) {
    switch (cmd.toLowerCase()) {
    case "themes":
      loopLines(themes, "color2 margin", 80);
      break;
    case "run solarized theme":
      changeTheme("solarized-theme.css");
      addLine("Switched to Solarized Theme", "color2", 80);
      break;
    case "run jungle theme":
      changeTheme("jungle-theme.css");
      addLine("Switched to Neon Jungle Theme", "color2", 80);
      break;
    case "run winter theme":
      changeTheme("winter-theme.css");
      addLine("Brace yourselves, winter is coming...", "color2", 80);
      break;
    case "run cyber theme":
      changeTheme("cyber-theme.css");
      addLine("Switched to Cyber Theme", "color2", 80);
      break;
    case "run retro theme":
      changeTheme("retro-theme.css");
      addLine("Switched to Retro Theme", "color2", 80);
      break;
    case "run synthwave theme":
      changeTheme("synthwave-theme.css");
      addLine("Switched to Synthwave Theme", "color2", 80);
      break;
    case "run matrix theme":
      changeTheme("matrix-theme.css");
      addLine("Switched to Matrix Theme", "color2", 80);
      break;
    case "run classic theme":
      changeTheme("classic-theme.css");
      addLine("Switched to Classic Theme", "color2", 80);
      break;
    case "yoda":
      loopLines(yoda, "color2 margin", 80);
      break;
    case "keyboard":
      loopLines(keyboard, "color2 margin", 80);
      break;
    case "hacker":
      loopLines(hacker, "color2 margin", 80);
      break;
    case "shrek":
      loopLines(shrek, "color2 margin", 80);
      break;
    case "console":
      loopLines(console, "color2 margin", 80);
      break;
    case "raccoon":
      loopLines(raccoon, "color2 margin", 80);
      break;
    case "art":
      loopLines(art, "color2 margin", 80);
      break;
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "about":
      loopLines(about, "color2 margin", 80);
      break;
    case "whoami":
      loopLines(whoami, "color2 margin", 80);
      break;
    case "game":
      loopLines(gameInfo, "color2 margin", 80);
      break;
    case "run game":
      addLine("Opening Game...", "color2", 80);
      newTab(game);
      break;
    case "sudo admin login":
      addLine("System detecting a hacker - redirecting to punishment", "color2", 80);
      setTimeout(function() {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000); 
      break;
    case "socials":
      loopLines(socials, "color2 margin", 80);
      break;
    case "login":
      liner.classList.add("password");
      pw = true;
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "password":
      addLine("<span class=\"inherit\"> Lol! You're joking, right? You\'re gonna have to try harder than that!😂</span>", "error", 100);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      addLine('Opening mailto:<a href="mailto:lyndon.simpson@gmail.com">lyndon.simpson@gmail.com</a>...', "color2", 80);
      newTab(email);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    // socials
    case "portfolio":
      addLine("Opening Portfolio...", "color2", 80);
      newTab(portfolio);
      break;
    case "resume":
      addLine("Opening Resume...", "color2", 0);
      newTab(resume);
      break;
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0);
      newTab(linkedin);
      break;
    case "game":
      addLine("Opening Game...", "color2", 0);
      newTab(game);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
      break;
    default:
      addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}