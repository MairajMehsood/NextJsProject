
import Sectionheader from "@/components/layout/Sectionheader";
const page = () => {
  return (
    <div className="mt-40">
      <Sectionheader  mainheader={'Contact Us'}  />
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md bg-bg mt-4">
    <h2 className="text-2xl font-semibold mb-6 ">Contact Us</h2>
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Your Name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Your Email"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Your Message"
        ></textarea>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  </div>
    </div>
  )
}

export default page