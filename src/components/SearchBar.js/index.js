import {
        SearchWrapperUpperMenu,
        SearchWrapperDownMenu,
        SearchBoxDownMenu,
        SearchBox,
        IconBox,
        InputSearchBar,
        SearchIcon} from './SearchBarElements';


 const SearchBarUpperMenu = () =>{
     return(
        <SearchWrapperUpperMenu>
            <SearchBox>
                <InputSearchBar type='text' placeholder='Search...'>
                </InputSearchBar>
                
            </SearchBox>
            <IconBox>
                <SearchIcon />
            </IconBox>
        </SearchWrapperUpperMenu>
     )
 }

 export default SearchBarUpperMenu;

 export const SearchBarDownMenu = () =>{
     return(
        <SearchWrapperDownMenu>
        <SearchBoxDownMenu>
            <InputSearchBar type='text' placeholder='Search...'>
            </InputSearchBar>
                <IconBox>
                    <SearchIcon />
                </IconBox>
        </SearchBoxDownMenu>
        
    </SearchWrapperDownMenu>
     )
 }