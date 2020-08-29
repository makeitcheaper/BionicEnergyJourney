package bionicEnergyJourneyPages;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;

public class bionicOpeninghours {
    String openingHour;
    public String bionicOpeninghours() {
        TimeZone timeZone = TimeZone.getTimeZone("UTC");
        Calendar calendar = Calendar.getInstance(timeZone);

        SimpleDateFormat hr = new SimpleDateFormat("hh", Locale.US);
        hr.setTimeZone(timeZone);

        SimpleDateFormat min = new SimpleDateFormat("mm", Locale.US);
        min.setTimeZone(timeZone);

        SimpleDateFormat weekday = new SimpleDateFormat("E", Locale.US);
        weekday.setTimeZone(timeZone);

        String day = weekday.format(calendar.getTime());
        int hours = Integer.parseInt(hr.format(calendar.getTime()));
        int minutes = Integer.parseInt(min.format(calendar.getTime()));

        System.out.println("UTC HH:     " + hours);
        System.out.println("UTC MM:     " + minutes);
        System.out.println("UTC DD:     " + day);


        //1=Monday and 4=Thursday
        if (day.equals("Mon") || day.equals("Tue") || day.equals("Wed") || day.equals("Thu")){
            if(hours >= 8 && hours <19) //UTC Time
            {
                this.openingHour = "Open";
            }
            else
            {
                this.openingHour = "Closed";
            }
        }
        //5=Friday
        else if (day.equals("Fri")){
            if(hours >=8 && hours <=16) {
                if(hours == 16){
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
        else if(day.equals("Sat")){
            if(hours >=9 && hours <15){
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
