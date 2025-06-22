
import { useNavigate, useParams } from 'react-router-dom';
import SalesDetailsModal from '../../../modal/SalesDetailsModal';



export default function SalesDetailsPage({back}) {
  const navigate = useNavigate();
  const { id } = useParams();


  return (
    <SalesDetailsModal
      isOpen={true}
     
    />
  );
}
