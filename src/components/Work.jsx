export default function Work() {
    return (
      <section id="work" className="py-20 bg-gray-200 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example project cards */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Booking System</h3>
              <p className="text-gray-700">
                A modern, responsive full-stack booking platform designed to
                help users easily schedule services or appointments. Built with
                React on the frontend and Express.js with MongoDB on the
                backend, this application allows users to: Select services and
                choose available dates/times Submit booking requests with
                personal information Store booking data securely in a NoSQL
                database Admins can view and manage bookings in a simple
                dashboard The system emphasizes clean UI, intuitive UX, and
                smooth form validation. It's deployed using Vercel for the
                frontend and Render for the backend API.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">
                Student Management System
              </h3>
              <p className="text-gray-700">
                A web-based solution for managing academic data and student
                records efficiently. Developed with PHP, Laravel, and MySQL,
                this system enables educational institutions to: Register and
                manage student profiles and course enrollments Track grades,
                attendance, and progress over time Manage departments,
                instructors, and schedules Generate reports and export data when
                needed The interface is responsive and role-based, ensuring that
                admins, teachers, and students have tailored access to
                appropriate functionality.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">ASM/ERP</h3>
              <p className="text-gray-700">
                A full-featured ERP (Enterprise Resource Planning) web
                application tailored for small-to-medium businesses. This system
                supports key operations including: Inventory management and
                product tracking Sales and customer relationship management
                (CRM) Employee records, payroll integration, and HR functions
                Financial tracking and reporting The application is built with a
                modern tech stack, ensuring scalability and security. It
                integrates with third-party APIs for payment processing and
                analytics. The user interface is designed for ease of use,
                providing a seamless experience for both admins and employees.
                The system is hosted on a secure cloud platform, ensuring data
                integrity and availability.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}