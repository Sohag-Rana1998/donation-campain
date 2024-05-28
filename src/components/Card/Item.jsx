/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  const { id, img, donation_title, donation_sector } = item;
  return (
    <Link to={`/donation-details/${id}`}>
      <div>
        <Card className="mt-6 w-full overflow-hidden  cursor-pointer">
          <CardHeader color="blue-gray" className="relative h-56 w-full">
            <img src={img} alt="card-image" className="w-full h-full" />
          </CardHeader>

          <CardBody>
            <Button size="sm" className="mb-3">
              {donation_sector}
            </Button>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {donation_title}
            </Typography>
          </CardBody>
        </Card>
      </div>
    </Link>
  );
};

export default Item;
