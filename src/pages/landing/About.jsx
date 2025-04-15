import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Container from '../../components/layout/Container'
import { CheckCircle } from 'lucide-react'; 

const About = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar/>
      <main className='flex-1'>
       
        <section className="pt-38 text-white py-16 bg-gradient-to-br from-[#00A2E8]/90 to-[#5FB3B3]">
    <Container className="px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-2xl md:text-3xl font-bold mb-4">About Health Staff Manager</h1>
    <p className="text-[18px] text-white/90 max-w-2xl mx-auto ">
    Connecting qualified healthcare professionals with leading healthcare facilities
    </p>
  </Container>
  </section>

       
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At Health Staff Manager, we're dedicated to revolutionizing healthcare staffing by creating seamless connections between qualified professionals and healthcare facilities in need.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">Streamlining the healthcare staffing process</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">Ensuring quality healthcare delivery</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">Supporting healthcare professionals' career growth</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Healthcare professionals"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Who We Are</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center">
              We are a team of healthcare and technology experts committed to improving staffing solutions in the medical field.
            </p>
          </div>
        </section>
      
      </main>
      <Footer/> 
    </div>
  )
}

export default About