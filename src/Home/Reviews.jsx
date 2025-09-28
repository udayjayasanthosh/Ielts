import React from 'react';
import { Star, Quote, ChevronRight, CheckCircle } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Chen",
      band: "Band 9.0",
      course: "IELTS Academic",
      avatar: "https://placehold.co/64x64/FFA500/FFFFFF?text=SC",
      rating: 5,
      text: "The AI speaking evaluation helped me improve my fluency dramatically. I went from Band 6.5 to 9.0 in just 3 months!",
      date: "2 weeks ago",
      verified: true
    },
    {
      id: 2,
      name: "James Rodriguez",
      band: "Band 8.5",
      course: "IELTS General",
      avatar: "https://placehold.co/64x64/FF4500/FFFFFF?text=JR",
      rating: 5,
      text: "The writing feedback is incredibly detailed. The AI catches mistakes I didn't even know I was making. Highly recommended!",
      date: "1 month ago",
      verified: true
    },
    {
      id: 3,
      name: "Priya Patel",
      band: "Band 8.0",
      course: "Speaking Mastery",
      avatar: "https://placehold.co/64x64/FF8C00/FFFFFF?text=PP",
      rating: 5,
      text: "Live classes with native speakers made all the difference. The teachers are amazing and the community is very supportive.",
      date: "3 days ago",
      verified: true
    },
    {
      id: 4,
      name: "Michael Brown",
      band: "Band 7.5",
      course: "Writing Pro",
      avatar: "https://placehold.co/64x64/FFD700/000000?text=MB",
      rating: 5,
      text: "The mock tests are identical to the real exam. I felt completely prepared and confident on test day.",
      date: "2 months ago",
      verified: true
    },
    {
      id: 5,
      name: "Emma Wilson",
      band: "Band 9.0",
      course: "Complete Package",
      avatar: "https://placehold.co/64x64/FFA07A/000000?text=EW",
      rating: 5,
      text: "The adaptive learning system personalized my study plan perfectly. I only focused on what I needed to improve.",
      date: "1 week ago",
      verified: true
    },
    {
      id: 6,
      name: "Ahmed Hassan",
      band: "Band 8.0",
      course: "Reading Intensive",
      avatar: "https://placehold.co/64x64/FF6347/FFFFFF?text=AH",
      rating: 5,
      text: "The vocabulary builder and reading strategies helped me improve my reading score by 1.5 bands. Amazing results!",
      date: "3 weeks ago",
      verified: true
    }
  ];

  const primaryColor = 'text-orange-600';
  const primaryBgLight = 'bg-orange-50';

  const RatingStars = ({ rating }) => (
    <div className="flex items-center space-x-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );

  return (
    <div className="w-full bg-white py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className={`inline-flex items-center space-x-2 ${primaryBgLight} ${primaryColor} px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
            <Quote className="w-4 h-4" />
            <span>Student Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            What Our Students Say
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join thousands of successful students who achieved their target band scores with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="relative flex flex-col justify-between bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <Quote className={`absolute top-6 right-6 w-6 h-6 text-gray-200`} />

              <RatingStars rating={review.rating} />

              <p className="text-gray-700 mb-6 leading-relaxed italic text-base relative z-10">
                "{review.text}"
              </p>

              <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                
                <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-10 h-10 rounded-full object-cover border-2 border-orange-500" 
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/64x64/E5E7EB/4B5563?text=User"; }}
                />
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-gray-900 truncate text-base">{review.name}</h4>
                    {review.verified && (
                      <CheckCircle className={`w-4 h-4 ${primaryColor}`} title="Verified Customer" />
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span className={`font-semibold ${primaryColor} text-sm`}>{review.band}</span>
                    <span>•</span>
                    <span className="truncate text-sm">{review.course}</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 right-6">
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center pt-8">
            <button className={`inline-flex items-center ${primaryBgLight} ${primaryColor} font-semibold px-6 py-3 rounded-full text-base transition-colors hover:bg-orange-100 shadow-md`}>
                Read All 1,200+ Reviews <ChevronRight className="w-4 h-4 ml-2" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
