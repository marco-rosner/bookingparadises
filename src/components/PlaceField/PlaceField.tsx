import { Autocomplete, TextField } from "@mui/material"
import { usePlaces } from "../../hooks/usePlaces"
import { Place } from "../../mock/places"

interface NameField {
    label: string;
    setPlaceId: React.Dispatch<React.SetStateAction<number | undefined>>
}

export const PlaceField = ({ label, setPlaceId }: NameField): React.ReactElement => {
    const { data: places } = usePlaces()

    return (
        <Autocomplete<Place, true, true, true>
            freeSolo
            id="searchPlace"
            disableClearable
            options={places.map((place) => place)}
            getOptionLabel={(option: any) => (option.name)}
            onChange={(_, option: any) => setPlaceId(option.id)}
            sx={{
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #eee"
                }
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    sx={{
                        minWidth: '250px',
                        "& .MuiAutocomplete-inputFocused": { color: "white" },
                        "& .Mui-focused": { color: "white" }
                    }}
                    InputProps={{
                        ...params.InputProps,
                        type: 'search'
                    }}
                />
            )}
        />
    )
}