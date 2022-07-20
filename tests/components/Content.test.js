import Content from "../../src/components/Content";
import {shallow} from "enzyme";
import data from 'src/data';
import Card from "../../src/components/Card";

describe('Component Content', () => {
    it ('should have a title', () => {
        const wrapper = shallow(<Content title="title" text="test" recipes={[]} />);
        const titles = wrapper.find('.content-title');
        expect (titles).toHaveLength(1);
    });

    it ('should display the prop text inside a paragraph', () => {
        const wrapper = shallow(<Content title="title" text="Hello world" recipes={[]} />);
        const paragraph = wrapper.find('p.content-text');
        expect (paragraph.text()).toBe('Hello world');
    })

    it ('should have a list if we give recipes', () => {
        const wrapper = shallow(<Content title="test" text="Hello world" recipes={data} />);
        const list = wrapper.find('.content-list');
        expect(list).toHaveLength(1);
    });

    it (`should not have a list if we don't give recipes`, () => {
        const wrapper = shallow(<Content title="test" text="Hello world" recipes={[]} />);
        const list = wrapper.find('.content-list');
        expect(list).toHaveLength(0);
    });

    it ('should have as many cards as recipes', () => {
        const wrapper = shallow(<Content title="test" text="Hello world" recipes={data} />);
        const cards = wrapper.find(Card);
        expect(cards).toHaveLength(data.length);
    })
})
