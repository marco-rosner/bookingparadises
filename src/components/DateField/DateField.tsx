import React from "react";
import { DatePicker } from "@mui/x-date-pickers";

interface DateField {
    label: string;
    error: boolean;
    color?: string;
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
}

export const DateField = ({ label, error, color, setDate }: DateField): React.ReactElement => (
    <DatePicker
        label={label}
        onChange={(sDate: Date | null) => sDate && setDate(sDate)}
        slotProps={{
            textField: {
                error: error,
                sx: {
                    minWidth: '200px',
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        border: `1px solid ${color || "#eee"}`
                    },
                    "& .MuiInputBase-inputAdornedEnd": { color: color || "#fff" },
                    "& .Mui-focused": { color: color || "#fff" },
                    "& .MuiFormLabel-root": { color: color || "#fff"}
                },
            }
        }}
        disablePast
    />
)