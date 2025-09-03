import React, { useState } from 'react';
import { Search, Plus, Upload, RefreshCw, MoreHorizontal, ChevronLeft, ChevronRight, Calendar, Clock, Users, TrendingUp } from 'lucide-react';

export default function DashboardLandingpage() {
  const [selectedDate, setSelectedDate] = useState(5);
  
  // Calendar data for February 2021
  const calendarDays = [
    { day: 1, isToday: false }, { day: 2, isToday: false }, { day: 3, isToday: false }, 
    { day: 4, isToday: false }, { day: 5, isToday: true }, { day: 6, isToday: false }, 
    { day: 7, isToday: false }, { day: 8, isToday: false }, { day: 9, isToday: false }, 
    { day: 10, isToday: false }, { day: 11, isToday: false }, { day: 12, isToday: false }, 
    { day: 13, isToday: false }, { day: 14, isToday: false }, { day: 15, isToday: false }, 
    { day: 16, isToday: false }, { day: 17, isToday: false }, { day: 18, isToday: false }, 
    { day: 19, isToday: false }, { day: 20, isToday: false }, { day: 21, isToday: false }, 
    { day: 22, isToday: false }, { day: 23, isToday: false }, { day: 24, isToday: false }, 
    { day: 25, isToday: false }, { day: 26, isToday: false }, { day: 27, isToday: false }, 
    { day: 28, isToday: false }
  ];

  const scheduleItems = [
    {
      id: 1,
      title: "UX Research Class",
      time: "Mon - Thu",
      duration: "10:00 am",
      color: "bg-gray-100",
      textColor: "text-gray-600"
    },
    {
      id: 2,
      title: "App Development Course",
      time: "Mon - Thu",
      duration: "08:00 am",
      color: "bg-blue-500",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "Figma UI/UX Workshop",
      time: "Mon - Thu",
      duration: "10:00 pm",
      color: "bg-red-500",
      textColor: "text-white"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Typography in UX UI",
      category: "Design",
      time: "4:00 pm",
      icon: "📝",
      color: "bg-yellow-400"
    },
    {
      id: 2,
      title: "Figma UI UX Design",
      category: "Design",
      time: "10:00 am",
      icon: "🎨",
      color: "bg-red-400"
    }
  ];

  const topCourses = [
    {
      id: 1,
      title: "CSS for Designers",
      category: "Design",
      icon: "💻",
      color: "bg-blue-400",
      trending: true
    },
    {
      id: 2,
      title: "3D Design Foundations",
      category: "Design",
      icon: "🎯",
      color: "bg-yellow-400"
    },
    {
      id: 3,
      title: "Design Composition",
      category: "Design",
      icon: "🎨",
      color: "bg-pink-400"
    },
    {
      id: 4,
      title: "Color Psychology",
      category: "Design",
      icon: "🎨",
      color: "bg-blue-400"
    }
  ];

  const courseCategories = [
    { name: "All Course", active: true },
    { name: "Webinar", active: false },
    { name: "Personal Coaching", active: false },
    { name: "Live Stream", active: false }
  ];

  const bottomCourses = [
    {
      id: 1,
      title: "Portrait Photography Masterclass",
      price: "£50 Kr/Ft",
      image: "bg-gray-300"
    },
    {
      id: 2,
      title: "User Interface Design Masterclass",
      price: "£50 Kr/Ft",
      image: "bg-gray-300"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 pl-[21%] lg:pt-10 lg:pr-4 lg:pb-4">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <div className="relative flex-1 lg:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">New Upload</span>
          </button>
          <button className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
            <RefreshCw className="w-4 h-4" />
          </button>
          <button className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Left Section - Schedule and Calendar */}
        <div className="xl:col-span-2 space-y-6">
          {/* My Schedule */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">My Schedule</h2>
              <div className="text-sm text-gray-500">02 - 08 March</div>
            </div>

            {/* Week Days */}
            <div className="grid grid-cols-7 gap-2 mb-6">
              {['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                <div key={day} className="text-center">
                  <div className="text-xs text-gray-500 mb-2">{day}</div>
                  <div className="text-sm font-medium text-gray-800">
                    {String(index + 2).padStart(2, '0')}
                  </div>
                </div>
              ))}
            </div>

            {/* Time Slots and Events */}
            <div className="space-y-4">
              <div className="text-xs text-gray-400">09:00</div>
              <div className="text-xs text-gray-400">10:00</div>
              
              {scheduleItems.map((item) => (
                <div key={item.id} className={`${item.color} ${item.textColor} rounded-lg p-4 mb-3`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-sm">{item.title}</h3>
                      <p className="text-xs opacity-75">{item.time}</p>
                    </div>
                    <div className="text-xs opacity-75">{item.duration}</div>
                  </div>
                </div>
              ))}
              
              <div className="text-xs text-gray-400">12:00</div>
              <div className="text-xs text-gray-400">13:00</div>
              <div className="text-xs text-gray-400">14:00</div>
              <div className="text-xs text-gray-400">15:00</div>
            </div>
          </div>
        </div>

        {/* Right Section - Calendar and Events */}
        <div className="xl:col-span-2 space-y-6">
          {/* Calendar Widget */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">February 2021</h3>
              <div className="flex items-center gap-2">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
                <div key={day} className="text-xs text-gray-500 text-center py-2">{day}</div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((date, index) => (
                <button
                  key={index}
                  className={`h-8 w-8 text-xs rounded-full flex items-center justify-center
                    ${date.day === 5 ? 'bg-gray-800 text-white' : 
                      date.day === 27 ? 'bg-gray-800 text-white' : 
                      'hover:bg-gray-100 text-gray-700'}
                  `}
                >
                  {date.day}
                </button>
              ))}
            </div>
          </div>

          {/* Webinar and Live Stream Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-teal-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-xs text-teal-700">Zoom</span>
              </div>
              <h4 className="font-semibold text-teal-800 mb-1">Webinar</h4>
              <p className="text-xs text-teal-600">Mon - Thu</p>
              <p className="text-xs text-teal-600">10:00 am</p>
            </div>
            
            <div className="bg-purple-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-xs text-purple-700">Zoom</span>
              </div>
              <h4 className="font-semibold text-purple-800 mb-1">Live Stream</h4>
              <p className="text-xs text-purple-600">Mon - Thu</p>
              <p className="text-xs text-purple-600">08:00 am</p>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-xl p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${event.color} rounded-lg flex items-center justify-center text-white font-semibold`}>
                    {event.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-gray-800">{event.title}</h4>
                    <p className="text-xs text-gray-500">{event.category} • {event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Performing Courses */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">Top Performing Courses</h3>
              <MoreHorizontal className="w-4 h-4 text-gray-400" />
            </div>
            <div className="space-y-3">
              {topCourses.map((course) => (
                <div key={course.id} className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${course.color} rounded-lg flex items-center justify-center text-white font-semibold`}>
                    {course.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-gray-800">{course.title}</h4>
                    <p className="text-xs text-gray-500">{course.category}</p>
                  </div>
                  {course.trending && <TrendingUp className="w-4 h-4 text-green-500" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Course Categories and Courses */}
      <div className="mt-8 space-y-6">
        {/* Course Categories */}
        <div className="flex flex-wrap gap-2">
          {courseCategories.map((category) => (
            <button
              key={category.name}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${category.active 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }
              `}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Bottom Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bottomCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl overflow-hidden">
              <div className={`h-40 ${course.image}`}></div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm">{course.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}