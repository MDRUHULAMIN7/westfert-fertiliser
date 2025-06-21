
export default function Button({ children, className, onClick, style, htmlType = 'button' }) {
    return (
        <div className="flex justify-end p-2">
            <button
                style={style}
                type={htmlType}
                onClick={onClick} // Passing the onClick handler here
                className={`${className} text-center my-auto cursor-pointer  h-[45px] rounded-md text-base font-poppins `}
            >
                {children}
            </button>
        </div>
    );
}
