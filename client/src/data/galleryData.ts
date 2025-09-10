interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: "restaurant" | "food" | "team";
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Restaurant interior with natural lighting",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/hd6kliVe-bu8TPWU0SXoTg/o.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "restaurant"
  },
  {
    id: 2,
    title: "Beautifully plated main course",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/yEnxt-euWvjVkQ6abOcaIg/o.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "food"
  },
  {
    id: 3,
    title: "Good food",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/O02WMAg6V0Z5TLQ_0F1bUA/348s.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "team"
  },
  {
    id: 4,
    title: "Outdoor dining area",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/BUo7XxC_ZjcPZoxnfwnWUw/o.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "restaurant"
  },
  {
    id: 5,
    title: "Amazing Drinks",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/F_iyUBqOINtyxEpRH71cEA/348s.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "food"
  },
  {
    id: 6,
    title: "Injera",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/d1QkCTu6pBBdeC8Y06kKFg/o.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "team"
  },
  {
    id: 7,
    title: "Dining room",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/i6X6OC0GEiPaCTq2rNiOQw/o.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "restaurant"
  },
  {
    id: 8,
    title: "Bar Area",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/j8oQE8fFSOev8BdnuvYnvw/o.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "food"
  },
  {
    id: 9,
    title: "Fresh and authentic food",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/pBm18hKGyPOjCP9gOqyRmA/o.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "team"
  }
];
