import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import { toastConfig } from 'components/App/App';

import {
  HeaderSearch,
  SearchButton,
  SearchButtonLabel,
  SearchForm,
  SearchFormInput,
} from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = e => {
    setSearchValue(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchValue.trim() === '') {
      toast.error('Oopps, enter at least something', toastConfig);
      return;
    }

    onSubmit(searchValue);

    setSearchValue('');
  };

  return (
    <HeaderSearch>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <SearchButtonLabel>Search</SearchButtonLabel>
          <ImSearch />
        </SearchButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchValue}
          onChange={handleChange}
        />
      </SearchForm>
    </HeaderSearch>
  );
}

// class Searchbar extends Component {
//   state = {
//     searchValue: '',
//   };

//   handleChange = e => {
//     this.setState({ searchValue: e.currentTarget.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state.searchValue);

//     this.setState({ searchValue: '' });
//   };

//   render() {
//     return (
//       <HeaderSearch>
//         <SearchForm onSubmit={this.handleSubmit}>
//           <SearchButton type="submit">
//             <SearchButtonLabel>Search</SearchButtonLabel>
//             <ImSearch />
//           </SearchButton>

//           <SearchFormInput
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.searchValue}
//             onChange={this.handleChange}
//           />
//         </SearchForm>
//       </HeaderSearch>
//     );
//   }
// }

// export default Searchbar;
