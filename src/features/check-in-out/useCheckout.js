import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();
  const { isLoading: isCheckingOut, mutate: checkout } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully Checked Out `);
      queryClient.invalidateQueries({
        active: true,
      });
    },
    onError: (err) =>
      toast.error("There was error while checking out" + err.message),
  });
  return { isCheckingOut, checkout };
}
