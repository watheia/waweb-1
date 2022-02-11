import { DivProps } from '@waweb/model';
import React from 'react';
import icons from '@waweb/icons';

export type SearchBarProps = DivProps;

const SearchBar = (props: SearchBarProps) => (
  <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6" {...props}>
    <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
      <div className="w-full">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <icons.Search
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            id="search"
            name="search"
            className="block w-full rounded-md border border-gray-700 bg-gray-900 py-2 pl-10 pr-3 text-sm placeholder-gray-500 opacity-75 focus:border-teal-500 focus:text-gray-200 focus:placeholder-gray-400 focus:opacity-100 focus:outline-none focus:ring-1 focus:ring-teal-500"
            style={{ minWidth: '120px' }}
            placeholder="Search"
            type="search"
          />
        </div>
      </div>
    </div>
  </div>
);

export default SearchBar;
