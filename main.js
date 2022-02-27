  setInterval(Timer,1000)
function Timer(){
  gh = document.getElementById('hour')
  gm = document.getElementById('minutes');
  gs = document.getElementById('seconds');
  date = new Date();
  Hour = date.getHours();
  Minutes = date.getMinutes();
  Seconds = date.getSeconds();
  H=30*Hour+Minutes/2
 M=6*Minutes
 S=6*Seconds
gh.style.transform=`rotate(${H}deg)`
gm.style.transform=`rotate(${M}deg)`
gs.style.transform=`rotate(${S}deg)`
console.log(Seconds)
}
