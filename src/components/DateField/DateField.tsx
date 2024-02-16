import React from "react";
import { DatePicker } from "@mui/x-date-pickers";

interface DateField {
    label: string;
    error: boolean;
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
}

export const DateField = ({ label, error, setDate }: DateField): React.ReactElement => (
    <DatePicker
        label={label}
        onChange={(sDate: Date | null) => sDate && setDate(sDate)}
        slotProps={{
            textField: {
                error: error,
                sx: {
                    minWidth: '200px',
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #eee"
                    },
                    "& .MuiInputBase-inputAdornedEnd": { color: "white" },
                    "& .Mui-focused": { color: "white" }
                },
            },
        }}
        disablePast
    />
)