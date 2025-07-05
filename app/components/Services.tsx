export default function Services() {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description: "Evidence-based treatments for anxiety disorders, panic attacks, and chronic stress using CBT and mindfulness techniques.",
      icon: "🧠"
    },
    {
      title: "Relationship Counseling", 
      description: "Individual and couples therapy to improve communication, resolve conflicts, and strengthen emotional connections.",
      icon: "💕"
    },
    {
      title: "Trauma Recovery",
      description: "Specialized trauma-informed therapy to help process difficult experiences and develop healthy coping strategies.",
      icon: "🌱"
    }
  ]

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-heading mb-4">
            Services & Specialties
          </h2>
          <p className="text-subheading max-w-3xl mx-auto text-balance">
            Compassionate, evidence-based therapy tailored to your unique needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl card-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Session Fees</h3>
            <p className="text-gray-600">Transparent, competitive pricing for quality care</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-sage-50 p-8 rounded-xl text-center border border-sage-100">
              <h4 className="text-xl font-bold text-sage-800 mb-2">Individual Sessions</h4>
              <div className="text-4xl font-bold text-sage-600 mb-4">$200</div>
              <p className="text-gray-600">Per 50-minute session</p>
            </div>
            <div className="bg-sage-50 p-8 rounded-xl text-center border border-sage-100">
              <h4 className="text-xl font-bold text-sage-800 mb-2">Couples Sessions</h4>
              <div className="text-4xl font-bold text-sage-600 mb-4">$240</div>
              <p className="text-gray-600">Per 50-minute session</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-6">
              Insurance not accepted, but superbills provided for self-submission
            </p>
            <a href="#contact" className="btn-primary">
              Schedule Your Session
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}