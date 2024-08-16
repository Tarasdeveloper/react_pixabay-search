import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import {
  HeaderSearch,
  SearchButton,
  SearchButtonLabel,
  SearchForm,
  SearchFormInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleChange = e => {
    this.setState({ searchValue: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchValue);

    this.setState({ searchValue: '' });
  };

  render() {
    return (
      <HeaderSearch>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <SearchButtonLabel>Search</SearchButtonLabel>
            <ImSearch />
          </SearchButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchValue}
            onChange={this.handleChange}
          />
        </SearchForm>
      </HeaderSearch>
    );
  }
}

export default Searchbar;
