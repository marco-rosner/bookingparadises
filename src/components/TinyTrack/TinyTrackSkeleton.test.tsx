import renderer from 'react-test-renderer'
import { TinyTrackSkeleton } from './TinyTrackSkeleton';

describe("TinyTrackSkeleton", () => {
    test("snapshot", () => {
        const snapshot = renderer
            .create(<TinyTrackSkeleton />)
            .toJSON();

        expect(snapshot).toMatchSnapshot();
    })
})