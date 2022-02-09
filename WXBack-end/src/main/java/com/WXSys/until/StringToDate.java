package com.WXSys.until;


import java.util.Date;


public class StringToDate {
    @Deprecated
    public static Date StringToDate(String Time){
        Date d1 = new Date();
        String[] Times = Time.split("/");

        d1.setYear(Integer.parseInt(Times[0])-1900);
        d1.setMonth(Integer.parseInt(Times[1])-1);
        d1.setDate(Integer.parseInt(Times[2]));

        return d1;
    }
}
