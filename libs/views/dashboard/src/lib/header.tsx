import { DivProps } from '@waweb/model';
import React from 'react';
import SearchBar from './search-bar';

interface HeaderProps extends DivProps {
  isMenuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const Header = ({ isMenuOpen, setMenuOpen, ...props }: HeaderProps) => (
  <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 shadow" {...props}>
    <SearchBar />
  </div>
);

export default Header;
