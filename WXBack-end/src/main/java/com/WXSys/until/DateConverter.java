package com.WXSys.until;



import org.springframework.core.convert.converter.Converter;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateConverter implements Converter<String, Date> {

    @Override
    public Date convert(String source) {

//        System.out.println(source);
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");

        try {
            Date date = simpleDateFormat.parse(source);
//            System.out.println(date.getDate());
            return date;

        } catch (ParseException e) {

            e.printStackTrace();

        }

        return null;

    }

}