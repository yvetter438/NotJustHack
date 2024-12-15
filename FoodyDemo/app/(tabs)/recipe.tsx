import React from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, ScrollView } from 'react-native';

const recipes = [
  {
    id: '1',
    title: 'Spaghetti Carbonara',
    description: 'A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.',
    ingredients: ['Spaghetti', 'Eggs', 'Cheese', 'Pancetta', 'Pepper'],
    instructions: [
      'Cook the spaghetti according to the package instructions.',
      'In a separate pan, cook the pancetta until crispy.',
      'In a bowl, whisk together the eggs and cheese.',
      'Combine the cooked spaghetti with the pancetta, and mix in the egg mixture.',
      'Serve immediately with freshly ground pepper.',
    ],
  },
  {
    id: '2',
    title: 'Chicken Alfredo',
    description: 'Creamy pasta with grilled chicken, garlic, and parmesan cheese.',
    ingredients: ['Pasta', 'Chicken Breast', 'Garlic', 'Heavy Cream', 'Parmesan Cheese'],
    instructions: [
      'Cook the pasta according to the package instructions.',
      'Grill the chicken breast until fully cooked and slice it.',
      'In a pan, sauté the garlic in butter, then add the heavy cream.',
      'Mix in the parmesan cheese and let it melt into a creamy sauce.',
      'Combine the pasta and chicken with the sauce, and serve hot.',
    ],
  },
  // Add more recipes as needed
];

const RecipeScreen = () => {
  const { width, height } = Dimensions.get('window');

  const renderItem = ({ item }: { item: any }) => (
    <ScrollView style={[styles.recipeContainer, { width, height }]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        {item.ingredients.map((ingredient: string, index: number) => (
          <Text key={index} style={styles.ingredient}>
            - {ingredient}
          </Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Instructions</Text>
        {item.instructions.map((instruction: string, index: number) => (
          <Text key={index} style={styles.instruction}>
            {index + 1}. {instruction}
          </Text>
        ))}
      </View>
    </ScrollView>
  );

  return (
    <FlatList
      data={recipes}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  recipeContainer: {
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 5,
  },
  instruction: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default RecipeScreen;
