const enddate='30 March 2024 3:00 PM'
document.getElementById("end_date").innerText=enddate;
const inputs=document.querySelectorAll('input')

function clock(){
  const end=new Date(enddate)
  const now=new Date()
  // console.log(end,now)
  // change in secound
  const diff=(end-now)/1000;
  // console.log(diff)
  // convert into days
  inputs[0].value=Math.floor(diff/3600/24);
  // calcute hours
  inputs[1].value=Math.floor(diff/3600)%24;
  // calcute min
  inputs[2].value=Math.floor(diff/60)%60;
// calcute sec
  inputs[3].value=Math.floor(diff)%60;
}
 
clock()



setInterval(
  ()=>{
    clock()
  },
  1000
)
// 1 day=24hours
// 1hr=60mins
// 60 min=300sec