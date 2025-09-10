interface MenuItem {
  id: number;
  name: string;
  price: number | Record<string, number>;
  description: string;
  image: string;
  dietary?: string;
  popular?: boolean;
}

// Import authentic Ethiopian food images from assets
import muriyevoSoup from "@/assets/Muriyevo Soup.png";
import harambesalad from "@/assets/Harambe Salad.png";
import peanutSoup from "@/assets/Peanut Soup.png";
import dumaskliSoup from "@/assets/Dumaskli Soup.png";
import sheroWot from "@/assets/Shero Wot.png";
import misirWot from "@/assets/Misir Wot.png";
import tekilGomen from "@/assets/Tekil Gomen.png";
import gomen from "@/assets/Gomen.png";
import kikAlichaWot from "@/assets/Kik Alicha Wot.png";
import kitefo from "@/assets/Kitefo.png";
import kitefoWithVeggies from "@/assets/Kitefo and three Kinds of Vegetable Dishes.png";
import zilzilTibs from "@/assets/Zilzil Tibs.png";
import awazeTibs from "@/assets/Awaze Tibs.png";
import goredGored from "@/assets/Gored Gored.png";
import alichaWot from "@/assets/Alatcha Wot.png";
import doroWot from "@/assets/Doro Wot.png";
import doroTibs from "@/assets/Doro Tibs.png";
import doroTibsWithVeggies from "@/assets/Doro Tibs with three kinds of veggies.png";
import yebegTibs from "@/assets/Yebeg Tibs.png";
import yebegWotWithVeggies from "@/assets/Yebeg Wot with three kinds veggies.png";
import yeAssaTibs from "@/assets/Ye Assa Tibs.png";
import yeAssaTibsWithVeggies from "@/assets/Ye Assa Tibs and three Kinds of Vegetable Dishes.png";
import veggieCombination from "@/assets/Veggie Lovers Combination.png";
import chefsCombination from "@/assets/Chef's Choice Combination.png";
import injera from "@/assets/Injera.png";
import coffee from "@/assets/Coffee.png";
import tejHoneyWine from "@/assets/Tej Honey Wine.png";
import addisSpiceTea from "@/assets/Addis Ethiopian Spice Tea.png";

