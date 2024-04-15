import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {FullMovie} from '../../../core/entities/movie.entity';
import {Formatter} from '../../../config/helpers/formatter';
import {CastActor} from '../cast/CastActor';
import {Cast} from '../../../core/entities/cast.entity';

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = ({movie, cast}: Props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.ratingContainer}>
          <Text>{movie.rating}</Text>
          <Text style={styles.genreText}>- {movie.genres.join(', ')}</Text>
        </View>

        <Text style={styles.title}>Historia</Text>
        <Text style={styles.description}>{movie.description}</Text>

        <Text style={styles.title}>Presupuesto</Text>
        <Text style={styles.budget}>{Formatter.currency(movie.budget)}</Text>
      </View>

      {/* Casting */}
      <View style={styles.castContainer}>
        <Text style={styles.castTitle}>Actores</Text>
        <FlatList
          data={cast}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <CastActor actor={item} />}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  genreText: {
    marginLeft: 5,
  },
  title: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  budget: {
    fontSize: 18,
  },
  castContainer: {
    marginTop: 10,
    marginBottom: 50,
  },
  castTitle: {
    fontSize: 23,
    marginVertical: 10,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});
