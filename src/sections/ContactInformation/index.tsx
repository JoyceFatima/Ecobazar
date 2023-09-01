import { map, phoneCall, email } from '@/assets'
import Card from '@/components/Card'

const ContactInformation = () => {
  return (
    <>
      <div className="mx-56 flex gap-6">
        <Card title="Our Location" icon={map.src}>
          <p className=" text-gray-500">
            1901 Thornridge Cir. Shiloh, Washington DC 20020, United States
          </p>
        </Card>
        <Card title="Call Us 24/7" icon={phoneCall.src}>
          <p className="text-2xl text-green-500">(303) 555-0105</p>
        </Card>
        <Card title="Subscribe Newsletter" icon={email.src}>
          <div className="flex border rounded-full ps-2">
            <input
              type="text"
              placeholder="Your email address"
              className="px-8 py-2"
            />
            <button className="flex text-white items-center text-center bg-green-600 rounded-full px-8 py-2">
              Subscribe
            </button>
          </div>
        </Card>
      </div>
    </>
  )
}

export default ContactInformation
