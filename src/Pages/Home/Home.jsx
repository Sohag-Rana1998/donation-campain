import { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import CategoryList from '../../components/CategoryList/CategoryList';
import useDonationData from '../../Hooks/useDonationData/useDonationData';
import Spinner from '../../components/Spinner/Spinner';

const Home = () => {
  const { data, loader } = useDonationData();

  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(setSearchData, 2000, data);
    setTimeout(setLoading, 2000, false);
  }, [data]);
  const [value, setValue] = useState('');

  console.log(searchData);

  const handleInput = str => {
    setValue(str);
  };

  const handleSearch = () => {
    setLoading(true);
    if (value !== '') {
      const displayData = data.filter(
        item => item.donation_sector.toLowerCase() === value.toLowerCase()
      );
      setTimeout(setSearchData, 2000, displayData);
      setTimeout(setLoading, 2000, false);
      setValue('');
    } else {
      alert('Please give a valid input');
      setValue('');
    }
  };
  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <Banner
        handleSearch={handleSearch}
        handleInput={handleInput}
        value={value}
      ></Banner>
      <CategoryList searchData={searchData}></CategoryList>
    </div>
  );
};

export default Home;
