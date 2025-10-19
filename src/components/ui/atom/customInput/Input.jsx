function Input({ children, ...props }) {
    return (
        <div >
            <input {...props} />
            {children}
        </div>
    );
}

export default Input;