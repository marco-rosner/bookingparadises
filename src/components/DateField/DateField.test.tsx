import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import renderer from 'react-test-renderer'
import { DateField } from './DateField'

describe("DateField", () => {
    test("snapshot", () => {
        const snapshot = renderer
            .create(
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en'}>
                    <DateField label="Start Date" id="start" error={false} setDate={jest.fn()} />
                </LocalizationProvider>)
            .toJSON();

        expect(snapshot).toMatchSnapshot();
    })
})