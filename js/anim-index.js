var textWrapper = document.querySelectorAll('.splash-title-anim');
for(let i=0;i<textWrapper.length;i++) textWrapper[i].innerHTML = textWrapper[i].textContent.replace(/\S/g, "<span class='letter'>$&</span>");



anime.timeline({loop: false})
.add({
  targets: '#splash-bg-circle-yellow',
  translateX: '-50%',
  translateY: '-50%',
  duration: 0,
  delay: 0
})
.add({
  targets: '#splash-bg-circle-blue',
  translateX: '-120%',
  translateY: '-85%',
  easing: "easeOutCirc",
  duration: 0,
  delay: 0
})
.add({
  targets: '#splash-bg-circle-red',
  translateX: '50%',
  translateY: '5%',
  easing: "easeOutCirc",
  duration: 0,
  delay: 0
})
.add({
  targets: ['#splash-bg-circle-red', '#splash-bg-circle-yellow', '#splash-bg-circle-blue'],
  scale: [0,1],
  opacity: [0,1],
  easing:  	'easeOutBack',
  duration: 800,
  delay: (ele, i)=> 250*i
})
.add({
  targets: '.splash-title-anim .letter',
  opacity:[0,1],
  translateY: [-100,0],
  easing: "easeOutExpo",
  duration: 1400,
  delay: (el, i) => {
    if(i==0) return 0;
    else return i*30;
  }
});


