import React from 'react';
import Search from '../src/components/search/index.jsx';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store'
import { MemoryRouter } from 'react-router';
configure({ adapter: new Adapter() });

let testCase = [
    {
      title: `<Search /> components onchange should update value`,
      data: {
        initState : {
          movie: {
            movies: [
              {
                imdbID: 1
              }
            ],
            search: ''
          }
        },
        value: 'test',
        response: { 
            Search: [
                {
                    imdbID: 2
                }
            ] 
        }
      },
      output: 0
    },
    {
        title: `<Search /> components onchange should read data from cache`,
        data: {
          initState : {
            movie: {
              movies: [
                {
                  imdbID: 1
                }
              ],
              search: ''
            }
          },
          value: 'test',
          response: { 
              Search: [
                  {
                      imdbID: 2
                  }
              ] 
          }
        },
        output: 1
    },
    {
        title: `<Search /> components onchange should read data from cache`,
        data: {
          initState : {
            movie: {
              movies: [
                {
                  imdbID: 1
                }
              ],
              search: ''
            }
          },
          value: 'test2',
          response: { 
              Error: true
          }
        },
        output: 0
    }
  ]

describe('<Search />', () => {
  let store
  let mockStore = configureMockStore();

  beforeEach(() => {
    fetch.resetMocks()
  })
  
  testCase.forEach(item => {
    it(item.title, () => {
        fetch.mockResponseOnce(JSON.stringify(item.data.response))
        store = mockStore(item.data.initState);
        let component = mount(<MemoryRouter ><Search store={store}/></MemoryRouter>)
        component.find('input').simulate("change", { target: { value: item.data.value }})
        expect(component.find('input').props().value).toBe(item.data.value);
        let result = store.getActions().length;
        expect(result).toBe(item.output)
        
    });
  })
 
});