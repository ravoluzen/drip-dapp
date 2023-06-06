export const DetailCard = ({ accountDetails }) => {


  return (
    <article className='p-2 w-full md:w-2/5 h-64 flex flex-col items-center text-white font-bold bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 bg-white border border-gray-300 rounded-lg'>
        <p className='break-words'><span className='underline'>Address</span>: { accountDetails }</p>
    </article>
  )
}
