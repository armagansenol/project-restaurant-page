import { pageLoad } from "./page-load";

function contactPage() {
    pageLoad();
    document.querySelector('.info').innerHTML = `Our diner is located at the intersection of Main Street and Falls Avenue. <br><br>-<br><br> 137 W North Bend Way<br>
    Twin Peaks, WA.<br>(425) 831-5511<br>Sun-Sat: 8:00 am – 8:00 pm`
    document.querySelector('.info').style.marginTop = '80px';
    document.querySelector('.sideimg').remove();
    document.querySelector('.visuals').style.backgroundImage = 'url(../dist/img/rr-exterior-night.jpg)';

};

export {
    contactPage
}