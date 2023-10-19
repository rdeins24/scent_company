// const servicesData = [
//   {
//     id: 1,
//     title: "Web Development",
//     description:
//       "Lorem Ipsum is simpls been the industry's y dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
//   },
//   {
//     id: 2,
//     title: "SMM ",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
//   },
//   {
//     id: 3,
//     title: "Design",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
//   },
//   {
//     id: 4,
//     title: "Ecommerce  Development",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
//   },
// ];

// const Services = () => {
//   return (
//     <div className="px-[120px]  ">
//       {servicesData.map((service) => (

//           <div
//             key={service.id}
//             className="flex  py-7  items-center justify-center space-x-4  border-solid border-gray-500 border-b-2 group "
//           >
//             <p className="w-12 h-12  border border-solid border-gray-600 text-gray-600 rounded-full  flex items-center justify-center ">
//               {service.id}
//             </p>
//             <h3 className="whitespace-nowrap pr-5 mr-4 w-[400px] space-x-4 text-[35px] text-red-700 bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text text-transparent">
//               {service.title}
//             </h3>
//             <h4 className="px-20  w-1/2 text-gray-400 leading-6 text-sm space-x-4 ">
//               {service.description}
//             </h4>
//             <button className="bg-white text-black rounded-full p-2 px-4 whitespace-nowrap ">
//               call now
//             </button>
//           </div>

//       ))}
//     </div>
//   );
// };

// export default Services;

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Lorem Ipsum is simpls been the industry's y dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    id: 2,
    title: "SMM ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    id: 3,
    title: "Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    id: 4,
    title: "Ecommerce  Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
];

const Services = () => {
  return (
    <div className=" ">
      {servicesData.map((service) => (
       
        <div className=" group flex flex-col md:flex-row items-center justify-center  mx-auto  gap-5 " key={service.id}>
          <p className="  w-12 h-12 border border-solid-white rounded-full flex justify-center items-center shrink-0 ">
            {service.id}
          </p>
          <h3 className=" group-hover:bg-red-700 bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text text-transparent ">
            {service.title}
          </h3>
          <h4 className=" text-gray-400 leading-6 text-sm  ">
            {service.description}
          </h4>
          <button className="bg-white  text-black rounded-full p-2 px-4 whitespace-nowrap  hover:bg-slate-600">
            call now
          </button>
        </div>
      ))}

    
    </div>
  );
};

export default Services;
