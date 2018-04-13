var robotChat = {};
robotChat['hola'] = 'hola,como estas?';
robotChat['comotellamas'] = 'skynet';
robotChat['queedadtienes'] = '15'
robotChat['dondevives'] = '20dejulio';
robotChat['dedondeeres'] = 'bogota';

var chatlist = document.getElementById("chatbox").getElementsByTagName("ul")[0];
var btnAdd = document.getElementById("add-button");
var msbox = document.getElementById("message");
var isQuestion = true;

function cleanString(dirtyString) {
    var cleaned = dirtyString.split(/\s/g);
    return cleaned;
};

btnAdd.onclick = function addtoChat() {
    if (isQuestion) {
        var answer = cleanString(msbox.value);
        var newLi = document.createElement("li");
        var newSentence = document.createElement("input");


        newSentence.setAttribute("type", "text");
        newSentence.setAttribute("value", msbox.value);

        newLi.appendChild(newSentence);
        chatlist.appendChild(newLi);

        var Li2 = document.createElement("li");
        var sentence3 = document.createElement("input");

        sentence3.setAttribute("type", "text");
        sentence3.setAttribute("value", robotChat[answer]);


        Li2.appendChild(sentence3);
        chatlist.appendChild(Li2);

    } else if (!(cleanString(msbox.value) in robotChat)) {
        var answer = cleanString(msbox.value);

        var Li = document.createElement("li");
        var sentence2 = document.createElement("input");

        sentence2.setAttribute("type", "text");
        sentence2.setAttribute("value", "What should i say?");


        Li.appendChild(sentence2);
        chatlist.appendChild(Li);

        isQuestion = false;

        if (!isQuestion) {
            robotChat[answer] = msbox.value;
        }

        isQuestion = true;
    }

};
