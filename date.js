
const next = bars.filter((bar=>{ //Filter for the array bars
    const d = new Date(); 
    const day = d.getDay(); //finding what day it is today
    if(bar.days == "Every weekday"){
        if( !(day > 0 && day < 6 )) {
            //Ef það er helgi þá birtast virkir dagar ekki If there's weekend we don't get the weekdays
            return false
        }
    }
   


//Get the NOW time 
    const hour = d.getHours();
    const from = Number(bar.happyhours.substring(0,2)); //from **:** aclock 
    const to = Number(bar.happyhours.substring(6,8)); //To **:** aclock
    if( hour < 12 ) { //The first happyhour starts at 12:00 so if the time is less than 12 we get what's similar 
        return(from==12) 
    }
    return( hour < to && hour > from ) //if time is more than to(start) and less than form (end time) the places that fall under that appear
    
}))
console.log(next)


//Days in numbers to catagorize 
const days= {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6 ,
}
console.log(days[offer[0].day])
