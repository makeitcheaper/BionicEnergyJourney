package bionicEnergyJourneyPages;

import java.util.Date;

public class bionicOpeninghours {
    String openingHour;
    public String bionicOpeninghours() {
        Date d = new Date();
        int day;
        int hours;
        int minutes;
        day = d.getDay();
        hours = d.getHours();
        minutes = d.getMinutes();
        /* System.out.println("Date is "+day);
        System.out.println("Time is "+hours);
        System.out.println("minutes are "+minutes); */
        //1=Monday and 4=Thursday
        if (day >= 1 && day<= 4){
            if(hours >= 9 && hours <20)
            {
                this.openingHour = "Open";
            }
            else
            {
                this.openingHour = "Closed";
            }
        }
        //5=Friday
        else if (day==5){
            if(hours >=9 && hours <=17) {
                if(hours == 17){
                    if(minutes <= 30)
                    {
                        this.openingHour = "Open";
                    }
                    else
                    {
                        this.openingHour = "Closed";
                    }
                }
            }
            else
            {
                this.openingHour = "Closed";
            }
        }
        //6-Saturday
        else if(day==6){
            if(hours >=10 && hours <16){
                this.openingHour = "Open";
            }
            else {
                this.openingHour = "Closed";
            }
        }
        //7-Sunday
        else {
            this.openingHour = "Closed";
        }
        return openingHour;
    }
}
