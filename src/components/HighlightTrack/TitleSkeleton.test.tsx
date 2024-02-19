import renderer from 'react-test-renderer'
import { TitleSkeleton } from './TitleSkeleton';

describe("TitleSkeleton", () => {
    test("snapshot", () => {
        const snapshot = renderer
            .create(<TitleSkeleton />)
            .toJSON();

        expect(snapshot).toMatchSnapshot();
    })
})