export const menuData = {
  appetizers: [
    {
      id: 1,
      name: "Muriyevo Soup",
      price: 8.99,
      description: "Spinach, onions, tomatoes and assorted Harambe spices, made with coconut milk",
      image: muriyevoSoup,
      dietary: "Vegetarian"
    },
    {
      id: 2,
      name: "Harambe Salad",
      price: 8.99,
      description: "Tomatoes, onions, bell peppers, and lettuce with assorted Harambe spices in the dressing.",
      image: harambesalad,
      dietary: "Vegetarian"
    },
    {
      id: 3,
      name: "Peanut Soup",
      price: 8.99,
      description: "Chicken cooked in peanut sauce with Harambe organic spices.",
      image: peanutSoup
    },
    {
      id: 4,
      name: "Dumaskli Soup",
      price: 8.99,
      description: "Milk, corn, and assorted Harambe Organic Ethiopian, made with coconut milk.",
      image: dumaskliSoup,
      dietary: "Vegetarian"
    }
  ],
  vegetarian: [
    {
      id: 6,
      name: "Shero Wot",
      price: 14.99,
      description: "Ground chickpeas cooked in berbere with onions and seasoned with Harambe organic spices.",
      image: sheroWot,
      dietary: "Vegetarian"
    },
    {
      id: 7,
      name: "Misir Wot",
      price: 14.99,
      description: "Red split lentils cooked with onions in berbere and Harambe organic spices.",
      image: misirWot,
      dietary: "Vegetarian"
    },
    {
      id: 8,
      name: "Tekil Gomen",
      price: 14.99,
      description: "Steamed cabbage and onions seasoned with Harambe organic spices.",
      image: tekilGomen,
      dietary: "Vegetarian"
    },
    {
      id: 9,
      name: "Gomen",
      price: 14.99,
      description: "Spinach boiled in onions and sauteed with garlic and Harambe organic spices.",
      image: gomen,
      dietary: "Vegetarian"
    },
    {
      id: 10,
      name: "Yatekilt Alicha",
      price: 14.99,
      description: "Sauteed carrots, string beans, potatoes, and onions, seasoned with Harambe organic spices.",
      image: alichaWot,
      dietary: "Vegetarian"
    },
    {
      id: 11,
      name: "Kik Alicha Wot",
      price: 13.99,
      description: "Yellow split lentils cooked with onions in berbere and Harambe organic spices.",
      image: kikAlichaWot,
      dietary: "Vegetarian"
    }
  ],
  beef: [
    {
      id: 12,
      name: "Kitefo",
      price: 23.80,
      description: "Lean tender beef finely chopped tartar and mixed with mitmita cardamom and Ethiopian butter. Served raw or slightly cooked with your choice of spinach or Ateb (Ethiopian Cottage Cheese) and choice of injera or rice.",
      image: kitefo
    },
    {
      id: 13,
      name: "Kitefo and Three Kinds of Vegetable Dishes",
      price: 31.80,
      description: "Lean tender beef finely chopped tartar and mixed with mitmita cardamom and Ethiopian butter. Served raw or slightly cooked with your choice of spinach or Ateb (Ethiopian Cottage Cheese) and choice of injera or rice.",
      image: kitefoWithVeggies
    },
    {
      id: 14,
      name: "Zilzil Tibs",
      price: 25.99,
      description: "Strips of tender beef sauteed with onions, exotic herbs, and berbere. Served with salad and choice of injera or rice.",
      image: zilzilTibs
    },
    {
      id: 15,
      name: "Awaze Tibs",
      price: 23.80,
      description: "Beef chunks sauteed in butter, seasoned with onions, green peppers, and organic Ethiopian spices, and served with Harambe salad and choice of injera or rice.",
      image: awazeTibs
    },
    {
      id: 16,
      name: "Awaze Tibs and Three Kinds of Vegetable Dishes",
      price: 31.80,
      description: "Awaze tibs with chef's choice of three items from the standard vegetable combination and injera or rice.",
      image: awazeTibs
    },
    {
      id: 17,
      name: "Gored Gored",
      price: 24.99,
      description: "Chucked cubed beef mixed with homemade awaze sauce and herbal butter with your choice of injera or rice.",
      image: goredGored
    },
    {
      id: 18,
      name: "Alicha Wot",
      price: 22.99,
      description: "Diced lean meat simmered with onions, ginger, garlic, and assorted Harambe organic spices. Served with salad and choice of injera or rice.",
      image: alichaWot
    },
    {
      id: 19,
      name: "Alicha Wot and Three Kinds of Vegetable Dishes",
      price: 30.99,
      description: "Alatcha Wot with chef's choice of three items from the standard vegetable combination and injera or rice.",
      image: alichaWot
    }
  ],
  chicken: [
    {
      id: 20,
      name: "Doro Wot",
      price: 19.99,
      description: "Chicken stew with hard-boiled eggs, chicken thigh, leg, and egg, cooked with onions in rich berbere sauce. Very tasty and served with Ayeb (Ethiopian Cottage Cheese) and Injera or rice.",
      image: doroWot
    },
    {
      id: 21,
      name: "Doro Wot and Three Kinds of Vegetable Dishes",
      price: 27.99,
      description: "Doro wot with chef's choice of three items from the standard vegetable combination.",
      image: doroWot
    },
    {
      id: 22,
      name: "Doro Tibs",
      price: 24.99,
      description: "Chicken cubes sauteed with onions, garlic, spices, and mixed vegetables. Served with salad and choice of injera or rice.",
      image: doroTibs
    },
    {
      id: 23,
      name: "Doro Tibs and Three Kinds of Vegetable Dishes",
      price: 32.99,
      description: "Doro tibs with chef's choice of three items from the standard vegetable combination.",
      image: doroTibsWithVeggies
    }
  ],
  lamb: [
    {
      id: 24,
      name: "Yebeg Tibs",
      price: 24.99,
      description: "Lamb cubes pan fried in jalapenos, onions, and rosemary, served with Harambe salad.",
      image: yebegTibs
    },
    {
      id: 25,
      name: "Yebeg Tibs with Three Kinds of Vegetable Dishes",
      price: 32.99,
      description: "Yebeg tibs with chef's choice of three items from the standard vegetable combination.",
      image: yebegTibs
    },
    {
      id: 26,
      name: "Yebeg Wot",
      price: 23.80,
      description: "Lamb simmered in berbere sauce, seasoned with organic Harambe spices, and served with salad.",
      image: yebegWotWithVeggies
    },
    {
      id: 27,
      name: "Yebeg Wot with Three Kinds of Vegetable Dishes",
      price: 31.80,
      description: "Yebeg Wot with chef's choice of three items from the standard vegetable combination.",
      image: yebegWotWithVeggies
    }
  ],
  combinationPlatters: [
    {
      id: 28,
      name: "Veggie Lovers Combination",
      price: {
        "One Person": 16.50,
        "Two People": 32.98,
        "Three People": 49.50,
        "Four People": 66.00,
        "Five People": 82.50,
        "Six People": 99.00
      },
      description: "Assorted Harambe vegetarian dishes with Harambe salad.",
      image: veggieCombination,
      dietary: "Vegetarian"
    },
    {
      id: 29,
      name: "Chef's Choice Combination",
      price: {
        "One Person": 22.99,
        "Two People": 43.80,
        "Three People": 62.67,
        "Four People": 95.96,
        "Five People": 114.50,
        "Six People": 137.99
      },
      description: "Yebeg Wot, Doro Wot, and Alicha Wot with Harambe assorted vegetarian dishes from the menu.",
      image: chefsCombination
    }
  ],
  fish: [
    {
      id: 30,
      name: "Ye Assa Tibs",
      price: 24.99,
      description: "Fish of the day pan fried and delicately seasoned with Ethiopian herbs and spices, served with a side salad and choice of injera or rice.",
      image: yeAssaTibs
    },
    {
      id: 31,
      name: "Ye Assa Tibs and Three Kinds of Vegetable Dishes",
      price: 32.99,
      description: "Ye assa tibs with chef's choice of three items from the standard vegetable combination.",
      image: yeAssaTibsWithVeggies
    }
  ],
  injera: [
    {
      id: 32,
      name: "Injera",
      price: 0,
      description: "For thousands of years, Ethiopians have made traditional Ethiopian bread called Injera when eating and Ethiopian meal. Injera serves both as your platter and utensil. Standard Injera Included with your meal. Gluten free Injera are $3.00 each",
      image: injera,
      dietary: "Vegetarian"
    }
  ]
};