export default function PageTitle({ children, className }) {
    return <div className={`text-[20px] font-medium ${className}`}>{children}</div>;
}
