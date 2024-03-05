import renderer from 'react-test-renderer'
import { ContentSkeleton } from './ContentSkeleton';

describe("ContentSkeleton", () => {
    test("snapshot", () => {
        const snapshot = renderer
            .create(<ContentSkeleton />)
            .toJSON();

        expect(snapshot).toMatchSnapshot();
    })
})