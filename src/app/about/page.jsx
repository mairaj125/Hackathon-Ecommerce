
import MenuBar from '../components/MenuBar';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import '../globals.css';
export default function about() {

  const stats = [
    {
      value: "10.5k",
      description: "Sellers active on our site",
      icon: "🏪",
    },
    {
      value: "33k",
      description: "Monthly Product Sale",
      icon: "💰",
      bgColor: "bg-red-500",
    },
    {
      value: "45.5k",
      description: "Customers active on our site",
      icon: "🎁",
    },
    {
      value: "25k",
      description: "Annual gross sale on our site",
      icon: "💵",
    },
  ];

  const teamMembers = [
    {
      name: "Tom Cruise",
      role: "Founder & Chairman",
      image: "/tom.png", // Replace with the actual image path
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Emma Watson",
      role: "Managing Director",
      image: "/emm.png", // Replace with the actual image path
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Will Smith",
      role: "Product Designer",
      image: "/wiil.png", // Replace with the actual image path
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];

  


    return (
      <div>
      <TopBar />
     <MenuBar />


     <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 mb-4">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className="text-lg text-gray-700">
            Exclusive has more than 1 Million products to offer, growing very
            fast. Exclusive offers a diverse assortment in categories ranging
            from consumer.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/aboutsideimg.png"
            alt="Shopping Experience"
            className="rounded-md object-cover"
          />
        </div>
      </div>
    </section>

    <div className="flex flex-wrap justify-center gap-6 p-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center w-60 h-40 rounded-lg shadow-lg ${
            stat.bgColor || "bg-white"
          }`}
        >
          <div
            className={`flex items-center justify-center w-12 h-12  bg-gray-200 ${
              stat.bgColor ? "text-white" : "text-black"
            }`}
          >
            <span className="text-xl">{stat.icon}</span>
          </div>
          <h2
            className={`mt-4 text-3xl font-bold ${
              stat.bgColor ? "text-white" : "text-black"
            }`}
          >
            {stat.value}
          </h2>
          <p
            className={`mt-2 text-sm ${
              stat.bgColor ? "text-white" : "text-gray-600"
            }`}
          >
            {stat.description}
          </p>
        </div>
      ))}
    </div>


    <div className="p-8 bg-gray-100">
      <div className="flex justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-md p-6"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-bold">{member.name}</h2>
            <p className="text-gray-500">{member.role}</p>
            <div className="flex gap-4 mt-4 text-gray-600">
              <a href={member.social.twitter} target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i> {/* Replace with SVG if needed */}
              </a>
              <a href={member.social.instagram} target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href={member.social.linkedin} target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div>
     
    <img
          src="/promabout.png" // Replace with your actual image path
          alt="Profile"
   
        />


    </div>



     <Footer />
 
      </div>
    );
  };
  
