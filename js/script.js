//создвём крутящуюся метель
let boxshadow = "";
for (let i = 0; i <= 2000; i++){
    px = (Math.random() < 0.5) ? '-' : '';
    py = (Math.random() < 0.5) ? '-' : '';
    x= Math.floor((Math.random()* window.innerWidth) + 1);
    y= Math.floor((Math.random()* window.innerHeight) + 1);
    s= Math.floor((Math.random()* 2) - 1);
    boxshadow += px +x + "px " + py + y + " px 0" + s + " px #fff,";
}
    boxshadow = boxshadow.slice(0, -1);
    stars.style.boxShadow = boxshadow;
//===============================================
let prise = document.querySelector('#container div:last-child');
let boxPrise = document.querySelectorAll('#container div img')
for(let i=0; i<boxPrise.length;i++){
    console.log(boxPrise[i].src)
    boxPrise[i].onclick=function (){
        prise.style.fontSize=  `24px`;
    if (boxPrise[i].src === "file:///C:/Users/IT%20Class/Documents/%D0%BA%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE%20%D0%90%D1%80%D0%B8%D0%BD%D0%B0/happyNewYear/img/haurma.jpg")
    prise.innerHTML= `Пусть в Вашем доме будет всё - 
    Любовь, Покой, Уют, Богатство, 
    Пусть будет в нём всегда тепло, 
    Чтобы хотелось возвращаться!`;
//==============================
if (boxPrise[i].src === "file:///C:/Users/IT%20Class/Documents/%D0%BA%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE%20%D0%90%D1%80%D0%B8%D0%BD%D0%B0/happyNewYear/img/kittykat.jpg")
    prise.innerHTML= `Пусть Новый Год море радости, счастья 
    Подарит тебе в Новогоднюю Ночь!
    Пусть станет жизнь сказочной, яркой, 
    Пусть все заботы унесутся прочь!`;
//=================
if (boxPrise[i].src === "file:///C:/Users/IT%20Class/Documents/%D0%BA%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE%20%D0%90%D1%80%D0%B8%D0%BD%D0%B0/happyNewYear/img/misha.jpg")
    prise.innerHTML= `Желаю отпуск - месяцев на десять, <br>
    Чтоб на морях покуролесить!
    Яхту, Лексус новой марки,
    Персональный самолёт,
    И пусть деньги на всё это 
    Дед Мороз преподнесет!`;
//======================
if (boxPrise[i].src === "file:///C:/Users/IT%20Class/Documents/%D0%BA%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE%20%D0%90%D1%80%D0%B8%D0%BD%D0%B0/happyNewYear/img/lutoechmo.jpeg")
    prise.innerHTML= `Желаю, чтоб сбылась твоя мечта! 
    Пусть счастье и удача будут всегда с тобой!
    Пусть растут доходы, греет любовь и всегда будут здоровы близкие!`;
    }
}

