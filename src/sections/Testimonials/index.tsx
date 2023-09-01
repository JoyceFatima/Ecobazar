import { profileBoxes } from '@/app/homepage/data'
import { image3 } from '@/assets'
import ProfileBox from '@/components/ProfileBox'

const Testimonials = () => {
  return (
    <>
      <div
        style={{ backgroundImage: 'linear-gradient(#FFF, #F2F5F3)' }}
        className="py-10"
      >
        <div
          style={{
            backgroundImage: `url(${image3.src})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        >
          <div className="mx-56 my-10 justify-start align-center text-left">
            <div className="my-16">
              <span className="text-green-500 mb-4">Testimonial</span>
              <h2 className="font-semibold text-4xl">What Our Customer Says</h2>
            </div>
            <div className="flex gap-2">
              {profileBoxes.map(({ comments, image, user, role }, index) => (
                <ProfileBox
                  key={index}
                  comments={comments}
                  image={image}
                  user={user}
                  role={role}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
