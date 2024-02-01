

const Sectionheader = ({subheader,mainheader}) => {
  return (
    <div className='text-center'>
    <h3 className='text-gray-500 uppercase font-semibold'>{subheader}</h3>
    <h2 className='text-primary text-4xl font-semibold italic'>{mainheader}</h2>
    </div>
  )
}

export default Sectionheader