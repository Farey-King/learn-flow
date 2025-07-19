import React from 'react';
import profile1 from '../../assets/profile1.png';
import profile2 from '../../assets/profile2.png';
import profile3 from '../../assets/profile3.png';

export default function Feedback() {
  const feedbacks = [
    {
      name: "Trevor Mitchell",
      image: profile1,
      rating: 3,
      text: "Ut tristique viverra sed porttitor senectus. A facilisis metus pretium ut habitant lorem. Velit vel bibendum eget aliquet sem nec, id sed. Triducunt.",
    },
    {
      name: "Trevor Mitchell",
      image: profile2,
      rating: 4,
      text: "Ut tristique viverra sed porttitor senectus. A facilisis metus pretium ut habitant lorem. Velit vel bibendum eget aliquet sem nec, id sed. Triducunt.",
    },
    {
      name: "Trevor Mitchell",
      image: profile3,
      rating: 3,
      text: "Ut tristique viverra sed porttitor senectus. A facilisis metus pretium ut habitant lorem. Velit vel bibendum eget aliquet sem nec, id sed. Triducunt.",
    },
  ];

  return (
    <div className="py-16 px-[8%] text-center">
      <h5 className="text-sm font-semibold text-[#000000]">Amazing Stories</h5>
      <h2 className="text-2xl md:text-[2rem] font-bold mt-2 mb-4">FEEDBACKS FROM LEARNERS</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Join LearnFlow now to unlock a world of knowledge and skill-building. Become part of our community, learn from experts, and later share your inspiring success story!
      </p>

      <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-2xl border border-gray-200">
            <img
              src={feedback.image}
              alt={feedback.name}
              className="w-16 h-16 object-cover rounded-full mx-auto"
            />
            <h4 className="font-semibold mt-4">{feedback.name}</h4>

            {/* Star Rating */}
            <div className="flex justify-center mt-2 mb-4 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  {i < feedback.rating ? '★' : '☆'}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-600">"{feedback.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
