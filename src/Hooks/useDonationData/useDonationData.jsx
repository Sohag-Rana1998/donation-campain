import { useEffect, useState } from 'react';

const useDonationData = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    fetch('./donation.json')
      .then(res => res.json())
      .then(data => setData(data));
    setLoader(false);
  }, []);

  return { data, loader };
};

export default useDonationData;
