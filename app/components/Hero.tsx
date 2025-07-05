import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-16 bg-gradient-to-br from-sage-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Find Your Path to 
              <span className="text-sage-600"> Healing & Growth</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Dr. Serena Blake, PsyD, offers compassionate, evidence-based therapy 
              to help you overcome anxiety, strengthen relationships, and heal from trauma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary text-center">
                Schedule Consultation
              </a>
              <a href="tel:3235550192" className="btn-secondary text-center">
                Call (323) 555-0192
              </a>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-600">
              <svg className="w-5 h-5 text-sage-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              In-person & virtual sessions available
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dr. Serena Blake, Clinical Psychologist"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold text-sage-600">8+</div>
                <div className="text-sm text-gray-600">
                  <div>Years of</div>
                  <div>Experience</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold text-sage-600">500+</div>
                <div className="text-sm text-gray-600">
                  <div>Client</div>
                  <div>Sessions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
