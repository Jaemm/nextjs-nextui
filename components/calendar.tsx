"use client";

import React from "react";
import {Calendar} from "@nextui-org/react";
import {today, getLocalTimeZone, isWeekend} from "@internationalized/date";
import {useLocale} from "@react-aria/i18n";


export const HomeCalendar = () => {
  let [date, setDate] = React.useState(today(getLocalTimeZone()));
  let {locale} = useLocale();
  let isInvalid = isWeekend(date, locale);

  return (
    <Calendar
      aria-label="Date (Invalid on weekends)"
      errorMessage={isInvalid ? "We are closed on weekends" : undefined}
      isInvalid={isInvalid}
      value={date}
      onChange={setDate}
    />
  );
}
