export const LoginButton = ({ handleLogin }) => {
    return (
        <>
            <button
                onClick={handleLogin}
                className='p-2 w-48 h-24 font-bold text-white text-lg rounded-lg hover:bg-purple-500 hover:bg-opacity-20 border border-gray-300 shadow-lg shadow-purple-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 bg-white'
                >
                    Connect Wallet
            </button>
        </>
    )
}
