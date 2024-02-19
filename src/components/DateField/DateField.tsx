import React from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";

interface DateField {
    id: string;
    label: string;
    error: boolean;
    color?: string;
    value?: Dayjs | undefined; 
    setDate: React.Dispatch<React.SetStateAction<Dayjs | undefined>>
}

export const DateField = ({ id, label, error, color, value, setDate }: DateField): React.ReactElement => (
    <DatePicker
        label={label}
        onChange={(date: Dayjs | null) => date && setDate(date)}
        value={value}
        slotProps={{
            textField: {
                id: id,
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