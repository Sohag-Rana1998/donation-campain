import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
  const storedData = JSON.parse(localStorage.getItem('donate') || '[]');

  const handleDonate = donate => {
    console.log(donate);
    const newSavedData = [...storedData, donate];
    localStorage.setItem('donate', JSON.stringify(newSavedData));
  };

  const { id } = useParams();
  const newID = parseInt(id);
  const data = useLoaderData();
  const singleData = data.find(item => item.id === newID);
  const { img, donation_title, donation_sector_description, donation_amount } =
    singleData;

  return (
    <div className="max-w-7xl container mx-auto">
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure className="relative">
          <img src={img} alt="" className="w-full h-[450px] " />
          <div className="absolute bottom-0 w-full bg-black opacity-40 h-28"></div>
          <button
            onClick={() => handleDonate(singleData)}
            className="btn absolute bottom-4 left-4 bg-red-600 font-bold text-white mt-10 ml-10"
          >
            Donate ${donation_amount}
          </button>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{donation_title}</h2>
          <p>{donation_sector_description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
