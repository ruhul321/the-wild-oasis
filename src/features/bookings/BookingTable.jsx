import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";

function BookingTable() {
  const { isLoading, bookings, count } = useBookings();

  if (isLoading) return <Spinner />;
  //const count = datas.count;
  //const bookings = datas.data;
  if (!bookings.length) return <Empty resourceName="bookings" />;

  //Client Side Filtering code below - but Now done with server side filtering in usebooking & apibooking
  // //1. FILTER
  // const filterValue = searchParams.get("status") || "all";
  // let filterBookings;
  // if (filterValue === "all") filterBookings = bookings;
  // if (filterValue === "checked-out")
  //   filterBookings = bookings.filter(
  //     (booking) => booking.status === "checked-out"
  //   );
  // if (filterValue === "checked-in")
  //   filterBookings = bookings.filter(
  //     (booking) => booking.status === "checked-in"
  //   );
  // if (filterValue === "unconfirmed")
  //   filterBookings = bookings.filter(
  //     (booking) => booking.status === "unconfirmed"
  //   );

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          //data={filterBookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
