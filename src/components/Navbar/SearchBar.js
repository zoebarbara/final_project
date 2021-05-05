import styled from 'styled-components'
import { white, lightgrey} from '../config/theme';

/* const SearchBar = () => (
  <form action="/" method="get">
      <label htmlFor="header-search">
          <span className="visually-hidden">Search blog posts</span>
      </label>
      <input
          type="text"
          id="header-search"
          placeholder="Search blog posts"
          name="s" 
      />
      {/* <button type="submit">Search</button> */
  /*</form>
);*/
 
export const SearchBar = styled.div`
    background:${props => lightgrey};
    height: 70%;
    width: 20vw;

    @media screen and (max-width: 768px){
        display: none;
        
    }
`

export const DownSearchBar = styled(SearchBar)`
  
  @media screen and (max-width:768px){
    width:100vw;
    height:6vh;
    display:flex;
  }
`
