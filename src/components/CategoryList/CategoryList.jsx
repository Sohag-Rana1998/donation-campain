/* eslint-disable react/prop-types */

import Item from '../Card/Item';

const CategoryList = ({ searchData }) => {
  return (
    <div className="max-w-7xl container mx-auto">
      <h2 className="mt-10 text-4xl font-bold text-center">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchData.map(item => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
