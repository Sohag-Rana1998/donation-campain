import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Donation = () => {
  const savedData = JSON.parse(localStorage.getItem('donate') || '[]');
  console.log(savedData);
  const sliceData = savedData.length > 4 ? savedData.slice(0, 4) : savedData;
  const ShowBtn = savedData.length > 4 ? 'block' : 'hidden';

  const [displayData, setDisplayData] = useState(sliceData);
  const [hidden, setHidden] = useState(ShowBtn);

  const handleShowAll = () => {
    setDisplayData(savedData);
    setHidden('hidden');
  };
  return (
    <div className="max-w-7xl container mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {displayData.map(card => (
          <div key={card.id}>
            <div>
              <Card className="mt-6  w-full">
                <CardHeader color="blue-gray" className="h-72 w-full">
                  <img
                    src={card.img}
                    alt="card-image"
                    className="w-full h-full"
                  />
                </CardHeader>

                <CardBody>
                  <Button size="sm" className="mb-3">
                    {card.donation_sector}
                  </Button>
                  <Button size="sm" className="mb-3">
                    ${card.donation_amount}
                  </Button>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {card.donation_title}
                  </Typography>
                  <Link to={`/donation-details/${card.id}`}>
                    <Button size="sm" className="my-3">
                      View Details
                    </Button>
                  </Link>
                </CardBody>
              </Card>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => handleShowAll()}
          className={`btn  bg-blue-500 ${hidden}`}
        >
          Show ALL
        </button>
      </div>
    </div>
  );
};

export default Donation;
