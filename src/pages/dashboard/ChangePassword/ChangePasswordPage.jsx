
import { useNavigate, useParams } from 'react-router-dom';
import ChangePasswordModal from '../../../modal/ChangePasswordModal';



export default function ChangePasswordPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id)

  return (
    
    <ChangePasswordModal
      isOpen={true}

    
    />
  );
}
