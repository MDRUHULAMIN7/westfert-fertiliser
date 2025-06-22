
import { useNavigate, useParams } from 'react-router-dom';
import EditProfileModal from '../../../modal/EditProfileModal';


export default function EditProfilePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id)

  return (
    <EditProfileModal
      isOpen={true}
    
    />
  );
}
