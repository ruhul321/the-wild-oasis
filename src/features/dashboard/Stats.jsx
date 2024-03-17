import React from "react";
import Stat from "./Stat";
import {
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineBanknotes,
  HiOutlineChartBar,
} from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

export default function Stats({
  bookings,
  confirmedStays,
  numDays,
  cabinCounts,
}) {
  //1. Total bookings
  const numBooking = bookings.length;

  //2. Total sales from each booking
  const sales = bookings.reduce((sum, cur) => sum + cur.totalPrice, 0);
  //console.log(sales);

  //3. Total check ins
  const checkins = confirmedStays.length;

  //4 Total Occupancy rate
  //num of checked in night / all available night (num days * num cabins)
  const occupancy =
    confirmedStays.reduce((sum, cur) => sum + cur.numNights, 0) /
    (numDays * cabinCounts);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBooking}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupancy * 100) + "%"}
      />
    </>
  );
}
