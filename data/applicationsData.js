import heroImg from '../public/brand.jpg'
import expert from '../public/expert.jpg'

const applications = [
    {
      id: 'hotels',
      name: 'Hotels!',
      description: 'Create a welcoming and memorable experience for guests with signature scents in lobbies, rooms, and common areas.',
      heroImage: expert,
      sections: [
        {
          image: expert,
          alt: 'Hotel Lobby',
          heading: 'Enhance Guest Experience',
          text: 'Use scenting to create a calming and welcoming environment in hotel lobbies, rooms, and common areas.',
          content:"more content"
        },
        // Add more sections as needed
      ],
    },
    {
      id: 'restaurants',
      name: 'Restaurants',
      description: 'Enhance the dining experience by incorporating scents that complement the cuisine and ambiance.',
      heroImage: heroImg,
      sections: [
        {
          image: heroImg,
          alt: 'Restaurant Interior',
          heading: 'Boost Appetite and Mood',
          text: 'Create a pleasant dining atmosphere with scents that enhance the dining experience and complement the cuisine.',
        },
        // Add more sections as needed
      ],
    },
    {
        id: 'showroom',
        name: 'Showroom',
        description: 'Enhance the dining experience by incorporating scents that complement the cuisine and ambiance.',
        heroImage: heroImg,
        sections: [
          {
            image: heroImg,
            alt: 'Restaurant Interior',
            heading: 'Boost Appetite and Mood',
            text: 'Create a pleasant dining atmosphere with scents that enhance the dining experience and complement the cuisine.',
          },
          // Add more sections as needed
        ],
      },
    // Add more applications as needed
  ];
  
  export default applications;
  