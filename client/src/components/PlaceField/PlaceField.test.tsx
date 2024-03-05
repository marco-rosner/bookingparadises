import renderer from 'react-test-renderer'
import { PlaceField } from './PlaceField'

describe("PlaceField", () => {
    test("snapshot", () => {
        const snapshot = renderer
            .create(<PlaceField label="Search your paradise" setPlaceId={() => {}} />)
            .toJSON();

        expect(snapshot).toMatchSnapshot();
    })
})