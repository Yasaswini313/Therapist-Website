export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About Dr. Serena Blake
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Licensed Clinical Psychologist (PsyD) in Los Angeles, CA
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
                with eight years of experience and over 500 client sessions. She blends evidence-based 
                approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
                personalized care.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr. Blake is committed to helping you overcome anxiety, strengthen relationships, 
                and heal from trauma. Whether you meet in her Maplewood Drive office or connect 
                virtually via Zoom, she creates a safe, supportive space for you to thrive.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-sage-50 p-6 rounded-lg">
                <h4 className="font-semibold text-sage-800 mb-2">Education</h4>
                <p className="text-gray-600">Doctor of Psychology (PsyD)</p>
              </div>
              <div className="bg-sage-50 p-6 rounded-lg">
                <h4 className="font-semibold text-sage-800 mb-2">License</h4>
                <p className="text-gray-600">Licensed Clinical Psychologist</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-sage-600 to-sage-700 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Treatment Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Cognitive-Behavioral Therapy (CBT)
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mindfulness-Based Interventions
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Trauma-Informed Care
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Person-Centered Therapy
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-primary-50 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">8</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-primary-50 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600">Sessions Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
