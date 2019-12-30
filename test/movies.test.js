import React from 'react';
import Movie from '../src/components/movies/index.jsx';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store'
import { MemoryRouter } from 'react-router';
configure({ adapter: new Adapter() });

let testCase = [
  {
    title: `renders <Movie /> components`,
    data: {
      initState : {
        movie: {
          movies: [
            {
              imdbID: 1,
              Poster: "TEST"
            }
          ],
          search: ''
        }
      }
    },
    row: 2,
    output: 1
  },
  {
    title: `renders <Movie /> components should filter movies by id`,
    data: {
      id: 1,
      initState : {
        movie: {
          movies: [
            {
              imdbID: 1
            },
            {
              imdbID: 2,
              Poster: "N/A"
            }
          ],
          search: ''
        }
      }
    },
    output: 1
  }
]
describe('<Movie />', () => {
  let store
  let mockStore = configureMockStore();

  testCase.forEach(item => {
    it(item.title, () => {
      store = mockStore(item.data.initState);
      let component = mount(<MemoryRouter ><Movie row={item.row} id={item.data.id} store={store}/></MemoryRouter>)
      expect(component.find('.movie-container').length).toBe(item.output);
    });
  })
 
});