

const Button = ({content,type,color,Icon,textColor}) => {

    return (
        <>
            <button
            className={`${color} border px-3 py-2 rounded-md inline-flex justify-center items-center gap-1 w-fit
             border-gray-300  transition duration-150 cursor-pointer font-medium ${textColor} `}
            type={type}
            >{Icon} {content}

            </button>
        </>
    )

}

export default Button;