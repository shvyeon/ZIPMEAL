var mealkits = [
  {
    title: "Turkey, Chard and Sweet Potato Grain Bowl",
    included:
      "sweet potatoes, green onions, dark turkey, rainbow chard, toasted walnut halves, avocado, black sesame seeds",
    description: "Salad with turkey, sweet potato, avocado for breakfast.",
    category: "Classic Meals",
    price: "$12.25",
    cooking_time: "15 min",
    servings: 2,
    calories_per_serving: 305,
    image_URL: "Turkey.jpg",
    top_meal: false,
  },
  {
    title: "Paccheri Pasta",
    included:
      "virgin coconut oil, walnuts, garlic, rosemary, cannellini beans, paccheri, lemon, parsley, black pepper",
    description: "Pasta made with vegan cream sauce.",
    category: "Vegan Meals",
    price: "$22.25",
    cooking_time: "15 min",
    servings: 2,
    calories_per_serving: 473,
    image_URL: "PaccheriPasta.jpeg",
    top_meal: false,
  },
  {
    title: "Pomegranate Chicken Salad (January)",
    included:
      "oatmeal bread, chicken breasts, pomegranate, salt, pepper, mixed greens, feta cheese, walnuts, honey",
    description: "Chicken breast & Oatmeal bread salad with Pomegranate.",
    category: "Seasonal Meals",
    price: "$23.10",
    cooking_time: "5 min",
    servings: 2,
    calories_per_serving: 479,
    image_URL: "pomegranateChickenSalad.jpg",
    top_meal: true,
  },
  {
    title: "Honey Garlic Butter Baked Salmon (March)",
    included:
      "salmon, garlic, honey, Fat-free butter, parsley, salt, pepper, paprika, lemon.",
    description: "Salmon with honey garlic butter source.",
    category: "Seasonal Meals",
    price: "$24.20",
    cooking_time: "15 min",
    servings: 2,
    calories_per_serving: 334,
    image_URL: "bakedSalmon.jpg",
    top_meal: false,
  },
  {
    title: "Margherita pizza",
    included:
      "strong white flour, tomatoes, olive oil, dried oregano, basil, mozzarella, parmesan",
    description: "Pizza with the natural taste of the ingredients.",
    category: "Holiday Meals",
    price: "$19.25",
    cooking_time: "10 min",
    servings: 4,
    calories_per_serving: 693,
    image_URL: "MargheritaPizza.jpeg",
    top_meal: false,
  },
  {
    title: "Gluten Free Pho Ga (Chicken Pho)",
    included:
      "chicken-based broth, chicken, rice noodle, fish sauce, ginger, onion, peppercorn, fennel, anise, herbs, sliced peppers, scallions, lime",
    description: "Vietnamese rice noodle soup.",
    category: "Classic Meals",
    price: "$10.50",
    cooking_time: "15 min",
    servings: 1,
    calories_per_serving: 342,
    image_URL: "rice-noodle.jpeg",
    top_meal: false,
  },
  {
    title: "Asparagus Green Toast (April)",
    included:
      "sourdough toast, mashed avocado, asparagus, black sesamee seeds, fresh dill, salt, pepper, bacon, mixed greens",
    description: "Asparagus toast that makes you feel the green in April",
    category: "Seasonal Meals",
    price: "$17.50",
    cooking_time: "5 min",
    servings: 1,
    calories_per_serving: 276,
    image_URL: "asparagusToast.jpeg",
    top_meal: false,
  },
  {
    title: "Bacon & Pea Cheesy Risotto (May)",
    included:
      "smoked bacon, pea, grated parmesan, chicken stock, risotto rice, white wine, bunch chives",
    description: "Risotto with seasonal peas.",
    category: "Seasonal Meals",
    price: "$21.24",
    cooking_time: "10 min",
    servings: 2,
    calories_per_serving: 445,
    image_URL: "baconCheesyRisotto.jpeg",
    top_meal: false,
  },
  {
    title: "Coconut Shrimp Curry",
    included:
      "shrimp, butter, onion, garlic, ginger, crushed tomatoes, coconut milk, chopped cilantro",
    description: "Shrimp curry with an coconut curry sauce.",
    category: "Classic Meals",
    price: "$18.75",
    cooking_time: "20 min",
    servings: 2,
    calories_per_serving: 462,
    image_URL: "shrimp-curry.jpeg",
    top_meal: false,
  },
  {
    title: "Peach Pie (July)",
    included:
      "unsalted butter, peach, sugar, flour, nutmeg, egg, crème fraîche ",
    description: "Homemade pie with the fresh and sweet taste of peaches.",
    category: "Seasonal Meals",
    price: "$25.30",
    cooking_time: "30 min",
    servings: 8,
    calories_per_serving: 445,
    image_URL: "peachCake.jpeg",
    top_meal: false,
  },
  {
    title: "Beef Stew with dumplings",
    included:
      "Aitchbone, onion, potatoes, flour, turnip, salt, carrot, black pepper",
    description: "Beef Stew.",
    category: "Holiday Meals",
    price: "$28.75",
    cooking_time: "20 min",
    servings: 4,
    calories_per_serving: 421,
    image_URL: "beefStew.jpeg",
    top_meal: false,
  },
  {
    title: "Sauteed Brussels Sprouts With Pancetta Foocrush (November)",
    included:
      "brussels sprouts, olive oil, unsalted butter, pancetta, cooked chestnuts, lemon, salt, black pepper",
    description: "Sauteed Brussels Sprouts With Pancetta Foocrush.",
    category: "Seasonal Meals",
    price: "$16.75",
    cooking_time: "10 min",
    servings: 4,
    calories_per_serving: 320,
    image_URL: "roastedBrusselsSprouts.jpeg",
    top_meal: false,
  },
  {
    title: "Cauliflower Tacos",
    included: "crispy breaded cauliflower(baked), refried beans",
    description: "Tacos with Cauliflower for Vegan.",
    category: "Vegan Meals",
    price: "$13.50",
    cooking_time: "15 min",
    servings: 1,
    calories_per_serving: 349,
    image_URL: "Tacos.jpg",
    top_meal: false,
  },
  {
    title: "Cocktail Meatballs",
    included:
      "chili sauce, eggs, salt, onion, breadcrumbs, meatballs, worcestershire sauce",
    description: "Meatballs with cranberry pepper jelly sauce.",
    category: "Holiday Meals",
    price: "$21",
    cooking_time: "20 min",
    servings: 4,
    calories_per_serving: 482,
    image_URL: "cocktailMeatballs.jpeg",
    top_meal: false,
  },
  {
    title: "Shakshuka",
    included: "onions, red chilli, garlic clove, cherry tomatoes, sugar, eggs",
    description:
      "Boiled eggs in a sauce made from tomatoes, peppers and onions.",
    category: "Holiday Meals",
    price: "$22.50",
    cooking_time: "25 min",
    servings: 4,
    calories_per_serving: 340,
    image_URL: "shakshuka.jpeg",
    top_meal: false,
  },
  {
    title: "Rice Fires with Shrimp",
    included:
      "bacon, green cabbage, carrot , green onions, parsley, dried tarragon, salt, pepper, red wine vinegar, shrimp,  rice",
    description: "Rice fires with shrimp & German-style coleslaw.",
    category: "Classic Meals",
    price: "$12.50",
    cooking_time: "10 min",
    servings: 1,
    calories_per_serving: 473,
    image_URL: "shrimpRiceFries.jpeg",
    top_meal: false,
  },
  {
    title: "Tofu Curry",
    included:
      "virgin coconut oil, tofu, onions,  zucchini, Japanese eggplant, green beans, unsweetened coconut milk, roasted peanuts ",
    description: "Vegetarian curry made with tofu(bean).",
    category: "Vegan Meals",
    price: "$23.50",
    cooking_time: "15 min",
    servings: 2,
    calories_per_serving: 381,
    image_URL: "TofuCurry.jpeg",
    top_meal: true,
  },
  {
    title: "Creamy Mushroom Soup",
    included:
      "virgin coconut oil, mushrooms, sweet onion, garlic, dry white wine, raw cashews, black pepper",
    description:
      "Soup with mixed mushrooms(crimini, shiitake, oyster, maitake).",
    category: "Vegan Meals",
    price: "$18.50",
    cooking_time: "5 min",
    servings: 1,
    calories_per_serving: 312,
    image_URL: "creamyMushroomSoup.jpeg",
    top_meal: true,
  },
];

// In order to categorize mealkits into category
function groupBy(data, key) {
  return data.reduce(function (carry, el) {
    var group = el[key];
    var category = null;
    carry.forEach((e) => {
      if (e.category == group) {
        category = e;
      }
    });
    if (category == null) {
      category = {
        category: group,
        mealkits: [],
      };
      carry.push(category);
    }
    category.mealkits.push(el);
    return carry;
  }, []);
}

var category = groupBy(mealkits, "category");

module.exports.getAllMealKits = function () {
  return category;
};

module.exports.getTopMeals = function () {
  var filtered = [];

  for (var i = 0; i < mealkits.length; i++) {
    if (mealkits[i].top_meal) {
      filtered.push(mealkits[i]);
    }
  }
  return filtered;
};
