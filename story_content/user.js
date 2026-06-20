window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script9 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script10 = function()
{
  (function () {
    var player = GetPlayer();

    var nilaiVolume = localStorage.getItem("volumeMediaStoryline");
    if (nilaiVolume === null) {
        nilaiVolume = player.GetVar("VolMedia");
    }

    nilaiVolume = Number(nilaiVolume);

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    player.SetVar("VolMedia", nilaiVolume);
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    if (!window.courseBGM) {
        window.courseBGM = new Audio("backsound.mp3");
        window.courseBGM.loop = true;
        window.courseBGM.preload = "auto";
    }

    if (nilaiVolume <= 0) {
        window.courseBGM.volume = 0;
        window.courseBGM.muted = true;
    } else {
        window.courseBGM.muted = false;
        window.courseBGM.volume = nilaiVolume / 100;
    }

    window.courseBGM.play().catch(function () {
        console.log("Autoplay audio diblokir browser sampai pengguna melakukan klik.");
    });
})();
}

window.Script11 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script12 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script13 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script14 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script15 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script16 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script17 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script18 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script19 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script20 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script21 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script22 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script23 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script24 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script25 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script26 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script27 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script28 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script29 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script30 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script31 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script32 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script33 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script34 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script35 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script36 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script37 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script38 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script39 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script40 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script41 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script42 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script43 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script44 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script45 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script46 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script47 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script48 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script49 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

window.Script50 = function()
{
  (function () {
    var player = GetPlayer();
    var nilaiVolume = Number(player.GetVar("VolMedia"));

    if (isNaN(nilaiVolume)) {
        nilaiVolume = 100;
    }

    nilaiVolume = Math.max(0, Math.min(100, nilaiVolume));
    localStorage.setItem("volumeMediaStoryline", nilaiVolume);

    var volumeMedia = nilaiVolume / 100;

    function aturMedia(media) {
        if (nilaiVolume <= 0) {
            media.volume = 0;
            media.muted = true;
            media.defaultMuted = true;
            media.setAttribute("muted", "muted");
        } else {
            media.muted = false;
            media.defaultMuted = false;
            media.removeAttribute("muted");
            media.volume = volumeMedia;
        }
    }

    if (window.courseBGM) {
        aturMedia(window.courseBGM);
    }

    document.querySelectorAll("audio, video").forEach(function (media) {
        aturMedia(media);
    });
})();
}

};
