import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarSearchIcon } from "lucide-react";
import { format } from "date-fns";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const CalendarComponent = ({ date, setDate }) => {
  return (
    <div className="lg:w-3/5">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className={cn(
              "cursor-pointer w-full px-4 py-2.5 justify-start text-left font-normal text-black bg-white hover:bg-white border rounded border-input",
              !date.from && "text-[#655F5F]"
            )}
          >
            <div className="flex-1 self-stretch flex justify-start items-center gap-2.5">
              <div className="flex-1 justify-start text-sm font-normal leading-normal">
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </div>
            </div>
            <div className="w-5 h-5 relative overflow-hidden flex items-center justify-center">
              <CalendarSearchIcon className="h-full w-full" />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="p-0 w-[--radix-popover-trigger-width] max-w-full"
          align="start"
        >
          <Calendar
            mode="range"
            selected={date}
            sideOffset={4}
            defaultMonth={new Date()}
            onSelect={setDate}
            className="rounded-md border shadow bg-white calendar w-full"
            initialFocus
            numberOfMonths={2}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CalendarComponent;
