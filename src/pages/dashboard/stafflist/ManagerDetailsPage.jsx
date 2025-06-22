
import { useNavigate, useParams } from 'react-router-dom';
import SalesDetailsModal from '../../../modal/SalesDetailsModal';
import ManagerDetailsModal from '../../../modal/ManagerDetailsModal';



export default function ManagerDetailsPage({back}) {
  const navigate = useNavigate();
  const { id } = useParams();


  return (
    <ManagerDetailsModal
      isOpen={true}
     
    />
  );
}
