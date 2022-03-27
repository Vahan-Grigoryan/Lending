let span = document.querySelector('.for_js')


var html_code = document.createElement("div");
html_code.classList.add("life_changes_box");
html_code.innerHTML = '<button class="life_box_buttons">До практикума</button><div class="life_changes_info_box"><img src="img/life_changes_imgs.jpg" width="100%" alt=""><p><b>У вас не развита интуиция</b> и поэтому вы: не разбираетесь в людях,постоянно выбираете "не тех" мужчин, не можете уловить нужныймомент или предчувствовать грядущие неприятности</p></div><div class="life_changes_info_box"><img src="img/life_changes_imgs3.jpg" width="100%" alt=""><p><b>Вы страдаете от постоянного упадка сил,</b> вам сложно концентрироваться, работа даётся с трудом,у вас постоянно что-то болит, а простая пробежка кажется крайне изнурительной задачей</p></div><div class="life_changes_info_box"><img src="img/life_changes_imgs5.jpg" width="100%" alt=""><p><b>Вы не знаете, как решить ворох накопившихся проблем</b> и считаете, что дляэтого нужны либо большие связи, либо большие деньги</p></div><div class="life_changes_info_box"><img src="img/life_changes_imgs7.jpg" width="100%" alt=""><p><b>Вы считаете себя невезучим человеком:</b> хорошие должности, выигрыши, выгодные знакомства,удачные возможности проходят мимо вас и всегда достаются кому-то другому</p></div><button class="life_box_buttons" style="background-color: #42196D;color: #FAD264;">После практикума</button><div class="life_changes_info_box"><img src="img/life_changes_imgs2.jpg" width="100%" alt=""><p><b>Вы прокачали свою интуицию</b> и благодаря ей мгновенно "считываете" людей, можете предчувствоватьопасность, понимаете сны и всегда оказываетесь в нужное время в нужном месте</p></div><div class="life_changes_info_box"><img src="img/life_changes_imgs4.jpg" width="100%" alt=""><p><b>Вы излучаете позитив, бодрость и жизенную энергию!</b> Вы чувствуете себя активнее, здоровееи успеваете делать в разы больше. Вам хватает терпения и мотивации доводить дела до конца</p></div><div class="life_changes_info_box"><img src="img/life_changes_imgs6.jpg" width="100%" alt=""><p><b>Вы обнаружили в себе скрытые способности</b> и ресурсы, о которых даже не подозревали и теперьиспользуете их для успешного решения сложных ситуаций у себя и близких</p></div><div class="life_changes_info_box"><img src="img/life_changes_imgs8.jpg" width="100%" alt=""><p><b>Вы ощущаете себя настоящим любимчиком фортуны:</b> события складываются как нельзя лучше,вы притягиваете в свою жизнь нужные возможности, важных людей и большие деньги</p></div>';

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

if (window.innerWidth <= 500) {
    document.querySelector('.life_changes_box').remove()
    insertAfter(span, html_code)
}

