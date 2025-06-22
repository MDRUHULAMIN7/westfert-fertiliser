import { useEffect, useRef, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#f5f6fc',
    color: '#B8B8B8',
    borderRadius: '15px',
    minWidth: '300px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '20px',
    border: 'none',
    fontSize: '30px',
    cursor: 'pointer',
  },
};

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const params = useParams();


  const backPath = location.state?.from || '/stafflist';
  console.log(pathname, params, backPath, 'from modal');
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose?.();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      setAnimate(true);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
      setAnimate(false);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={styles.overlay}
      className="flex justify-center items-center backdrop-blur-sm transition-opacity duration-300 animate-fade-in "
    >
      <div
        ref={modalRef}
        style={styles.modal}
        onMouseDown={(e) => e.stopPropagation()}
        className={`transform transition-all duration-300 ${animate ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-5'
          }`}
      >

        <button
          onClick={() => navigate(backPath)}

          style={styles.closeButton} className="text-gray-800 h-5 w-5 pr-6 pt-2 ">
          <IoMdClose />
        </button>

        <div className='overflow-y-scroll no-scrollbar max-h-[90vh] '>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
