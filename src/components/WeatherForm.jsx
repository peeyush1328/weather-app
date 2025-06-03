import Calendar from "./Calendar";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Loader2 } from "lucide-react";

export default function WeatherForm({
  onSubmit,
  form,
  setForm,
  date,
  setDate,
  isLoading,
}) {
  const isValidLatLon = (val) =>
    /^-?\d+(\.\d+)?$/.test(val) && val >= -90 && val <= 90;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const trimDate = (dateForm) => {
    const date = new Date(dateForm);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0"); // getMonth is 0-based
    const dd = String(date.getDate()).padStart(2, "0");

    return `${yyyy}-${mm}-${dd}`;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payLoad = {
      ...form,
      startDate: trimDate(date?.from),
      endDate: trimDate(date.to),
    };
    if (isValidLatLon(form.latitude) && isValidLatLon(form.longitude)) {
      onSubmit(payLoad);
    } else {
      alert("Invalid latitude or longitude.");
    }
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {" "}
        <Input
          type="text"
          placeholder="Latitude"
          name="latitude"
          value={form.latitude}
          onChange={handleChange}
          className="w-full data-[slot=input]:px-4 data-[slot=input]:py-2.5 data-[slot=input]:h-full border rounded focus-visible:ring-0"
        />
        <Input
          type="text"
          placeholder="Longitude"
          name="longitude"
          value={form.longitude}
          onChange={handleChange}
          className="w-full data-[slot=input]:px-4 data-[slot=input]:py-2.5 data-[slot=input]:h-full border rounded focus-visible:ring-0"
        />
      </div>

      <div className="w-full lg:flex lg:items-center lg:justify-center">
        <Calendar setDate={setDate} date={date} />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="md:col-span-2 hover:bg-[#4E2FC0] bg-[#6945ED] text-white p-2 rounded cursor-pointer"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="animate-spin h-2 w-2" /> Please wait
          </span>
        ) : (
          "Fetch Weather"
        )}
      </Button>
    </form>
  );
}
