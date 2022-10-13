
const nextHh = bars.filter((bar=>{ //Filter for the array bars
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


//Days in numbers to catagorize 
const days= {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
}
console.log(days[offer[0].day])



//For the offer page 
//Show special offers that are today and then the next days 
const getDaysToOffer =(daysArray, today)=>{ 

    let daysToOffer = 15

    daysArray.forEach(day=>{ 
        let dayNr=days[day] 
 
        if(dayNr < today){
         dayNr += 7 //I used += 7 because we have 7 days - it's there so the days 'loop' back around from 6(saturday) to 0(Sunday)
        }
 
        if (dayNr - today < daysToOffer){
         daysToOffer = dayNr - today 
        }
     } )
     return daysToOffer 
}


offer.sort (function(a,b) {
    const d = new Date();
    const today = d.getDay();
    let daysToA = getDaysToOffer(a.day, today)
    let daysToB = getDaysToOffer(b.day, today)

    return(daysToA - daysToB)
})
