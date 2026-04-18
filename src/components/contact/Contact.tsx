import Container from "../Container"
import { Heading } from "../partial-components/Heading"

const contactInfo = [
  {
    icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>,
    name: "location",
    description: "Embassy WeWork Galaxy, 1st Floor, 43, Residency Rd,Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025"
  },
  {
    icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path></svg>,
    name: "Timing",
    description: "Weekdays:-10 AM to 7 PM"
  },
  {
    icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>,
    name: "Mobile Number",
    description: "+91 97403 23934"
  },
  {
    icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>,
    name: "Email",
    description: "shobha@infinitebuildingtechnologies.com"
  },
  {
    icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg>,
    name: "Website",
    description: "www.shobhanv.com"
  },
]

const Contact = () => {
  return (
    <section className="min-h-screen">
      <Container className="pt-20 text-neutral-600 dark:text-neutral-400">
        {/* 1. Heading */}
        <Heading>Contact Us</Heading>

        {/* 2. Icons & details */}
        <div className="flex flex-wrap justify-center text-center gap-15 pt-20">
          {contactInfo.map((item, index) => (
            <div
              key={item.name}
              className="w-full lg:w-[calc(33.33%-40px)] min-w-[300px]"
            >
              <div className="size-12 bg-brand-100 dark:bg-brand-500 rounded-full flex items-center justify-center text-neutral-100 dark:text-neutral-900 shadow-md mx-auto">
                {item.icon}
              </div>
              <p className="mt-2 max-w-120 mx-auto whitespace-pre-line">{item.description}</p>
            </div>
          ))}
        </div>

        {/* 3. Contact Form */}
        <div className="mt-14 p-10 lg:p-20">
          <h3 className="text-2xl text-center font-ptSerif">Get in touch</h3>
          <div className="p-10 text-neutral-600  dark:text-neutral-400">
            <div className="flex flex-col md:flex-row gap-6">
              <input type="text" placeholder="Your Name" className="outline-brand-100/30 bg-gray-100 dark:bg-gray-800 flex-1  px-3 py-2 rounded-md" />
              <input type="email" placeholder="Your Email" className="outline-brand-100/30 bg-gray-100 dark:bg-gray-800 flex-1  px-3 py-2 rounded-md" />
            </div>
            <div className="flex flex-col md:flex-row gap-6 mt-4">
              <input type="text" placeholder="Subject" className="outline-brand-100/30 bg-gray-100 dark:bg-gray-800 flex-1 px-3 py-2 rounded-md" />
              <input type="number" placeholder="Phone Number" className="outline-brand-100/30 bg-gray-100 dark:bg-gray-800 flex-1 px-3 py-2 rounded-md" />
            </div>
            <div className="mt-4">
              <textarea placeholder="Your Message" className="outline-brand-100/30 bg-gray-100 dark:bg-gray-800 w-full min-h-50 px-3 py-2 rounded-md" />
            </div>
            <button
              className="text-neutral-50 bg-brand-200 dark:bg-brand-500 px-6 py-2 rounded-md text-base mt-6"
            >Send Enquiry</button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact

